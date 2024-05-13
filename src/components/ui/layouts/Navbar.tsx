import { Link } from "react-router-dom";
import { Button } from "../button";
import { useState } from "react";

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav
      className=" flex  fixed z-[999] w-full flex-wrap items-center justify-between bg-[#074495] 
      py-2 shadow-dark-mild lg:py-4 text-white"
      data-twe-navbar-ref
    >
      <div
        className="flex w-full  flex-wrap items-center justify-between 
       max-w-[1230px] px-[20px] mx-auto "
      >
        <div className="hidden lg:flex">
          <Link className="mx-2  flex items-center" to="/">
            <img
              className="me-2"
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
              style={{ height: "48px" }}
              alt="TE Logo"
              loading="lazy"
            />
          </Link>
        </div>

        {/* Toggle Button for Mobile */}
        <button
          className=" border-0 flex justify-between space-x-36  bg-transparent px-2 text-white hover:no-underline 
          hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none 
          focus:ring-0 0 lg:hidden"
          type="button"
          onClick={toggleMobileMenu}
        >
          <Link className="mx-2 my-1 flex items-center" to="#">
            <img
              className="me-2"
              src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
              style={{ height: "20px" }}
              alt="TE Logo"
              loading="lazy"
            />
            <span className="text-white">PH RELIEF FUND</span>
          </Link>
          <span className="[&>svg]:w-7 [&>svg]:stroke-white neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden w-full mt-2 ${
            isMobileMenuOpen ? "flex" : "hidden"
          } flex-grow items-center flex-col`}
          id="navbarSupportedContent4"
          data-twe-collapse-item
        >
          {" "}
          <ul className="list-style-none mt-4 w-full" data-twe-navbar-nav-ref>
            <li className="my-2" data-twe-nav-item-ref>
              <Link
                to="/"
                className="block px-3 py-2.5 text-sm text-white hover:text-primary-600"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="my-2" data-twe-nav-item-ref>
              <Link
                to="/relief-goods"
                className="block px-3 py-2.5 text-sm text-white hover:text-primary-600"
                onClick={toggleMobileMenu}
              >
                All Relief Goods
              </Link>
            </li>
            <li className="my-2" data-twe-nav-item-ref>
              <Link
                to="/dashboard"
                className="block px-3 py-2.5 text-sm text-white hover:text-primary-600"
                onClick={toggleMobileMenu}
              >
                Dashboard
              </Link>
            </li>
            <li className="my-2" data-twe-nav-item-ref>
              <Link
                to="/login"
                className="block px-3 py-2.5  hover:text-primary-600
                me-3  rounded bg-white text-center text-xs font-medium uppercase
               leading-normal text-black shadow-dark-3 transition duration-150 
               ease-in-out hover:bg-white hover:shadow-dark-2 focus:bg-neutral-700 
               focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 
               active:shadow-dark-2 motion-reduce:transition-none 
               rk-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                onClick={toggleMobileMenu}
              >
                Login
              </Link>
            </li>
            <li className="my-2" data-twe-nav-item-ref>
              <Link
                to="/register"
                className="block px-3 py-2.5 text-center hover:text-primary-600
                me-3 rounded bg-[#E37423]  text-xs font-medium 
                uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 
                ease-in-out hover:bg-[#E37423] hover:shadow-dark-2 focus:bg-[#E37423] 
                focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-[#E37423]
                 active:shadow-dark-2 motion-reduce:transition-none  rk-strong 
                 dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                onClick={toggleMobileMenu}
              >
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* <button
          className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 0 lg:hidden"
          type="button"
          data-twe-collapse-init
          data-twe-target="#navbarSupportedContent4"
          aria-controls="navbarSupportedContent4"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button> */}

        <div
          className="!visible mt-2 hidden flex-grow basis-[100%] items-center 
          lg:mt-0 lg:!flex lg:basis-auto"
          id="navbarSupportedContent4"
          data-twe-collapse-item
        >
          <ul
            className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
            data-twe-navbar-nav-ref
          >
            <li
              className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
              data-twe-nav-item-ref
            >
              <Link
                className="text-white transition duration-200  hover:ease-in-out 
                focus:text-white active:text-white motion-reduce:transition-none
                 e/80 e/80 te/80 lg:px-2"
                aria-current="page"
                to="/"
                data-twe-nav-link-ref
              >
                PH RELIEF FUND
              </Link>
            </li>
          </ul>

          <div className="flex items-center">
            <Link
              to="/relief-goods"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              className="me-3 inline-block rounded px-2 pb-2 pt-2.5 text-xs 
              font-medium uppercase leading-normal text-white
               hover:text-primary-600 focus:text-primary-600 focus:outline-none
                focus:ring-0 active:text-primary-700 600 ndary-500 ndary-500 ondary-500"
            >
              All Relief Goods
            </Link>
            <Link
              to="/dashboard"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              className="me-3 inline-block rounded px-2 pb-2 pt-2.5 text-xs 
              font-medium uppercase leading-normal text-white
               hover:text-primary-600 focus:text-primary-600 focus:outline-none
                focus:ring-0 active:text-primary-700 600 ndary-500 ndary-500 ondary-500"
            >
              Dashboard
            </Link>
            <Link to="/login">
              {" "}
              <Button
                type="button"
                className="me-3 inline-block rounded bg-white px-3 py-2.5 text-xs font-medium uppercase
               leading-normal text-black shadow-dark-3 transition duration-150 
               ease-in-out hover:bg-white hover:shadow-dark-2 focus:bg-neutral-700 
               focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 
               active:shadow-dark-2 motion-reduce:transition-none 
               rk-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              >
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className="me-3 inline-block rounded bg-[#E37423] px-3 py-2.5 text-xs font-medium 
                uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 
                ease-in-out hover:bg-[#E37423] hover:shadow-dark-2 focus:bg-[#E37423] 
                focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-[#E37423]
                 active:shadow-dark-2 motion-reduce:transition-none  rk-strong 
                 dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              >
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
