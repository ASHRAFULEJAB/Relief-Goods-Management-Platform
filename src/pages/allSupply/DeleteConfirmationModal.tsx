const DeleteConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <p className="text-xl font-semibold mb-4">
              Are you sure you want to delete this supply post?
            </p>
            <div className="flex justify-end">
              <button
                className="mr-2 px-4 py-2 bg-red-500 text-white rounded-md"
                onClick={onConfirm}
              >
                Delete
              </button>
              <button
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteConfirmationModal;
