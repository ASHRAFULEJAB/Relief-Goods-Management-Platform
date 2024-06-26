import { Link } from "react-router-dom";

type TRelief = {
  _id: string;
  image: string;
  title: string;
  category: string;
  amount: string;
};

const AllReliefCard = ({ _id, image, title, category, amount }: TRelief) => {
  //   console.log(relief);
  //   const { image, titile, category, amount } = relief;
  return (
    <div
      className="block rounded-lg shadow-secondary-2 my-4 mt-20 bg-slate-100 
      bg-surface-dark text-center"
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
        <h5 className="mb-2 text-xl font-medium leading-tight ">{title}</h5>
        <p className="mb-4 text-base">
          <span className="font-semibold">Category:</span>
          {category}
        </p>
        <p className="mb-4 text-base">
          <span className="font-semibold">Amount:</span> $ {amount}
        </p>
        <Link to={`/relief-goods/${_id}`}>
          <button
            type="button"
            className="inline-block rounded bg-[#E37423] px-6 pb-2 pt-2.5 text-xs font-medium 
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
