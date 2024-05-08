const AddSupply = () => {
  return (
    <div>
      {/* <!-- component --> */}
      <section
        className="max-w-4xl p-6 mx-auto  rounded-md shadow-md
       bg-gray-800 my-10"
      >
        <h1 className="text-xl font-bold text-white capitalize ">
          Add Supply Here
        </h1>
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-white " htmlFor="title">
                Title
              </label>
              <input
                id="title"
                type="text"
                className="block w-full px-4 py-2 mt-2   border  rounded-md
                 bg-gray-800 text-gray-300 border-gray-600 
                  focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-white " htmlFor="amount">
                Amount
              </label>
              <input
                id="amount"
                type="email"
                className="block w-full px-4 py-2 mt-2  border 
                 rounded-md bg-gray-800 text-gray-300
                  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            {/* <div>
              <label className="text-white " htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="block w-full px-4 py-2 mt-2  border  rounded-md bg-gray-800
                 text-gray-300 border-gray-600 
                  focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-white " htmlFor="passwordConfirmation">
                Password Confirmation
              </label>
              <input
                id="passwordConfirmation"
                type="password"
                className="block w-full px-4 py-2 mt-2  border  rounded-md 
                bg-gray-800 text-gray-300 border-gray-600 
                 focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div> */}
            {/* <div>
              <label className="text-white " htmlFor="passwordConfirmation">
                Color
              </label>
              <input
                id="color"
                type="color"
                className="block w-full px-4 py-2 mt-2  border  rounded-md bg-gray-800 
                text-gray-300 border-gray-600 
                 focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div> */}
            <div>
              <label className="text-white " htmlFor="passwordConfirmation">
                Category
              </label>
              <select
                className="block w-full px-4 py-2 mt-2 
               border 
                rounded-md bg-gray-800 text-gray-300 border-gray-600
              
               focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option>Surabaya</option>
                <option>Jakarta</option>
                <option>Tangerang</option>
                <option>Bandung</option>
              </select>
            </div>
            {/* <div>
              <label className="text-white " htmlFor="passwordConfirmation">
                Range
              </label>
              <input
                id="range"
                type="range"
                className="block w-full py-2 mt-2 text-gray-70/0
                  border  rounded-md bg-gray-800 text-gray-300
                  border-gray-600  focus:border-blue-500 
                  focus:outline-none focus:ring"
              />
            </div> */}
            {/* <div>
              <label className="text-white " htmlFor="passwordConfirmation">
                Date
              </label>
              <input
                id="date"
                type="date"
                className="block w-full px-4 py-2 mt-2 text-gray-700/ 
                 border  rounded-md bg-gray-800 text-gray-300
                 border-gray-600  focus:border-blue-500
                  focus:outline-none focus:ring"
              />
            </div> */}
            <div>
              <label className="text-white " htmlFor="passwordConfirmation">
                Description
              </label>
              <textarea
                id="textarea"
                className="block w-full px-4 py-2 mt-2  border  rounded-md bg-gray-800
                 text-gray-300 border-gray-600  focus:border-blue-500 focus:outline-none focus:ring"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-white">
                Image
              </label>
              <div
                className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2  
              border-dashed rounded-md"
              >
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium
                       text-indigo-600 hover:text-indigo-500 focus-within:outline-none 
                       focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span className="">Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 
            transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none
             focus:bg-gray-600"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              style={{
                background:
                  "linear-gradient(to right, #0F4C99, #074495, #074495,#658BBB)",
              }}
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddSupply;
