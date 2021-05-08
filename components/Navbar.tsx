import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import { useNavigation } from "../lib/useNavigation";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { routes, setCurrentRoute } = useNavigation();
  const router = useRouter();
  useEffect(() => {
    setCurrentRoute(router.pathname);
  }, []);
  return (
    <header className="py-6 sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center font-light">
        <Link href="/">
          <a className="flex-none">
            <span className="sr-only">
              Bruder Hilfe Social Development Initiative
            </span>
            <img src="/logo.png" alt="" className="h-6 sm:h-8 w-auto" />
          </a>
        </Link>
        <div className="flex ml-auto space-x-12 items-center text-md">
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
        </div>
        <Link href="/donate">
          <a className="ml-12 inline-flex items-center px-6 py-4 border border-transparent shadow-sm leading-4 font-medium rounded-md text-white bg-primary hover:bg-primary-dark">
            Donate Now
            <ArrowRightIcon
              className="ml-2 -mr-0.5 h-4 w-4"
              aria-hidden="true"
            />
          </a>
        </Link>
      </div>
    </header>
  );
}
