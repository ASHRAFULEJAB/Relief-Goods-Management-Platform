import { useGetProjectsQuery } from "@/redux/features/supply/supplyApi";
import AllProjectCard from "./AllProjectCard";
import Loader from "@/components/Loader";
import { ReactNode } from "react";

export type TProject = {
  amount: ReactNode;
  category: ReactNode;
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
  amountRaised: number;
  targetAmount: number;
  image: string;
};

const Projects = () => {
  const { data: projects, isLoading } = useGetProjectsQuery(undefined);
  console.log(projects);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <section className="container px-4 mx-auto mt-10">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            All Projects
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            {projects?.length} +
          </span>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 flex-1 px-4 text-sm font-normal text-left rtl:text-right
                         text-gray-500 dark:text-gray-400"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Project Name</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-12 flex-1 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Status</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 flex-1 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Amount Raised</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 flex-1 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Target Amount</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 flex-1 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Description</span>
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {projects?.data?.map((project: TProject) => (
                      <AllProjectCard key={project.id} {...project} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
