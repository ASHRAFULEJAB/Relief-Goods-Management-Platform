import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div>
      {/* <!-- component --> */}
      <div className="h-screen w-full flex overflow-hidden select-none">
        <nav className="w-24 flex flex-col items-center bg-white dark:bg-gray-800 py-4">
          {/* <!-- Left side NavBar --> */}

          <div>
            {/* <!-- App Logo --> */}

            <Link to="/">
              {" "}
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                className="h-10 mr-2"
                alt="Windster Logo"
              />
            </Link>
          </div>

          <ul className="mt-2 text-gray-700 dark:text-gray-400 capitalize">
            {/* <!-- Links --> */}

            <li className="mt-3 p-2 text-blue-600 dark:text-blue-300 rounded-lg">
              <Link to="/dashboard" className=" flex flex-col items-center">
                <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
							17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
							8h-8v10h8V11m-10 4H3v6h8v-6z"
                  ></path>
                </svg>
                <span className="text-xs mt-2">dashBoard</span>
              </Link>
            </li>

            <li
              className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300
				rounded-lg"
            >
              <Link to="/dashboard" className=" flex flex-col items-center">
                <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M23 3v-.5a2.5 2.5 0 00-5 0V3c-.55 0-1 .45-1 1v4c0
							.55.45 1 1 1h5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1m-1
							0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V3M6
							11h9v2H6v-2m0-4h9v2H6V7m16 4v5c0 1.11-.89 2-2 2H6l-4
							4V4a2 2 0 012-2h11v2H4v13.17L5.17 16H20v-5h2z"
                  ></path>
                </svg>
                <span className="text-xs mt-2">Posts</span>
              </Link>
            </li>

            <li
              className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300
				rounded-lg"
            >
              <Link to="/dashboard" className=" flex flex-col items-center">
                <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M21 18v1a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0
							012-2h14a2 2 0 012 2v1h-9a2 2 0 00-2 2v8a2 2 0 002
							2m0-2h10V8H12m4 5.5a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0
							011.5-1.5 1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5z"
                  ></path>
                </svg>
                <span className="text-xs mt-2">Donations</span>
              </Link>
            </li>

            <li
              className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300
				rounded-lg"
            >
              <Link
                to="/dashboard/user-profile"
                className=" flex flex-col items-center"
              >
                <svg className="fill-current h-5 w-5" viewBox="0 0 512 512">
                  <path
                    d="M505 442.7L405.3
							343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7
							44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208
							208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7
							17l99.7 99.7c9.4 9.4 24.6 9.4 33.9
							0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7
							0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128
							57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
                </svg>
                <>
                  <span className="text-xs mt-2">Profile</span>
                </>
              </Link>
            </li>

            <li
              className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300
				rounded-lg"
            >
              <Link
                to="/dashboard/supplies"
                className=" flex flex-col items-center"
              >
                <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M19 19H5V8h14m0-5h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2
							2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2m-2.47
							8.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59
							17l5.94-5.94z"
                  ></path>
                </svg>
                <>
                  <span className="text-xs mt-2">Reliefs</span>
                </>
              </Link>
            </li>
          </ul>

          <div
            className="mt-auto flex items-center p-2 text-blue-700 bg-purple-200
			dark:text-blue-500 rounded-full"
          >
            {/* <!-- important action --> */}

            <Link to="/login">
              <svg className="fill-current h-15 w-5" viewBox="0 0 15 15">
                <path
                  d="M13.5 7.5L10.5 10.75M13.5 7.5L10.5 4.5M13.5 7.5L4 7.5M8 13.5H1.5L1.5 1.5L8 1.5"
                  stroke="#000000"
                />
              </svg>
              {/* <svg
                width="800px"
                height="800px"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              ></svg> */}
            </Link>
          </div>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;
