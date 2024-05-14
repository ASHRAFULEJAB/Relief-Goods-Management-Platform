const TestimonialCard = () => {
  return (
    <section className="relative lg:flex gap-3 mt-16">
      <div className=" justify-center w-full lg:mb-0 mb-2">
        <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
          <p className="leading-loose text-gray-500 dark:text-gray-400">
            “ Working with this team has been an absolute pleasure. Their
            professionalism and attention to detail are unmatched. I highly
            recommend their services to anyone looking for top-notch web
            development.. ”
          </p>

          <div className="flex items-center mt-6 -mx-2">
            <img
              className="object-cover mx-2 rounded-full w-14 h-14"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />

            <div className="mx-2">
              <h1 className="font-semibold text-gray-800 dark:text-white">
                Robbert
              </h1>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                CEO, Robert Consultency
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" justify-center w-full lg:mb-0 mb-2">
        <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
          <p className="leading-loose text-gray-500 dark:text-gray-400">
            “ I've been consistently impressed by the creativity and dedication
            of this team. They truly understand our brand and have helped us
            achieve remarkable results with their marketing strategies. ”
          </p>

          <div className="flex items-center mt-6 -mx-2">
            <img
              className="object-cover mx-2 rounded-full w-14 h-14"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8-13TxTaIRcRjTQ0msczdJwoVNU2X5A2QIK5ELTNsFw&s"
              alt=""
            />

            <div className="mx-2">
              <h1 className="font-semibold text-gray-800 dark:text-white">
                Ema Watson
              </h1>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Actor
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" justify-center w-full lg:mb-0 mb-2">
        <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
          <p className="leading-loose text-gray-500 dark:text-gray-400">
            “ The professionalism and expertise demonstrated by this team have
            exceeded our expectations. Their attention to detail and ability to
            deliver results in a timely manner for any project. ”
          </p>

          <div className="flex items-center mt-6 -mx-2">
            <img
              className="object-cover mx-2 rounded-full w-14 h-14"
              src="https://i.insider.com/564e42f82491f92b008b6af2?width=800&format=jpeg&auto=webp"
              alt=""
            />

            <div className="mx-2">
              <h1 className="font-semibold text-gray-800 dark:text-white">
                David Backhum
              </h1>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Founder, HelpAid
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;
