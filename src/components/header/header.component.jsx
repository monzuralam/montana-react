import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const displayMobileMenu = mobileMenuOpen ? "block" : "hidden";
  const toggleMenu = mobileMenuOpen ? "hidden" : "block";
  console.log(displayMobileMenu);
  console.log(mobileMenuOpen);
  return (
    <>
      <header className="bg-white">
        <div className="container mx-auto">
          <nav className="mx-auto flex items-center justify-between p-6 lg:p-8">
            <div className="flex lg:flex-1">
              <Link to="/">
                <span className="text-2xl font-bold">MonTana</span>
              </Link>
            </div>
            <div className={`flex lg:hidden ${toggleMenu}`}>
              <button
                className="-m-2.5 inline-flex item-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => {
                  setMobileMenuOpen(true);
                }}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <Link
                to="/"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Home
              </Link>
              <Link
                to="/services/"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Services
              </Link>
              <Link
                to="/blog/"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Blog
              </Link>
              <Link
                to="/contact/"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Contact
              </Link>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link
                to="/login/"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Log in
              </Link>
            </div>
            {/* mobile menu show, hide based on state */}
            <div className={`lg:hidden ${displayMobileMenu}`}>
              <div className="fixed inset-0 z-10"></div>
              <div className="bg-white fixed inset-y-0 z-10 right-0 w-full overflow-y-auto px-6 py-6 md:max-w-full sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <Link to="/">
                    <span className="text-2xl font-bold">MonTana</span>
                  </Link>
                  <button
                    type="button"
                    className={`1-m-2.5 rounded-md p-2.5 text-gray-700`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <Link
                        to="/"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Home
                      </Link>
                      <Link
                        to="/services/"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Services
                      </Link>
                      <Link
                        to="/blog/"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Blog
                      </Link>
                      <Link
                        to="/contact/"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Contact
                      </Link>
                    </div>
                    <div className="py-6">
                      <Link
                        to="/login/"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Log in
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
