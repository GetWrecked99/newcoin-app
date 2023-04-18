"use client";
import React, { ReactNode } from "react";
import PanelSidebar from "../Sidebar/PanelSidebar";
import PanelContent from "../Content/PanelContent";
import { usePathname } from "next/navigation";

interface Props {
  children: ReactNode;
}

export default function PanelWrapper({ children }: Props) {
  const currentUrl = usePathname();

  return (
    <div className="h-full">
      {/* <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 flex lg:hidden"
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
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-neutral-300">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 px-4 flex items-center justify-start">
                <Image
                  className="h-8 w-auto"
                  src={SyntaxLogo}
                  alt="Syntaax Logo"
                />
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      to={item.to}
                      className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                        location === item.to
                          ? " bg-neutral-700 text-white"
                          : " text-neutral-500 hover:bg-gray-700 hover:text-white"
                      }`}
                    >
                      <item.icon
                        className={`ml-4 flex-shrink-0 h-6 w-6 ${
                          location === item.to
                            ? "text-white"
                            : "text-neutral-500 group-hover:text-gray-300"
                        }`}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex-shrink-0 flex bg-base-100 p-4">
                <div className="flex-shrink-0 w-full group block">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-md overflow-hidden">
                      <Image
                        src={(AuthData as any).profile}
                        className="w-full h-full object-cover"
                        alt={(AuthData as any).fullName}
                      />
                    </div>
                    <div className="mr-3">
                      <p className="text-sm font-medium text-contentlg line-clamp-1">
                        {(AuthData as any).fullName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">
            Dummy element to force sidebar to shrink to fit close icon
          </div>
        </Dialog>
      </Transition.Root> */}
      <div className="h-full flex flex-row gap-x-[18px]">
        <PanelSidebar pathName={currentUrl} />
        <PanelContent>{children}</PanelContent>
      </div>
    </div>
  );
}
