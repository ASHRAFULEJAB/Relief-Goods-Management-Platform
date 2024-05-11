import { useGetSingleReliefQuery } from "@/redux/api/api";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SingleReliefModal from "./SingleReliefModal";
import Loader from "@/components/Loader";

const SingaleRelief = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleReliefQuery(id);

  const [showModal, setShowModal] = useState(false);

  const handleDonate = () => {
    // Show the confirmation modal
    setShowModal(true);
  };

  if (isLoading) {
    return <Loader />;
  }
  const { result } = data;
  const { image, title, category, amount } = result;
  //   console.log(image, title, category, amount);
  return (
    <div>
      {/* <!-- component --> */}
      {/* <style>@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);</style> */}
      <div className="min-w-screen min-h-screen bg-[#E37423] 
      flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto
         text-gray-800 relative md:text-left">
          {
            /* {relief?.data?.map((itemrelief) =>
            console.log(itemrelief.result.titile)
          )} */
            <div className="md:flex items-center -mx-10">
              <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative">
                  <img
                    src={image}
                    className="w-full  h-72 relative z-10"
                    alt=""
                  />
                  <div
                    className="border-4 border-yellow-200 absolute top-10 bottom-10
                     left-10 right-10 z-0"
                  ></div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                  <h1 className="font-bold uppercase text-2xl mb-5">
                    {title}
                    <br />
                  </h1>
                  <p className="text-sm">
                    {category}...{" "}
                    <a
                      href="#"
                      className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                    >
                      MORE <i className="mdi mdi-arrow-right"></i>
                    </a>
                  </p>
                </div>
                <div>
                  <div className="inline-block align-bottom mr-5">
                    <span className="text-2xl leading-none align-baseline">
                      $
                    </span>
                    <span className="font-bold text-5xl leading-none align-baseline">
                      {amount}
                    </span>
                    <span className="text-2xl leading-none align-baseline">
                      .00
                    </span>
                  </div>
                  <div className="inline-block align-bottom">
                    <button
                      onClick={handleDonate}
                      className="bg-[#E37423] opacity-75 hover:opacity-100 
                    text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"
                    >
                      <i className="mdi mdi-cart -ml-2 mr-2"></i> DONATE NOW
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
          }
        </div>
      </div>

      {/* <!-- BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES --> */}
      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Buy me a beer"
            href="https://www.buymeacoffee.com/scottwindon"
            target="_blank"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingaleRelief;
