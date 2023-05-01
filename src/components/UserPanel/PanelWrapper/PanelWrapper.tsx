"use client";

import React, { FC, Fragment, ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Dialog, Transition } from "@headlessui/react";

import { PanelSidebar } from "@components/UserPanel/Sidebar/PanelSidebar";
import { PanelContent } from "@components/UserPanel/Content/PanelContent";

import { sidebarNavigation } from "@core/constants/userpanel-page/sidebar/sidebar.constants";
import { AppState } from "@core/redux/store/store";
import { loggedOut } from "@core/redux/redux-store/auth/auth.slice";
import { RoutesEnum } from "@core/enums/routes/routes.enums";
import { ToastMessagesEnum } from "@core/enums/toast-messages/toast-messages.enums";

interface Props {
  children: ReactNode;
}

const PanelWrapper: FC<Props> = ({ children }): JSX.Element | null => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { AuthData } = useSelector((state: AppState) => state.AuthData);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentUrl = usePathname();

  useEffect(() => {
    if (!AuthData) {
      router.push(RoutesEnum.RootPage);
      toast.info(ToastMessagesEnum.MustLoggedIn);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUserExit = () => {
    dispatch(loggedOut());
    toast.success(ToastMessagesEnum.LoggedOut);
  };

  if (!AuthData) {
    return null;
  }

  return (
    <div className="h-full">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 flex xl:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-[18rem] md:max-w-xs w-full bg-neutral-300 px-2 py-6">
              <div className="flex items-center justify-between border-b-[1px] border-gray-400 pb-6">
                <div className="flex-shrink-0 flex items-center justify-start">
                  <h2 className="text-xl font-black text-[#1E1E1E]">
                    نیوکوین اسپیس
                  </h2>
                </div>
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <button
                    type="button"
                    className="focus:outline-none"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <AiOutlineCloseCircle className="w-7 h-7 text-primary" />
                  </button>
                </Transition.Child>
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="space-y-1">
                  {sidebarNavigation.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className={`group flex items-center px-[18px] py-[10px] text-sm font-bold rounded-2xl ${
                        currentUrl === item.href
                          ? " bg-primary text-white"
                          : "text-base hover:bg-primary/10"
                      }`}
                      onClick={() => {
                        if (item.href === "/") {
                          onUserExit();
                        }
                      }}
                    >
                      <item.icon
                        className={`ml-[18px] flex-shrink-0 h-6 w-6 ${
                          currentUrl === item.href ? "text-white" : "text-black"
                        }`}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
      <div className="h-full grid grid-cols-5 gap-x-[18px]">
        <div className="hidden xl:col-span-1 xl:flex xl:flex-col xl:overflow-hidden bg-white rounded-2xl py-4 px-7">
          <PanelSidebar pathName={currentUrl} onUserExit={onUserExit} />
        </div>
        <div className="col-span-5 xl:col-span-4 overflow-y-auto">
          <PanelContent setSidebarOpen={setSidebarOpen}>
            {children}
          </PanelContent>
        </div>
      </div>
    </div>
  );
};

export { PanelWrapper };
