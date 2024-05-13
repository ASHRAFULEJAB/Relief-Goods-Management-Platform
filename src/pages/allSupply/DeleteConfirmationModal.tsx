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
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center
         bg-gray-800 bg-opacity-50  inset-0  z-50"
        >
          <div className="bg-white p-4 sm:p-8 rounded-lg w-full max-w-lg">
            <p className="text-lg sm:text-xl font-semibold mb-4">
              Are you sure you want to delete this supply post?
            </p>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-end items-center">
              <button
                className="mb-2 sm:mb-0 mr-0 sm:mr-2 px-4 py-2 bg-red-500 text-white rounded-md w-full sm:w-auto"
                onClick={onConfirm}
              >
                Delete
              </button>
              <button
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md w-full sm:w-auto"
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
