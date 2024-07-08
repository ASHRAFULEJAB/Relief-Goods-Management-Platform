/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useState } from "react";

type EditProjectModalProps = {
  project: {
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
  onSave: (updatedProject: any) => void;
  onClose: () => void;
};

const EditProjectModal = ({
  project,
  onSave,
  onClose,
}: EditProjectModalProps) => {
  const [updatedProject, setUpdatedProject] = useState(project);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUpdatedProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(updatedProject);
    onClose();
  };
   const handleCancel = (e: FormEvent) => {
     e.stopPropagation(); // Prevent click event from propagating to parent div
     onClose(); // Close the modal
   };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <div className="relative w-full max-w-lg p-8 bg-white rounded-md shadow-lg">
        <h2 className="mb-4 text-lg font-medium text-gray-800">Edit Project</h2>
        <div className="mb-4">
          <label className="block mb-2 text-sm text-gray-600">
            Project Name
          </label>
          <input
            type="text"
            name="name"
            value={updatedProject.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm text-gray-600">
            Description
          </label>
          <textarea
            name="description"
            value={updatedProject.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm text-gray-600">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={updatedProject.startDate}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm text-gray-600">End Date</label>
          <input
            type="date"
            name="endDate"
            value={updatedProject.endDate}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm text-gray-600">Status</label>
          <input
            type="text"
            name="status"
            value={updatedProject.status}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm text-gray-600">
            Amount Raised
          </label>
          <input
            type="number"
            name="amountRaised"
            value={updatedProject.amountRaised}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm text-gray-600">
            Target Amount
          </label>
          <input
            type="number"
            name="targetAmount"
            value={updatedProject.targetAmount}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-white bg-gray-600 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-white bg-blue-600 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProjectModal;
