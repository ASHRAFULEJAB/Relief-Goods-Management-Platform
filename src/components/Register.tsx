import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="">
      <section className="h-full bg-[#303030]">
        <div className="container h-full px-6 py-10">
          <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* <!-- Left column container with background--> */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <Link to="/">
                {" "}
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="w-full"
                  alt="Phone image"
                />
              </Link>
            </div>

            {/* <!-- Right column container with form --> */}
            <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
              <div className="flex items-center w-full max-w-3xl  mx-auto ">
                <div className="w-full">
                  <h1 className="text-2xl font-semibold tracking-wider  capitalize text-white">
                    Get your free account now.
                  </h1>

                  <p className="mt-4  text-gray-400">
                    Let’s get you all set up so you can verify your personal
                    account and begin setting up your profile.
                  </p>

                  <div className="mt-6">
                    <h1 className=" text-gray-300">Select type of account</h1>

                    <div className="mt-3 md:flex md:items-center md:-mx-2">
                      <button
                        className="flex justify-center w-full px-6 py-3 text-white bg-blue-500
                       rounded-lg md:w-auto md:mx-2 focus:outline-none"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        style={{
                          background:
                            "linear-gradient(to right, #0F4C99, #074495, #074495,#658BBB)",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>

                        <span className="mx-2">User</span>
                      </button>

                      <button
                        className="flex justify-center w-full px-6 py-3 mt-4  border 
                       rounded-lg md:mt-0 md:w-auto md:mx-2
                       border-blue-400 text-blue-400 focus:outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>

                        <span className="mx-2">Admin</span>
                      </button>
                    </div>
                  </div>

                  <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 text-sm  text-gray-200">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="block w-full px-5 py-3 mt-2  border  rounded-lg placeholder-gray-600
                         bg-gray-900 text-gray-300 border-gray-700
                           focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm  text-gray-200">
                        Last name
                      </label>
                      <input
                        type="text"
                        placeholder="Snow"
                        className="block w-full px-5 py-3 mt-2  border  rounded-lg placeholder-gray-600 bg-gray-900 text-gray-300 border-gray-700 
                         focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm  text-gray-200">
                        Phone number
                      </label>
                      <input
                        type="text"
                        placeholder="XXX-XX-XXXX-XXX"
                        className="block w-full px-5 py-3 mt-2  border  rounded-lg placeholder-gray-600 bg-gray-900 text-gray-300 border-gray-700 
                         focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm  text-gray-200">
                        Email address
                      </label>
                      <input
                        type="email"
                        placeholder="johnsnow@example.com"
                        className="block w-full px-5 py-3 mt-2  border  rounded-lg placeholder-gray-600 bg-gray-900 text-gray-300 border-gray-700 
                         focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm  text-gray-200">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="block w-full px-5 py-3 mt-2  border  rounded-lg placeholder-gray-600 bg-gray-900 text-gray-300 border-gray-700 
                         focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm  text-gray-200">
                        Confirm password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="block w-full px-5 py-3 mt-2  border  rounded-lg placeholder-gray-600 bg-gray-900 text-gray-300 border-gray-700 
                         focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div className=" text-sm text-white mt-4  text-nowrap">
                      By signing up, you agree to the
                      <a
                        className="no-underline border-b ml-1 border-grey-dark text-white"
                        href="#"
                      >
                        Terms of Service
                      </a>{" "}
                      and
                      <a
                        className="no-underline border-b ml-1 border-grey-dark text-white"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                    </div>
                    <br />

                    <button
                      className="flex items-center justify-between w-full px-6 py-3 text-sm 
                    tracking-wide text-white capitalize transition-colors duration-300 transform
                     bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring 
                     focus:ring-blue-300 focus:ring-opacity-50"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                      style={{
                        background:
                          "linear-gradient(to right, #0F4C99, #074495, #074495,#658BBB)",
                      }}
                    >
                      <span>Sign Up </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 rtl:-scale-x-100"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </form>
                  <div className="mt-6 text-center flex justify-between  items-center ">
                    <a
                      href="/login"
                      className="text-sm  hover:underline text-blue-400"
                    >
                      Already have an account?
                    </a>

                    <Link to="/login">
                      <button
                        type="button"
                        className="inline-block text-white rounded border-2 border-danger 
                          px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal 
                           transition duration-150 ease-in-out 
                         
                            focus:outline-none
                            focus:ring-0 active:border-danger-700 
                             "
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                      >
                        Login
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
