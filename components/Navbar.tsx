import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/outline";
export default function Navbar() {
  const links = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About us" },
    { href: "/projects", name: "Projects" },
  ];
  return (
    <header className="py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <Link href="/">
          <a className="flex-none">
            <span className="sr-only">
              Bruder Hilfe Social Development Initiative
            </span>
            <img src="/logo.png" alt="" className="h-6 sm:h-8 w-auto" />
          </a>
        </Link>
        <div className="flex ml-auto space-x-4 items-center font-light text-md">
          {links.map((link) => (
            <Link href={link.href} key={link.name}>
              <a className="">{link.name}</a>
            </Link>
          ))}
        </div>
        <Link href="/donate">
          <a className="ml-12 inline-flex items-center px-3 py-2.5 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-primary hover:bg-primary-dark">
            Donate Now
      
          <ArrowRightIcon className="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
          </a>
        </Link>
      </div>
    </header>
  );
}
