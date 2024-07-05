import { Link } from "react-router-dom";

type TRelief = {
  _id: string;
  image: string;
  title: string;
  category: string;
  amount: string;
  description: string;
  descriptionHeader: string;
  donationAmount: string;
};

const AllReliefCard = ({
  _id,
  image,
  title,
  description,
  descriptionHeader,
  donationAmount,
  category,
  amount,
}: TRelief) => {
  //   console.log(relief);
  //   const { image, titile, category, amount } = relief;
  const progress = (amount / 10000) * 100; // Calculate progress percentage

  return (
    <div
      className="block rounded-lg shadow-secondary-2 my-4 mt-10 bg-slate-100 
      bg-surface-dark "
    >
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        data-twe-ripple-init
        data-twe-ripple-color="light"
      >
        <img className="rounded-t-lg h-48 w-full " src={image} alt="" />
        <Link to="/relief-goods/:id">
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full
             overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition 
             duration-300 ease-in-out hover:opacity-100"
          ></div>
        </Link>
      </div>
      <div className="p-6 text-surface dark:text-white">
        <h5 className="mb-2 text-xl font-medium leading-tight text-black">
          {title}
        </h5>
        <p className="mb-4 text-base text-gray-500">{descriptionHeader}</p>
        <div className="mb-4">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-orange-500 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <div>
              <span className="font-semibold text-black">${amount}</span> <br />
              <span>of $10,000</span>
            </div>
            <span>
              <span className="ml-12 font-semibold">{donationAmount}</span>{" "}
              <br /> donations
            </span>
          </div>
        </div>
        <Link to={`/relief-goods/${_id}`}>
          <button
            type="button"
            className="ml-12 inline-block rounded bg-[#E37423] px-6 pb-2 pt-2.5 text-xs font-medium 
      uppercase leading-normal text-white shadow-primary-3 transition duration-150
       ease-in-out hover:bg-[#E37423] hover:shadow-primary-2 focus:bg-[#E37423]
        focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-[#E37423]
        active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong
         dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllReliefCard;
