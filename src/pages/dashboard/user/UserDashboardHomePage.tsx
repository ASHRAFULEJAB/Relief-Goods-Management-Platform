import { Link } from "react-router-dom";

const UserDashboardHomePage = () => {
  return (
    <>
      <main
        className="my-1 pt-2 pb-2 px-10 flex-1 bg-gray-200 dark:bg-black rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto"
      >
        <div className="flex flex-col capitalize text-3xl">
          <span className="font-semibold">hello,</span>
          <span>Dear Donars!</span>
        </div>
        <div className="flex">
          <div
            className="mr-6 w-1/2 mt-8 py-2 flex-shrink-0 flex flex-col bg-white
				dark:bg-gray-600 rounded-lg"
          >
            {/* <!-- Card list container --> */}

            <h3
              className="flex items-center pt-1 pb-1 px-8 text-lg font-semibold
					capitalize dark:text-gray-300"
            >
              {/* <!-- Header --> */}
              <span>Gratitude Posts</span>
              <button className="ml-2">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 256 512">
                  <path
                    d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
								0l-22.6-22.6c-9.4-9.4-9.4-24.6
								0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
								0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
								136c9.5 9.4 9.5 24.6.1 34z"
                  ></path>
                </svg>
              </button>
            </h3>

            <div>
              {/* <!-- List --> */}

              <ul className="pt-1 pb-2 px-3 overflow-y-auto">
                <li className="mt-2">
                  <a
                    className="p-5 flex flex-col justify-between
								bg-gray-100 dark:bg-gray-200 rounded-lg"
                    href="#"
                  >
                    <div
                      className="flex items-center justify-between
									font-semibold capitalize dark:text-gray-700"
                    >
                      {/* <!-- Top section --> */}

                      <span>Gratitude Post</span>

                      <div className="flex items-center">
                        <svg
                          className="h-5 w-5 fill-current mr-1
											text-gray-600"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M14 12l-4-4v3H2v2h8v3m12-4a10
												10 0 01-19.54 3h2.13a8 8 0
												100-6H2.46A10 10 0 0122 12z"
                          ></path>
                        </svg>
                        <span>4.2 mi</span>
                      </div>
                    </div>

                    <p
                      className="text-sm font-medium leading-snug
									text-gray-600 my-3"
                    >
                      {/* <!-- Middle section --> */}I am so grateful for the
                      support and kindness from my community. Your continuous
                      encouragement has made a significant impact on my journey.
                      Thank you for being there!
                    </p>

                    <div className="flex justify-between">
                      {/* <!-- Bottom section --> */}

                      <div className="flex">
                        <img
                          className="h-6 w-6 rounded-full mr-3"
                          src="https://i.pinimg.com/originals/b7/06/0b/b7060b60f6ee1beeedf7d648dabd89a1.jpg"
                          alt="Profile"
                        />
                        <span>
                          <span
                            className="text-blue-500
												font-semibold"
                          >
                            Regina C.
                          </span>
                          via HeyTutor
                        </span>
                      </div>

                      <p
                        className="text-sm font-medium leading-snug
										text-gray-600"
                      >
                        14 hours ago
                      </p>
                    </div>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="p-5 flex flex-col justify-between
								bg-gray-100 dark:bg-gray-200 rounded-lg"
                    href="#"
                  >
                    <div
                      className="flex items-center justify-between
									font-semibold capitalize dark:text-gray-700"
                    >
                      {/* <!-- Top section --> */}

                      <span>Gratitude Post</span>

                      <div className="flex items-center">
                        <svg
                          className="h-5 w-5 fill-current mr-1
											text-gray-600"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M14 12l-4-4v3H2v2h8v3m12-4a10
												10 0 01-19.54 3h2.13a8 8 0
												100-6H2.46A10 10 0 0122 12z"
                          ></path>
                        </svg>
                        <span>4.2 mi</span>
                      </div>
                    </div>

                    <p
                      className="text-sm font-medium leading-snug
									text-gray-600 my-3"
                    >
                      {/* <!-- Middle section --> */}
                      Feeling incredibly thankful for the opportunity to work
                      with such talented and inspiring individuals. Your
                      dedication and hard work are truly appreciated.
                    </p>

                    <div className="flex justify-between">
                      {/* <!-- Bottom section --> */}

                      <div className="flex">
                        <img
                          className="h-6 w-6 rounded-full mr-3"
                          src="https://i.pinimg.com/originals/b7/06/0b/b7060b60f6ee1beeedf7d648dabd89a1.jpg"
                          alt="Profile"
                        />
                        <span>
                          <span
                            className="text-blue-500
												font-semibold"
                          >
                            Regina C.
                          </span>
                          via HeyTutor
                        </span>
                      </div>

                      <p
                        className="text-sm font-medium leading-snug
										text-gray-600"
                      >
                        14 hours ago
                      </p>
                    </div>
                  </a>
                </li>
              </ul>

              <a
                href="#"
                className="flex justify-center capitalize text-blue-500
						dark:text-blue-200"
              >
                <span>see all</span>
              </a>
            </div>
          </div>

          <div
            className="mr-6 w-1/2 mt-8 py-2 flex-shrink-0 flex flex-col
				bg-purple-300 rounded-lg text-white"
          >
            <h3
              className="flex items-center pt-1 pb-1 px-8 text-lg font-bold
					capitalize"
            >
              {/* <!-- Header --> */}
              <span>scheduled Your Volunteer Work</span>
              <button className="ml-2">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 256 512">
                  <path
                    d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
								0l-22.6-22.6c-9.4-9.4-9.4-24.6
								0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
								0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
								136c9.5 9.4 9.5 24.6.1 34z"
                  ></path>
                </svg>
              </button>
            </h3>

            <div className="flex flex-col items-center mt-12">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/empty-state-2130362-1800926.png"
                alt=" empty schedule"
              />

              <span className="font-bold mt-8">Your schedule is empty</span>

              <span className="text-purple-500">
                Make your first Volunteery Work
              </span>

              <button className="mt-8 bg-purple-800 rounded-lg py-2 px-4">
                Help More People
              </button>
            </div>
          </div>
        </div>
      </main>

      <aside
        className="w-1/4 my-1 mr-1 px-6 py-4 flex flex-col bg-gray-200 dark:bg-black
		dark:text-gray-400 rounded-r-lg overflow-y-auto"
      >
        {/* <!-- Right side NavBar --> */}

        <div className="flex items-center justify-between">
          {/* <!-- Info --> */}

          <a href="#" className="relative">
            {/* <!-- Left side --> */}

            <span>
              <svg
                className="h-5 w-5 hover:text-red-600 dark-hover:text-red-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </span>

            <div className="absolute w-2 h-2 left-0 mb-6 ml-2 bottom-0">
              <span
                className="px-2 py-1 bg-red-600 rounded-full text-white
						text-xs"
              >
                7
              </span>
            </div>
          </a>

          <div className="flex items-center">
            {/* <!-- Right side --> */}

            <Link to="user-profile">
              {" "}
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="https://i.pinimg.com/originals/68/e1/e1/68e1e137959d363f172dc3cc50904669.jpg"
                alt="tempest profile"
              />
            </Link>

            <button className="ml-1 focus:outline-none">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 192 512">
                <path
                  d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72
							72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72
							72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0
							352c0 39.8 32.2 72 72 72s72-32.2
							72-72-32.2-72-72-72-72 32.2-72 72z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <span className="mt-4 text-gray-600">Monthly Donations</span>
        <span className="mt-1 text-3xl font-semibold">$ 1,579.20</span>

        <button
          className="mt-8 flex items-center py-4 px-3 text-white rounded-lg
			bg-green-400 shadow focus:outline-none"
        >
          {/* <!-- Action --> */}

          <svg className="h-5 w-5 fill-current mr-2 ml-3" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
          </svg>

          <span>Donate Here</span>
        </button>

        <div className="mt-12 flex items-center">
          {/* <!-- Payments --> */}
          <span>All Donation List</span>
          <button className="ml-2 focus:outline-none">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 256 512">
              <path
                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
						0l-22.6-22.6c-9.4-9.4-9.4-24.6
						0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3
						103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1
						34z"
              ></path>
            </svg>
          </button>
        </div>

        <a
          href="#"
          className="mt-8 p-4 flex justify-between bg-gray-300 rounded-lg
			font-semibold capitalize"
        >
          {/* <!-- link --> */}

          <div className="flex">
            <div className="flex flex-col ml-4">
              <span>Heavy Floods</span>
              <span className="text-sm text-gray-600">20 days ago</span>
            </div>
          </div>

          <span>$ 250</span>
        </a>

        <a
          href="#"
          className="mt-2 p-4 flex justify-between bg-gray-300 rounded-lg
			font-semibold capitalize"
        >
          {/* <!-- link --> */}

          <div className="flex">
            <div className="flex flex-col ml-4">
              <span>Clycon Fund</span>
              <span className="text-sm text-gray-600">15 days ago</span>
            </div>
          </div>

          <span>$ 350</span>
        </a>

        <a
          href="#"
          className="mt-2 p-4 flex justify-between bg-gray-300 rounded-lg
			font-semibold capitalize"
        >
          {/* <!-- link --> */}

          <div className="flex">
            <div className="flex flex-col ml-4">
              <span>Rootless Children</span>
              <span className="text-sm text-gray-600">3 days ago</span>
            </div>
          </div>

          <span>$ 299</span>
        </a>

        <div className="mt-4 flex justify-center capitalize text-blue-600">
          <a href="#">see all</a>
        </div>
      </aside>
    </>
  );
};

export default UserDashboardHomePage;
