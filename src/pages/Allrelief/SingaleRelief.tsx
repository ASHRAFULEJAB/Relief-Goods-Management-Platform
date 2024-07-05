import { useState } from "react";
import { useParams } from "react-router-dom";
import SingleReliefModal from "./SingleReliefModal";
import Loader from "@/components/Loader";
import { useGetSingleReliefQuery } from "@/redux/features/supply/supplyApi";
import InitialImagesSection from "./InitialImagesSection";
import DetailedSection from "./DetailedSection";

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
  const {
    _id,
    image,
    title,
    description,
    descriptionHeader,
    donationAmount,
    category,
    amount,
  } = result;

  return (
    <div>
      {/* Banner Section */}

      <div
        className="min-w-screen min-h-screen bg-transparent
      flex items-center p-5 lg:p-10 overflow-hidden relative"
        // style={{
        //   background:
        //     "linear-gradient(to right, #074495, #074495, #0F4C99, #658BBB)",
        // }}
      >
        <DetailedSection
          title={title}
          amount={amount}
          raisedAmount={10000}
          description={description}
          handleDonate={handleDonate}
          showModal={showModal}
          image={image}
          setShowModal={setShowModal}
        />
        {/* <div
          className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto
         text-gray-800 relative md:text-left"
        >
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative">
                <img src={image} className="w-full h-72 relative z-10" alt="" />
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
                    href="#more-info"
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
                    className="bg-[#E37423]  
                    text-white rounded-full px-10 py-2 font-semibold"
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
        </div> */}
      </div>

      {/* Details Section */}
      <div className="max-w-6xl mx-auto mb-10 p-5 lg:p-10 bg-white rounded  text-gray-800">
        <section id="more-info">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p>{description}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Impact of the cause</h2>
          <p>
            Our mission is to improve healthcare accessibility for underserved
            communities. With your support, we aim to:
            <ul className="list-disc pl-5 mt-2">
              <li>Provide essential medical services to remote areas.</li>
              <li>Offer preventive care and health education.</li>
              <li>Ensure timely medical assistance during emergencies.</li>
            </ul>
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">How your donations work</h2>
          <p>
            Your donations will be utilized efficiently to maximize impact.
            Here’s how we ensure transparency and effectiveness:
            <ul className="list-disc pl-5 mt-2">
              <li>Allocating funds directly to healthcare initiatives.</li>
              <li>Regular updates and reports on fund utilization.</li>
              <li>
                Collaboration with local healthcare providers for efficient
                service delivery.
              </li>
            </ul>
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            Transparency and accountability
          </h2>
          <p>
            We are committed to maintaining the highest standards of
            transparency and accountability. Our processes include:
            <ul className="list-disc pl-5 mt-2">
              <li>Detailed reports on project progress and fund usage.</li>
              <li>
                Independent audits to ensure compliance with financial
                standards.
              </li>
              <li>
                Open communication channels for donor inquiries and feedback.
              </li>
            </ul>
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Thank you</h2>
          <p>
            We deeply appreciate your support. Together, we can make a
            significant difference in the lives of those in need. Your
            generosity helps us bring hope and health to communities around the
            world.
          </p>
        </section>
      </div>

      {/* Footer */}
      {/* <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
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
      </div> */}
    </div>
  );
};

export default SingaleRelief;
