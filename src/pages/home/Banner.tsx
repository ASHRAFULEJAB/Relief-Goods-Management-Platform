import heroImage from "../../assets/images/heroimage1.png";

const Banner = () => {
  return (
    <div className="overflow-hidden ">
      <header>
        <div
          className="w-full bg-center bg-cover h-[45rem]"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="flex items-center justify-center w-full h-full ">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                Doante Now <span className="text-blue-400">For</span> Needy
                People
              </h1>
              <button
                className="w-full px-5 py-2 mt-4 text-sm font-medium text-white 
              capitalize transition-colors duration-300 transform bg-[#E37423] rounded-md 
              lg:w-auto hover:bg-[#E37423] focus:outline-none focus:bg-[#E37423]"
              >
                Start Donating
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
