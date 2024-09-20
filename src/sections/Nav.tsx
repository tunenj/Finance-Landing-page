import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import hedge from "../assets/logo.png";
import ButtonLink from "../common/ButtonLink";

function Nav() {
  const textLinkClasses =
    "text-white hover:text-blue-300 active:text-gray-400";

  const navLinks = [
    { href: "#about", label: "Company" },
    { href: "#partners", label: "Partners" },
    { href: "#services", label: "Services" },
    { href: "#reviews", label: "Reviews" },
  ];

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="flex h-[15vh] w-full items-center justify-between px-8 lg:px-12  xl:m-auto bg-blue-950">
            <div className="flex">
              <ButtonLink href="#">
                <img src={hedge} alt="9Hedge logo" style={{ width: "200px" }} />
              </ButtonLink>
              <div className="ml-4 hidden items-center space-x-4 sm:ml-6 sm:flex lg:ml-8 lg:space-x-8 text-xl font-bold">
                {navLinks.map((link, index) => (
                  <ButtonLink key={index} href={link.href} className={textLinkClasses}>
                    {link.label}
                  </ButtonLink>
                ))}
              </div>
            </div>
            <div className="flex md:space-x-3 lg:flex-row">
              <ButtonLink
                href="#login"
                className="active:bg hidden rounded-xl bg-orange-300 px-3 py-3 hover:bg-gray-500 text-white font-bold active:bg-gray-400 sm:flex"
              >
                Login
              </ButtonLink>
              <ButtonLink
                href="https://play.google.com/store/search?q=9HEDGE&c=apps"
                target="_blank"
                className="active:bg hidden rounded-xl bg-white px-3 py-3 text-blue-700 font-bold hover:bg-slate-600 active:bg-gray-600 sm:flex"
              >
                Download Here
              </ButtonLink>
            </div>
            <Disclosure.Button className="rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white sm:hidden">
              {open ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </Disclosure.Button>
          </div>
          <Disclosure.Panel className="space-y-1 px-4 sm:hidden text-blue-700">
            {navLinks.map((link, index) => (
              <Disclosure.Button className="block" as="a" href={link.href} key={index}>
                {link.label}
              </Disclosure.Button>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;
