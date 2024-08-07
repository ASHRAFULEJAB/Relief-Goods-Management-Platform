import Loader from "@/components/Loader";
import PieLayout from "@/components/pieChart/PieLayout";
import { useGetProjectsQuery } from "@/redux/features/supply/supplyApi";
import { Link } from "react-router-dom";
import { TProject } from "./projetcs/AllProject";

const UserDashboardHomePage = () => {
  const { data: projects, isLoading } = useGetProjectsQuery(undefined);
  console.log(projects);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <main>
      <div className="pt-6 px-4 mt-5">
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                  $45,385
                </span>
                <h3 className="text-base font-normal text-gray-500">
                  Donation Payment all total
                </h3>
              </div>
              <div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                12.5%
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div id="main-chart">
              <PieLayout />
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Total Doantion Dantion
                </h3>
                <span className="text-base font-normal text-gray-500">
                  This is a list of latest Donation
                </span>
              </div>
              <div className="flex-shrink-0">
                <Link
                  to="#"
                  className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
                >
                  View all
                </Link>
              </div>
            </div>
            <div className="flex flex-col mt-8">
              <div className="overflow-x-auto rounded-lg">
                <div className="align-middle inline-block min-w-full">
                  <div className="shadow overflow-hidden sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Transaction
                          </th>
                          <th
                            scope="col"
                            className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Date & Time
                          </th>
                          <th
                            scope="col"
                            className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr>
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                            Dantion from{" "}
                            <span className="font-semibold">Bonnie Green</span>
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                            Apr 23 ,2024
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                            $2300
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                            Dantion refund to{" "}
                            <span className="font-semibold">#00910</span>
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                            Apr 23 ,2021
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                            -$670
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                            Dantion failed from{" "}
                            <span className="font-semibold">#087651</span>
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                            Apr 18 ,2021
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                            $234
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                            Dantion from{" "}
                            <span className="font-semibold">Lana Byrd</span>
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                            Apr 15 ,2021
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                            $5000
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                            Dantion from{" "}
                            <span className="font-semibold">Jese Leos</span>
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                            Apr 15 ,2021
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                            $2300
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                            Dantion from{" "}
                            <span className="font-semibold">
                              THEMESBERG LLC
                            </span>
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                            Apr 11 ,2021
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                            $560
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                            Dantion from{" "}
                            <span className="font-semibold">Lana Lysle</span>
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                            Apr 6 ,2021
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                            $1437
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                  $2,340
                </span>
                <h3 className="text-base font-normal text-gray-500">
                  Donation amount this week
                </h3>
              </div>
              <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                14.6%
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                  5,355 Places
                </span>
                <h3 className="text-base font-normal text-gray-500">
                  Visited Project Area this week
                </h3>
              </div>
              <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                32.9%
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                  385
                </span>
                <h3 className="text-base font-normal text-gray-500">
                  Total Review this week
                </h3>
              </div>
              <div className="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                -2.7%
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
          <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold leading-none text-gray-900">
                All Projects
              </h3>
              <Link
                to="/dashboard/projects"
                className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
              >
                View all
              </Link>
            </div>
            <div className="flow-root">
              <ul role="list" className="divide-y divide-gray-200">
                {projects?.data?.map((supply: TProject) => (
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src={supply?.image}
                          alt="supplies"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {supply?.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          <Link
                            to="/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="17727a767e7b57607e7973646372653974787a"
                          >
                            {supply?.category}
                          </Link>
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        ${supply?.amountRaised}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">
              Donares All Over the World
            </h3>
            <div className="block w-full overflow-x-auto">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                      Top Country
                    </th>
                    <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                      USA
                    </th>
                    <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="text-gray-500">
                    <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                      NEW YORK
                    </th>
                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                      5,649
                    </td>
                    <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2 text-xs font-medium">30%</span>
                        <div className="relative w-full">
                          <div className="w-full bg-gray-200 rounded-sm h-2">
                            <div
                              className="bg-cyan-600 h-2 rounded-sm"
                              style={{ width: "30%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-500">
                    <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                      AUSTRIA
                    </th>
                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                      4,025
                    </td>
                    <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2 text-xs font-medium">24%</span>
                        <div className="relative w-full">
                          <div className="w-full bg-gray-200 rounded-sm h-2">
                            <div
                              className="bg-orange-300 h-2 rounded-sm"
                              style={{ width: "24%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-500">
                    <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                      CIRY
                    </th>
                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                      3,105
                    </td>
                    <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2 text-xs font-medium">18%</span>
                        <div className="relative w-full">
                          <div className="w-full bg-gray-200 rounded-sm h-2">
                            <div
                              className="bg-teal-400 h-2 rounded-sm"
                              style={{ width: "18%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-500">
                    <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                      CANDA
                    </th>
                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                      1251
                    </td>
                    <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2 text-xs font-medium">12%</span>
                        <div className="relative w-full">
                          <div className="w-full bg-gray-200 rounded-sm h-2">
                            <div
                              className="bg-pink-600 h-2 rounded-sm"
                              style={{ width: "12%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-500">
                    <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                      TORANTO
                    </th>
                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                      734
                    </td>
                    <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2 text-xs font-medium">9%</span>
                        <div className="relative w-full">
                          <div className="w-full bg-gray-200 rounded-sm h-2">
                            <div
                              className="bg-indigo-600 h-2 rounded-sm"
                              style={{ width: "9%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-500">
                    <th className="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">
                      GERMANY
                    </th>
                    <td className="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">
                      456
                    </td>
                    <td className="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                      <div className="flex items-center">
                        <span className="mr-2 text-xs font-medium">7%</span>
                        <div className="relative w-full">
                          <div className="w-full bg-gray-200 rounded-sm h-2">
                            <div
                              className="bg-purple-500 h-2 rounded-sm"
                              style={{ width: "7%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserDashboardHomePage;
