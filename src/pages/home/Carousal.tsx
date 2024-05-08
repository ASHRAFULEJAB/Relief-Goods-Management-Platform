import React, { useState, useEffect } from "react";

const Carousal = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of images for the carousel
  const images = [
    "https://mdbcdn.b-cdn.net/img/new/slides/041.webp",
    "https://mdbcdn.b-cdn.net/img/new/slides/042.webp",
    "https://mdbcdn.b-cdn.net/img/new/slides/043.webp",
  ];

  // Function to handle automatic sliding
  const handleAutoSlide = () => {
    const nextIndex = (activeIndex + 1) % images.length;
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    // Set interval for automatic sliding
    const interval = setInterval(handleAutoSlide, 3000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleSlide = (index: React.SetStateAction<number>) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="relative"
        data-twe-carousel-init
        data-twe-ride="carousel"
      >
        <div
          className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-twe-carousel-indicators
        >
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-twe-target="#carouselExampleIndicators"
              data-twe-slide-to={index}
              onClick={() => handleSlide(index)}
              className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 ${
                index === activeIndex
                  ? "-indent-[999px] opacity-100"
                  : "-indent-[999px] opacity-50"
              } transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none`}
              aria-current={index === activeIndex ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative float-left ${
                index === activeIndex
                  ? "-mr-[100%] transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  : "hidden"
              } w-full`}
              data-twe-carousel-item
              data-twe-carousel-active={
                index === activeIndex ? "true" : undefined
              }
            >
              <img
                src={image}
                className="block w-full"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-twe-target="#carouselExampleIndicators"
          data-twe-slide="prev"
          onClick={() =>
            handleSlide((activeIndex - 1 + images.length) % images.length)
          }
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>

        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-twe-target="#carouselExampleIndicators"
          data-twe-slide="next"
          onClick={() => handleSlide((activeIndex + 1) % images.length)}
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousal;
