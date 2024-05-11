import { useUpdateSupplyMutation } from "@/redux/api/api";
import { FormEvent, useState } from "react";
interface Supply {
  _id: string;
  title: string;
  amount: string;
  description: string;
  image: string;
  category: string;
}

interface EditSupplyModalProps {
  supply: Supply;
  onSave: (updatedSupply: Supply) => void;
  onClose: () => void;
}

const EditSupplyModal = ({ supply, onSave, onClose }: EditSupplyModalProps) => {
  const [updateSupply] = useUpdateSupplyMutation();

  const [editedTitle, setEditedTitle] = useState(supply.title);
  const [editedAmount, setEditedAmount] = useState(supply.amount);
  const [editedDescription, setEditedDescription] = useState(
    supply.description
  );

  const handleSave = () => {
    onSave({
      ...supply,
      title: editedTitle,
      amount: editedAmount,
      description: editedDescription,
    });
    const options = {
      id: supply?._id,
      data: {
        title: editedTitle,
        amount: editedAmount,
        description: editedDescription,
      },
    };
    updateSupply(options);
    onClose();
  };

  const handleCancel = (e: FormEvent) => {
    e.stopPropagation(); // Prevent click event from propagating to parent div
    onClose(); // Close the modal
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white w-3/5  p-4 rounded-lg absolute top-20"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Edit Supply</h2>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="titile"
            >
              Titile
            </label>
            <input
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              id="titile"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md
                 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400
                  focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none
                   focus:ring"
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              value={editedAmount}
              onChange={(e) => setEditedAmount(e.target.value)}
              id="amount"
              type="number"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white
                 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 
                  focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              id="description"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white 
                border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 
                 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div className="flex justify-end mt-5">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditSupplyModal;
