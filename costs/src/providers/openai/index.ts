/**
 *
 * DO NOT EDIT THIS FILE UNLESS IT IS IN /costs
 */

import { ModelRow } from "../../interfaces/Cost";

export const costs: ModelRow[] = [
  {
    model: {
      operator: "equals",
      value: "ada",
    },
    cost: {
      prompt_token: 0.0000004,
      completion_token: 0.0000004,
    },
    max_window_size: 4096,
  },
  {
    model: {
      operator: "equals",
      value: "text-ada-001",
    },
    cost: {
      prompt_token: 0.0000004,
      completion_token: 0.0000004,
    },
    max_window_size: 4096,
  },
  {
    model: {
      operator: "equals",
      value: "babbage",
    },
    cost: {
      prompt_token: 0.0000005,
      completion_token: 0.0000005,
    },
    max_window_size: 4096,
  },
  {
    model: {
      operator: "equals",
      value: "curie",
    },
    cost: {
      prompt_token: 0.000002,
      completion_token: 0.000002,
    },
    max_window_size: 4096,
  },
  {
    model: {
      operator: "equals",
      value: "text-curie-001",
    },
    cost: {
      prompt_token: 0.000002,
      completion_token: 0.000002,
    },
    max_window_size: 4096,
  },
  {
    model: {
      operator: "equals",
      value: "davinci",
    },
    cost: {
      prompt_token: 0.00002,
      completion_token: 0.00002,
    },
    max_window_size: 4096,
  },
  {
    model: {
      operator: "equals",
      value: "text-davinci-001",
    },
    cost: {
      prompt_token: 0.00002,
      completion_token: 0.00002,
    },
    max_window_size: 4096,
  },
  {
    model: {
      operator: "equals",
      value: "text-davinci-002",
    },
    cost: {
      prompt_token: 0.00002,
      completion_token: 0.00002,
    },
    max_window_size: 4096,
  },
  {
    model: {
      operator: "equals",
      value: "text-davinci-003",
    },
    cost: {
      prompt_token: 0.00002,
      completion_token: 0.00002,
    },
    max_window_size: 4096,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-3.5-turbo",
    },
    cost: {
      prompt_token: 0.0000015,
      completion_token: 0.000002,
    },
    showInPlayground: true,
    max_window_size: 4096,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-3.5-turbo-0301",
    },
    cost: {
      prompt_token: 0.0000015,
      completion_token: 0.000002,
    },
    showInPlayground: true,
    max_window_size: 4096,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-35-turbo",
    },
    cost: {
      prompt_token: 0.0000015,
      completion_token: 0.000002,
    },
    max_window_size: 4096,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-3.5-turbo-1106",
    },
    cost: {
      prompt_token: 0.000001,
      completion_token: 0.000002,
    },
    showInPlayground: true,
    max_window_size: 4096,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-3.5-turbo-instruct",
    },
    cost: {
      prompt_token: 0.0000015,
      completion_token: 0.000002,
    },
    showInPlayground: true,
    max_window_size: 4096,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-3.5-turbo-instruct-0914",
    },
    cost: {
      prompt_token: 0.0000015,
      completion_token: 0.000002,
    },
    showInPlayground: true,
    max_window_size: 4096,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4",
    },
    cost: {
      prompt_token: 0.00003,
      completion_token: 0.00006,
    },
    showInPlayground: true,
    max_window_size: 8192,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-0314",
    },
    cost: {
      prompt_token: 0.00003,
      completion_token: 0.00006,
    },
    showInPlayground: true,
    max_window_size: 8192,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-0613",
    },
    cost: {
      prompt_token: 0.00003,
      completion_token: 0.00006,
    },
    showInPlayground: true,
    max_window_size: 8192,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-32k",
    },
    cost: {
      prompt_token: 0.00006,
      completion_token: 0.00012,
    },
    showInPlayground: true,
    max_window_size: 32768,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-32k-0314",
    },
    cost: {
      prompt_token: 0.00006,
      completion_token: 0.00012,
    },
    showInPlayground: true,
    max_window_size: 32768,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-32k-0613",
    },
    cost: {
      prompt_token: 0.00006,
      completion_token: 0.00012,
    },
    showInPlayground: true,
    max_window_size: 32768,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-0125-preview",
    },
    cost: {
      prompt_token: 0.00001,
      completion_token: 0.00003,
    },
    showInPlayground: true,
    max_window_size: 128000,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-1106-preview",
    },
    cost: {
      prompt_token: 0.00001,
      completion_token: 0.00003,
    },
    showInPlayground: true,
    max_window_size: 128000,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-1106-vision-preview",
    },
    cost: {
      prompt_token: 0.00001,
      completion_token: 0.00003,
    },
    showInPlayground: true,
    max_window_size: 128000,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4o",
    },
    cost: {
      prompt_token: 0.000005,
      completion_token: 0.000015,
    },
    showInPlayground: true,
    max_window_size: 8192,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4o-2024-05-13",
    },
    cost: {
      prompt_token: 0.000005,
      completion_token: 0.000015,
    },
    showInPlayground: true,
    max_window_size: 8192,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4o-mini",
    },
    cost: {
      prompt_token: 0.00000015,
      completion_token: 0.0000006,
    },
    showInPlayground: true,
    max_window_size: 8192,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4o-mini-2024-07-18",
    },
    cost: {
      prompt_token: 0.00000015,
      completion_token: 0.0000006,
    },
    showInPlayground: true,
    max_window_size: 8192,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-3.5-turbo-0613",
    },
    cost: {
      prompt_token: 0.0000015,
      completion_token: 0.000002,
    },
    showInPlayground: true,
    max_window_size: 4096,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-35-turbo-16k",
    },
    cost: {
      prompt_token: 0.000003,
      completion_token: 0.000004,
    },
    max_window_size: 16384,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-3.5-turbo-16k-0613",
    },
    cost: {
      prompt_token: 0.000003,
      completion_token: 0.000004,
    },
    showInPlayground: true,
    max_window_size: 16384,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-3.5-turbo-0125",
    },
    cost: {
      prompt_token: 0.0000005,
      completion_token: 0.0000015,
    },
    showInPlayground: true,
    max_window_size: 4096,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-turbo",
    },
    cost: {
      prompt_token: 0.00001,
      completion_token: 0.00003,
    },
    showInPlayground: true,
    max_window_size: 128000,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-turbo-2024-04-09",
    },
    cost: {
      prompt_token: 0.00001,
      completion_token: 0.00003,
    },
    showInPlayground: true,
    max_window_size: 128000,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-turbo-0125-preview",
    },
    cost: {
      prompt_token: 0.00001,
      completion_token: 0.00003,
    },
    showInPlayground: true,
    max_window_size: 128000,
  },
  {
    model: {
      operator: "equals",
      value: "text-embedding-ada-002",
    },
    cost: {
      prompt_token: 0.0000001,
      completion_token: 0.0,
    },
    max_window_size: 8192,
  },
  {
    model: {
      operator: "equals",
      value: "text-embedding-ada",
    },
    cost: {
      prompt_token: 0.0000001,
      completion_token: 0.0,
    },
    max_window_size: 8192,
  },
  {
    model: {
      operator: "equals",
      value: "text-embedding-ada-002-v2",
    },
    cost: {
      prompt_token: 0.0000001,
      completion_token: 0.0,
    },
    max_window_size: 8192,
  },
  {
    model: {
      operator: "equals",
      value: "text-embedding-3-small",
    },
    cost: {
      prompt_token: 0.00000002,
      completion_token: 0.0,
    },
    max_window_size: 8192,
  },
  {
    model: {
      operator: "equals",
      value: "text-embedding-3-large",
    },
    cost: {
      prompt_token: 0.00000013,
      completion_token: 0.0,
    },
    max_window_size: 8192,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-vision-preview",
    },
    cost: {
      prompt_token: 0.00001,
      completion_token: 0.00003,
    },
    max_window_size: 128000,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-35-turbo-16k-0613",
    },
    showInPlayground: true,
    cost: {
      prompt_token: 0.000003,
      completion_token: 0.000004,
    },
    max_window_size: 16384,
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4o-2024-08-06",
    },
    showInPlayground: true,
    cost: {
      prompt_token: 0.0000025,
      completion_token: 0.00001,
    },
    max_window_size: 8192,
  },
  {
    model: {
      operator: "equals",
      value: "o1-preview",
    },
    cost: {
      prompt_token: 0.000015,
      completion_token: 0.00006,
    },
    showInPlayground: true,
    max_window_size: 8192,
  },
  {
    model: {
      operator: "equals",
      value: "o1-preview-2024-09-12",
    },
    cost: {
      prompt_token: 0.000015,
      completion_token: 0.00006,
    },
    showInPlayground: true,
    max_window_size: 8192,
  },
  {
    model: {
      operator: "equals",
      value: "o1-mini",
    },
    cost: {
      prompt_token: 0.000003,
      completion_token: 0.000012,
    },
    showInPlayground: true,
    max_window_size: 8192,
  },
  {
    model: {
      operator: "equals",
      value: "o1-mini-2024-09-12",
    },
    cost: {
      prompt_token: 0.000003,
      completion_token: 0.000012,
    },
    showInPlayground: true,
    max_window_size: 8192,
  },
];
