// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { Result, err, ok } from "../shared/result";
import { SupabaseServerWrapper } from "../wrappers/supabase";
import { User } from "@supabase/auth-helpers-nextjs";
import { FilterNode } from "../shared/filters/filterDefs";
import { Permission, Role, hasPermission } from "../../services/lib/user";
import { TimeFilter } from "../shared/filters/timeFilter";

export interface HandlerWrapperNext<RetVal> {
  req: NextApiRequest;
  res: NextApiResponse<RetVal>;
}

export class RequestBodyParser {
  private body: any;
  constructor(private req: NextApiRequest) {
    try {
      if (typeof req.body === "string" && req.body.length > 0) {
        this.body = JSON.parse(req.body);
      } else {
        this.body = req.body;
      }
    } catch (e) {
      console.error("RequestBodyParser", e, req.body);
      this.body = {};
    }
  }
  getFilter(): Result<FilterNode, string> {
    if (this.body.filter) {
      return ok(this.body.filter);
    } else {
      return err("No filter provided");
    }
  }

  getTimeFilter(): Result<TimeFilter, string> {
    try {
      if (this.body.timeFilter) {
        return ok({
          start: new Date(this.body.timeFilter.start),
          end: new Date(this.body.timeFilter.end),
        });
      } else {
        return err("No time filter provided");
      }
    } catch (e) {
      return err(
        "Invalid time filter" + JSON.stringify(this.body.timeFilter) + e
      );
    }
  }
}
export interface HandlerWrapperOptions<RetVal>
  extends HandlerWrapperNext<RetVal> {
  supabaseClient: SupabaseServerWrapper<RetVal>;
  userData: {
    userId: string;
    orgHasOnboarded: boolean;
    orgId: string;
    user: User;
    role: string;
  };
  body: RequestBodyParser;
}

export interface HandlerWrapperOptionsAPI<RetVal>
  extends HandlerWrapperNext<RetVal> {
  userData?: HandlerWrapperOptions<RetVal>["userData"];
}

export function withAuth<T>(
  handler: (supabaseServer: HandlerWrapperOptions<T>) => Promise<void>,
  permissions?: Permission[]
) {
  return async (
    req: NextApiRequest,
    res: NextApiResponse<T | { error: string }>
  ) => {
    console.log("withAuth", req.url);
    console.error("withAuth", req.cookies);
    req.cookies["supabase-auth-token"] =
      '["eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzA0ODU0MzQ2LCJpYXQiOjE3MDQ4NTA3NDYsImlzcyI6Imh0dHA6Ly8xMjcuMC4wLjE6NTQzMjEvYXV0aC92MSIsInN1YiI6ImY3NjYyOWM1LWEwNzAtNGJiYy05OTE4LTY0YmVhZWE0ODg0OCIsImVtYWlsIjoidGVzdEBoZWxpY29uZS5haSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNzA0ODUwNzQ2fV0sInNlc3Npb25faWQiOiJmYzM1ZTBmYy05ZGZmLTQ4Y2YtYjIyMy02NGM2YTEzY2U4Y2MifQ.VK29cFTs0iVUiW13XgMuMP3SXFRKKHhzdGGwkN1jpZA","eebQMzHwQCgmlG6hn_idgQ",null,null]';

    const supabaseClient = new SupabaseServerWrapper({
      req,
      res,
    });
    const { data, error } = await supabaseClient.getUserAndOrg();
    if (error !== null || !data.orgId || !data.userId) {
      res.status(401).json({
        error: `Unauthorized: error`,
      });
      return;
    }

    // Check permissions
    if (
      permissions &&
      permissions.length > 0 &&
      !permissions.every((permission) =>
        hasPermission(data.role as Role, permission)
      )
    ) {
      res.status(403).json({ error: "Forbidden" });
      return;
    }

    await handler({
      req,
      res,
      supabaseClient,
      userData: data,
      body: new RequestBodyParser(req),
    });
  };
}

export interface HandlerWrapperOptionsSSR<RetVal> {
  context: GetServerSidePropsContext;
  supabaseClient: SupabaseServerWrapper<RetVal>;
  userData: {
    userId: string;
    orgId: string;
    orgHasOnboarded: boolean;
    user: User;
  };
}

export function withAuthSSR<T>(
  getServerSidePropsFunc: (
    options: HandlerWrapperOptionsSSR<T>
  ) => ReturnType<GetServerSideProps>
) {
  return async (
    context: GetServerSidePropsContext
  ): Promise<ReturnType<GetServerSideProps>> => {
    const supabaseClient = new SupabaseServerWrapper(context);
    const { data, error } = await supabaseClient.getUserAndOrg();
    if (error !== null || !data.orgId || !data.userId) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    } else {
      return await getServerSidePropsFunc({
        context,
        supabaseClient,
        userData: data,
      });
    }
  };
}
