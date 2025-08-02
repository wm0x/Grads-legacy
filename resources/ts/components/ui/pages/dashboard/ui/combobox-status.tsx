"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "../../../../lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover";

export const status = [
  {
    value: " complete ",
    label: "complete",
  },
  {
    value: "in progress",
    label: "in progress",
  },
  {
    value: "not complete",
    label: "not complete",
  },
];

interface ComboboxDemoProps {
  value: string;
  onChange: (value: string) => void;
}

export function ComboboxDemo({ value, onChange }: ComboboxDemoProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild dir="rtl" className=" overflow-y-auto">
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between overflow-hidden w-full"
        >
          <span className="truncate max-w-[180px] text-right">
            {value
              ? status.find((status) => status.value === value)?.label
              : "selecte state"}
          </span>
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder="search"
            className="h-9"
            dir="rtl"
          />
          <CommandList>
            <CommandEmpty>not found</CommandEmpty>
            <CommandGroup>
              {status.map((status) => (
                <CommandItem
                  key={status.value}
                  dir="rtl"
                  value={status.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {status.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === status.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
