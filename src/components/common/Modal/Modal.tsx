import React, { FC, ReactNode, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface Props {
  children: ReactNode;
  isModalOpen: boolean;
  closeModal: () => void;
}

const Modal: FC<Props> = ({
  children,
  isModalOpen,
  closeModal,
}): JSX.Element => {
  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[51]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed w-full max-w-3xl min-h-min inset-0 top-[42%] 2xl:top-1/2 left-1/2 -translate-x-2/3 -translate-y-1/2">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export { Modal };
