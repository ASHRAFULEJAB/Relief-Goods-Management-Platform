const Promotions = () => {
  return (
    <div>
      <div className="relative overflow-hidden bg-white ">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative w-full max-w-[1230px]  px-[20px] mx-auto sm:static sm:px-6 lg:px-16">
            <div className="sm:max-w-lg">
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                Commitment to impactful change
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Discover our commitment to social welfare, ethical governance,
                and impactful change.
              </p>
            </div>
            <div>
              <div className="mt-10 ">
                {/* <!-- Decorative image grid --> */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 
                  lg:mx-auto lg:w-full lg:max-w-7xl lg:mr-16"
                >
                  <div
                    className="absolute transform sm:left-1/2 
                  sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2
                   lg:translate-x-8"
                  >
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://i.pinimg.com/originals/66/b0/48/66b048988cbac008f41b0c61e9c1f2af.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://bdrcs.org/wp-content/uploads/2024/06/CALL-FOR-REMAL-2024-FINAL-scaled.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/474x/a9/4e/67/a94e67b1f20c8f395b09289719e44737.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/disaster-relief-fundraiser-flyer-poster-design-template-aeac7d77f0fff13f6bb6890b058123a9.jpg?ts=1637001551"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://cdn.create.vista.com/downloads/024858d9-3e55-4921-b768-dc693081cf5f_1024.jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        {/* <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbeijpHgVNr59zidzRwIZM8WZsQKyggT9wQ&s"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div> */}
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://img.pikbest.com/origin/06/04/86/19xpIkbEsTEza.jpg!sw800"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-[#E37423] px-8 
                  py-3 text-center font-medium text-white hover:bg-[#E37423]"
                >
                  Donate Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
