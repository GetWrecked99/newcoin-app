import React, { FC, Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { BsChevronDown } from "react-icons/bs";

import {
  comboboxType,
  geoAddressType,
} from "@core/types/constant-types/register/register.types";

interface Props {
  selectedOption: geoAddressType;
  setSelectedOption: (value: comboboxType) => void;
  optionsList: comboboxType[];
  placeHolder: string;
}

const InnerComboBox: FC<Props> = ({
  selectedOption,
  setSelectedOption,
  optionsList,
  placeHolder,
}): JSX.Element => {
  const [query, setQuery] = useState("");

  const filteredItem =
    query === ""
      ? optionsList
      : optionsList.filter((option) => {
          return option.name.toLowerCase().includes(query.toLowerCase());
        });
  return (
    <div className="relative z-[50] w-full h-full">
      <Combobox value={selectedOption} onChange={setSelectedOption}>
        <Combobox.Input
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(item: geoAddressType) => (item ? item.name : "")}
          className="!w-full !h-full rounded-e-full focus:outline-none sm:text-md"
          placeholder={placeHolder}
          autoComplete="off"
        />
        <Combobox.Button className="absolute inset-y-[30px] left-6 flex items-center rounded-r-md px-2 focus:outline-none text-[#D6D6D6]">
          <BsChevronDown className="h-5 w-5" />
        </Combobox.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-y-auto rounded-md bg-slate-50 border-[1px] border-slate-100 py-1 text-base shadow-xl focus:outline-none sm:text-sm">
            {filteredItem.map((item) => (
              <Combobox.Option key={item.id} value={item} as={Fragment}>
                {({ active, selected }) => (
                  <li
                    className={
                      "relative cursor-default select-none py-2 pl-3 pr-9 " +
                      (active ? "bg-primary text-white" : "text-gray-900")
                    }
                  >
                    <span
                      className={
                        "block truncate " + (active ? "font-bold" : "")
                      }
                    >
                      {item.name}
                    </span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-white">
                      {selected ? <CheckIcon className="w-5 h-5" /> : null}
                    </span>
                  </li>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
};

export { InnerComboBox };
