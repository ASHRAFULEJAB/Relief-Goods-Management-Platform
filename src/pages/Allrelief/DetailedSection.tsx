// DetailedSection.jsx

import { Link } from "react-router-dom";
import SingleReliefModal from "./SingleReliefModal";
interface DetailedSectionProps {
  image: string;
  title: string;
  amount: number;
  raisedAmount: number;
  description: string;
  showModal: boolean;
  handleDonate: () => void;
  setShowModal: (show: boolean) => void;
}

const DetailedSection: React.FC<DetailedSectionProps> = ({
  image,
  title,
  amount,
  raisedAmount,
  showModal,
  handleDonate,
  setShowModal,
}) => {
  const progress = (raisedAmount / amount) * 10;

  return (
    <div className="bg-white py-8   mt-16 w-full">
      <div className=" mx-auto">
        {/* Image Section */}
        <div className="mb-8">
          <img
            className="w-full h-80 object-cover rounded-md shadow-lg"
            src={image}
            alt="Cause"
          />
        </div>
        <div className="mb-6">
          <h2 className="text-3xl font-semiold text-gray-900">{title}</h2>
        </div>
        <div className="mb-4">
          <p className="text-xl font-semibold text-gray-900">
            ${amount} of ${raisedAmount} raised
          </p>
          <div className="h-2 bg-gray-200 rounded-full w-[600px]">
            <div
              className="h-2 bg-orange-500 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div className="mb-4">
          {/* <div className="bg-yellow-100 p-4 rounded">
            <p className="text-yellow-800">
              <strong>Notice:</strong> Test mode is enabled. While in test mode,
              no live donations are processed.
            </p>
          </div> */}
        </div>
        <div className="flex justify-between">
          {" "}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 ">
              Custom amount
            </label>
            <div className="mt-1 relative rounded-md  ">
              <input
                type="number"
                className="focus:ring-indigo-500 
                  focus:border-indigo-500 block w-[400px] sm:text-sm border p-4  border-gray-300 rounded-md"
                placeholder="Enter the amount here"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Select Payment Method
            </label>
            <div className="mt-1 flex items-center justify-center gap-3">
              <div className="flex items-center">
                <input
                  id="test-donation"
                  name="payment-method"
                  type="radio"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label
                  htmlFor="test-donation"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Online Donation
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  id="offline-donation"
                  name="payment-method"
                  type="radio"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label
                  htmlFor="offline-donation"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Offline Donation
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Personal Info
          </label>
          <div className="mt-1">
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  className="focus:ring-indigo-500 
                  focus:border-indigo-500 block w-full sm:text-sm border p-4  border-gray-300 rounded-md"
                  placeholder="First Name"
                />
              </div>
              <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
                <input
                  type="text"
                  className="focus:ring-indigo-500 focus:border-indigo-500 border p-4 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="mt-2 flex gap-3">
              <input
                type="email"
                className="focus:ring-indigo-500 focus:border-indigo-500 block border p-4 w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Email Address"
              />
              <input
                type="text"
                className="focus:ring-indigo-500 focus:border-indigo-500 block border p-4 w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Address"
              />
            </div>
            <div className="flex items-center ">
              <Link to="/register">
                <div className="flex">
                  {" "}
                  <input
                    id="create-account"
                    type="checkbox"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="create-account"
                    className="ml-2 block text-sm font-medium text-gray-300"
                  >
                    Create an account
                  </label>
                </div>
              </Link>

              <div className="flex  mt-[25px] items-center justify-center lg:ml-[410px]">
                <p className="text-sm font-medium text-gray-300">
                  Already have an account?
                </p>
                <p className="text-sm font-medium text-gray-300 ml-3">
                  <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <span className="text-lg  text-gray-900">
              Donation Total: ${amount}
            </span>
            <button
              onClick={handleDonate}
              type="button"
              className="bg-orange-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-orange-600"
            >
              Donate now
            </button>
            <SingleReliefModal
              showModal={showModal}
              setShowModal={setShowModal}
              title={title}
              children={undefined}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedSection;
