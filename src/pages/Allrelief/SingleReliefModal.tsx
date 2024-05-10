/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from "react-router";
import PaymentForm from "./Payment";

const SingleReliefModal = ({
  showModal,
  setShowModal,
  title,
  children,
}) => {
  const navigate = useNavigate();
  const handleConfirmDonate = () => {
    navigate("/dashboard");
  };
  return (
    <>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>
            <div className="relative bg-white rounded-lg max-w-md p-6 mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-red-500">{title}</h3>
                <button
                  className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  onClick={() => setShowModal(false)}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mb-6">
                <PaymentForm onConfirm={handleConfirmDonate} />
              </div>
              <div className="flex justify-end">
                {/* <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={onConfirm}
                >
                  Confirm
                </button> */}
                <button
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleReliefModal;
