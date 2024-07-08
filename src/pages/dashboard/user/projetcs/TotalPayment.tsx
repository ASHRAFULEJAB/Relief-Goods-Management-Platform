/* eslint-disable react-refresh/only-export-components */
export const projects = [
  {
    id: 1,
    name: "Project A",
    description: "Description for Project A",
    startDate: "2023-01-01",
    endDate: "2023-12-31",
    status: "ongoing",
    amountRaised: 5000,
    targetAmount: 10000,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Project B",
    description: "Description for Project B",
    startDate: "2023-03-01",
    endDate: "2023-11-30",
    status: "completed",
    amountRaised: 7000,
    targetAmount: 7000,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Project C",
    description: "Description for Project C",
    startDate: "2023-02-15",
    endDate: "2023-10-15",
    status: "ongoing",
    amountRaised: 3000,
    targetAmount: 5000,
    image: "https://via.placeholder.com/150",
  },
];
const TotalPayment = () => {
  const totalAmount = projects.reduce(
    (total, project) => total + project.amountRaised,
    0
  );

  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
      <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">
        Total Payments
      </h3>
      <div className="flex items-center justify-between mb-6">
        <div className="flex-shrink-0">
          <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
            ${totalAmount}
          </span>
          <h3 className="text-base font-normal text-gray-500">
            Total amount raised
          </h3>
        </div>
        <div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
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
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border shadow-md" >
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Project Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Amount Raised
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Target Amount
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {project.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {project.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${project.amountRaised}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${project.targetAmount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {project.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalPayment;
