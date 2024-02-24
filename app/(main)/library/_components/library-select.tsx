"use client";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const statuses = [
  { name: "Unread" },
  { name: "In progress" },
  { name: "Done" },
  { name: "All books" },
];

const LibrarySelect = () => {
  const [selected, setSelected] = useState(statuses[3]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full cursor-pointer rounded-xl bg-transparent text-primary border border-neutral-700 px-3.5 py-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="block truncate text-stone-50 text-xs md:text-sm font-medium leading-none w-[60px] md:w-[90px]">
            {selected.name}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDown className="w-4 h-4 strok-white" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-xl py-[14px] pl-[14px] flex flex-col gap-[7px] bg-neutral-800 text-base ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {statuses.map((status, i) => (
              <Listbox.Option
                key={i}
                className={({ active }) =>
                  `relative cursor-pointer select-none pr-4 ${
                    active ? "text-stone-50" : "text-stone-500"
                  }`
                }
                value={status}
              >
                {({ selected }) => (
                  <span
                    className={cn(
                      "block truncate text-stone-500 text-xs md:text-sm font-medium leading-none",
                      selected && "text-primary"
                    )}
                  >
                    {status.name}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default LibrarySelect;
