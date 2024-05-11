import { useState } from "react";

interface PaymentFormProps {
  onConfirm: () => void; // Define the type of 'onConfirm' parameter
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PaymentForm = ({ onConfirm }: PaymentFormProps) => {
  const [cardholder, setCardholder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  const formatCardNumber = (value: string) => {
    if (!value) {
      return ""; // Handle the case where value is undefined or empty
    }
    if (value.length > 18) {
      return "";
    }
    return value.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ");
  };
  const isValid = () => {
    if (cardholder.length < 5) {
      return false;
    }
    if (cardNumber === "") {
      return false;
    }
    if (expirationMonth === "" && expirationYear === "") {
      return false;
    }
    if (securityCode.length !== 3) {
      return false;
    }
    return true;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <div className="m-4 ">
      <div className="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
        <header className="flex flex-col justify-center items-center">
          <div className="relative">
            <img
              className="w-full h-auto"
              src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png"
              alt="front credit card"
            />
            <div className="front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-12">
              <p className="number mb-5 sm:text-xl">
                {cardNumber !== "" ? cardNumber : "0000 0000 0000 0000"}
              </p>
              <div className="flex flex-row justify-between">
                <p>{cardholder !== "" ? cardholder : "Card holder"}</p>
                <div>
                  <span>{expirationMonth}</span>
                  <span>{expirationMonth !== "" ? "/" : ""}</span>
                  <span>{expirationYear}</span>
                </div>
              </div>
            </div>
          </div>
          <ul className="flex">
            <li className="mx-2">
              <img
                className="w-16"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png"
                alt=""
              />
            </li>
            <li className="mx-2">
              <img
                className="w-14"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
                alt=""
              />
            </li>
            <li className="ml-5">
              <img
                className="w-7"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png"
                alt=""
              />
            </li>
          </ul>
        </header>
        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">
            Card payment
          </h1>
          <div>
            <div className="my-3">
              <input
                type="text"
                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="Card holder"
                // maxLength="22"
                value={cardholder}
                onChange={(e) => setCardholder(e.target.value)}
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="Card number"
                value={cardNumber}
                onChange={(e) =>
                  setCardNumber(formatCardNumber(e.target.value))
                }
                // maxLength="19"
              />
            </div>
            <div className="my-3 flex flex-col">
              <div className="mb-2">
                <label className="text-gray-700">Expired</label>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <select
                  className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  value={expirationMonth}
                  onChange={(e) => setExpirationMonth(e.target.value)}
                >
                  <option value="" disabled>
                    MM
                  </option>
                  {[...Array(12)].map((_, index) => (
                    <option
                      key={index + 1}
                      value={String(index + 1).padStart(2, "0")}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </option>
                  ))}
                </select>
                <select
                  className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  value={expirationYear}
                  onChange={(e) => setExpirationYear(e.target.value)}
                >
                  <option value="" disabled>
                    YY
                  </option>
                  {[...Array(6)].map((_, index) => (
                    <option
                      key={index}
                      value={String(new Date().getFullYear() + index)}
                    >
                      {String(new Date().getFullYear() + index)}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  className="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  placeholder="Security code"
                  // maxLength="3"
                  value={securityCode}
                  onChange={(e) => setSecurityCode(e.target.value)}
                />
              </div>
            </div>
          </div>
        </main>
        <footer className="mt-6 p-4">
          <button
            className={`submit-button px-4 py-3 rounded-full ${
              isValid()
                ? "bg-blue-300 text-blue-900"
                : "bg-gray-300 text-gray-700"
            } focus:ring focus:outline-none w-full text-xl font-semibold transition-colors`}
            onClick={onConfirm}
            // disabled={!isValid()}
          >
            Pay now
          </button>
        </footer>
      </div>
    </div>
  );
};

export default PaymentForm;
