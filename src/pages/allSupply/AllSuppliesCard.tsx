import { useState } from "react";
import EditSupplyModal from "./EditSupplyModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import {
  useDeleteSupplyMutation,
  useUpdateSupplyMutation,
} from "@/redux/features/supply/supplyApi";

type TSupplyProps = {
  _id: string;
  title: string;
  amount: string;
  description: string;
  image: string;
  category: string;
};

const AllSuppliesCard = ({
  _id,
  title,
  amount,
  description,
  image,
  category,
}: TSupplyProps) => {
  const [removeSupply] = useDeleteSupplyMutation();
  const [updateSupply] = useUpdateSupplyMutation();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  //   console.log(data);

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSaveEdit = (updatedSupply: any) => {
    // Implement your logic to save the updated supply details
    console.log("Updated supply:", updatedSupply);
    const options = {
      id: updatedSupply._id,
      data: {
        title: updatedSupply.title,
        amount: updatedSupply.amount,
        description: updatedSupply.description,
        // category: updatedSupply.category, // Add category to the update data
      },
    };
    updateSupply(options);
  };

  const handleDeleteSupply = () => {
    // console.log(id);
    // console.log(data);
    const options = {
      id: _id,
    };
    // console.log(options);
    removeSupply(options);
  };

  return (
    <>
      <tr>
        <td className="px-4  flex-1 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <div className="inline-flex items-center gap-x-3">
            <div className="flex items-center gap-x-2">
              <img
                className="object-cover w-16 h-10 rounded"
                src={image}
                alt=""
              />
              <div>
                <h2 className="font-medium text-gray-800 dark:text-white ">
                  {title}
                </h2>
              </div>
            </div>
          </div>
        </td>

        <td className="px-4 flex-1 py-4 text-sm whitespace-nowrap">
          <div className="flex items-center gap-x-2">
            <p
              className="px-3 py-1 text-xs text-indigo-500 rounded-full
             dark:bg-gray-800 bg-indigo-100/60 ml-8"
            >
              {category}
            </p>
          </div>
        </td>
        <td className="px-4 py-4 flex-1 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {amount}
        </td>

        <td className="px-4 py-4 flex-1 text-sm whitespace-wrap">
          <div className="flex items-center gap-x-2">
            <p
              className="px-3 py-1 text-xs text-indigo-500 rounded
      dark:bg-gray-800 bg-indigo-100/60 overflow-hidden overflow-ellipsis
      max-h-16" // Adjust the max height as needed
            >
              {description}
            </p>
          </div>
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <div className="flex items-center gap-x-6">
            <button
              //   onClick={() => handleDeleteSupply()}
              onClick={() => setIsConfirmationModalOpen(true)}
              className=" transition-colors duration-200 
             hover:text-red-500  text-red-500 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
            <DeleteConfirmationModal
              isOpen={isConfirmationModalOpen}
              onClose={() => setIsConfirmationModalOpen(false)}
              onConfirm={handleDeleteSupply}
            />

            <button
              onClick={handleEdit}
              className="text-gray-500 transition-colors duration-200
             dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 
             focus:outline-none"
            >
              {isEditModalOpen && (
                <EditSupplyModal
                  supply={{
                    _id,
                    title,
                    amount,
                    description,
                    image,
                    category,
                  }}
                  onSave={handleSaveEdit}
                  onClose={handleEditModalClose}
                />
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default AllSuppliesCard;
