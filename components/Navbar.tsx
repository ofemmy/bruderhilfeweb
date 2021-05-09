import { useState, Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import { useNavigation } from "../lib/useNavigation";
import { classNames } from "lib/utils";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Dialog, Menu, Transition } from "@headlessui/react";

export default function Navbar() {
  const { routes, setCurrentRoute } = useNavigation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setCurrentRoute(router.pathname);
  }, []);
  return (
    <header className="py-6 sticky top-0 z-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between font-light">
        <Link href="/">
          <a className="flex-none">
            <span className="sr-only">
              Bruder Hilfe Social Development Initiative
            </span>
            <img src="/logo.png" alt="" className="h-6 sm:h-8 w-auto" />
          </a>
        </Link>
        <div className="hidden md:flex ml-auto space-x-12 items-center text-md">
          <>
            {routes.map((route) => (
              <Link href={route.href} key={route.name}>
                <a
                  className={classNames(
                    route.active ? "font-semibold text-primary" : ""
                  )}
                >
                  {route.name}
                </a>
              </Link>
            ))}
            <Link href="/donate">
              <a className="inline-flex items-center px-6 py-4 border border-transparent shadow-sm leading-4 font-medium rounded-md text-white bg-primary hover:bg-primary-dark">
                Donate
                <ArrowRightIcon
                  className="ml-2 -mr-0.5 h-4 w-4"
                  aria-hidden="true"
                />
              </a>
            </Link>
          </>
        </div>
        <div className="block md:hidden">
          <button
            type="button"
            className="px-4 border-gray-200 text-primary focus:outline-none md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6 text-primary" aria-hidden="true" />
          </button>
        </div>
      </div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-50 md:hidden"
          open={sidebarOpen}
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
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
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
              <Link href="/">
                <a className="flex-none px-4">
                  <span className="sr-only">
                    Bruder Hilfe Social Development Initiative
                  </span>
                  <img src="/logo.png" alt="" className="h-6 sm:h-8 w-auto" />
                </a>
              </Link>
              <div className="mt-7 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-4">
                  {routes.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.active
                          ? " text-primary font-medium"
                          : "text-custom-gray hover:text-primary",
                        "group flex items-center px-2 py-2 text-base  font-light rounded-md"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Link href="/donate">
              <a className="flex items-center px-6 py-3 border border-transparent shadow-sm font-light rounded-md text-white bg-primary hover:bg-primary-dark">
                Donate
                <ArrowRightIcon
                  className="ml-2 -mr-0.5 h-4 w-4"
                  aria-hidden="true"
                />
              </a>
            </Link>
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  );
}
