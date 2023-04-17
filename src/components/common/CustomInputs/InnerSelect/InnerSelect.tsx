import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

interface Props {
  optionsList: { text: string | number; value: string | number }[];
  selectedOption: string | number;
  setSelectedOption: (value: string | number) => void;
}

export default function InnerSelect({
  optionsList,
  selectedOption,
  setSelectedOption,
}: Props) {
  const getSelectedText = (valueToFind: string | number) => {
    const object = optionsList.find((item) => item.value === valueToFind);
    return object?.text;
  };

  return (
    <div className="relative z-10">
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-pointer bg-base-200 py-2.5 pl-10 pr-3 text-right overflow-hidden rounded-md shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2  sm:text-sm">
            <span className="block truncate text-contentlg">
              {getSelectedText(selectedOption)}
            </span>
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 bg-base-600">
              <ChevronUpDownIcon
                className="h-5 w-5 text-contentmd"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-base-200 py-1 shadow-xl text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {optionsList.map((subject, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }: any) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? "bg-base-400 text-contentxl" : "text-contentsm"
                    }`
                  }
                  value={subject.value}
                >
                  {({ selected }: any) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {subject.text}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-theme-400">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
