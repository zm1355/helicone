import { Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  PlusCircleIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { Fragment } from "react";
import { clsx } from "../../shared/clsx";

interface FilterBadgeProps {
  title: string;
  clearFilter: () => void;
  variant?: "primary" | "secondary";
  label?: string; // the label if the filter is active
  children?: React.ReactNode;
  width?: string; // width in rem
  showTitle?: boolean;
}

const FilterBadge = (props: FilterBadgeProps) => {
  const {
    title,
    clearFilter,
    variant = "primary",
    label,
    children,
    width = "14rem",
    showTitle = true,
  } = props;

  return (
    <div className="z-10 flex">
      <Popover className="relative flex w-full">
        {({ open }) => (
          <div className="w-full">
            <Popover.Button
              className={clsx(
                variant === "secondary" && "border-dashed",
                "bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-full flex flex-row items-center pl-1.5 pr-2.5 py-1 text-xs font-semibold gap-1 divide-x divide-gray-300"
              )}
            >
              <div className="flex flex-row items-center gap-1">
                {label ? (
                  <button
                    className="hover:bg-gray-200 p-0.5 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      clearFilter();
                    }}
                  >
                    <XMarkIcon className="w-3 h-3 text-gray-500" />
                  </button>
                ) : (
                  <PlusIcon className="w-3 h-3 text-gray-500" />
                )}

                <span className="text-gray-900 dark:text-gray-100">
                  {title}
                </span>
              </div>
              {label && (
                <div className="pl-1 flex items-center space-x-1">
                  <span className="text-sky-500">{label}</span>
                  <ChevronDownIcon className="w-3 h-3" />
                </div>
              )}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className={clsx(
                  `w-${width} min-w-[14rem]`,
                  "absolute block flex-col space-y-3 -left-2 mt-2 origin-top-left rounded-lg py-2 px-3 bg-white dark:bg-black shadow-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                )}
              >
                {showTitle && (
                  <p className="mt-1 font-semibold text-gray-700 dark:text-gray-300 text-sm">
                    Filter by {title.toLowerCase()}
                  </p>
                )}
                <div className="w-full flex">{children}</div>
              </Popover.Panel>
            </Transition>
          </div>
        )}
      </Popover>
    </div>
  );
};

export default FilterBadge;
