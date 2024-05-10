import { useAddSuppliesMutation } from "@/redux/api/api";
import { FormEvent, useState } from "react";

const AddSupply = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  // const dispatch = useAppDispatch();

  const [addSupply, { data, isLoading, isError, isSuccess }] =
    useAddSuppliesMutation();
  console.log(data, isError, isLoading, isSuccess);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // const imageName = ;
    // console.log(title, amount, description, category, imageName);
    const supplyDetails = {
      title: title,
      amount: amount,
      description: description,
      category: category,
      image: image ? image.name : "",
    };
    // dispatch(addSupply(supplyDetails));
    addSupply(supplyDetails);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedImage = files[0];
      setImage(selectedImage); // Store the selected image file

      // Preview the selected image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

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
        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-white " htmlFor="title">
                Title
              </label>
              <input
                id="title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
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
                type="number"
                onChange={(e) => setAmount(e.target.value)}
                className="block w-full px-4 py-2 mt-2  border 
                 rounded-md bg-gray-800 text-gray-300
                  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-white " htmlFor="passwordConfirmation">
                Category
              </label>
              <select
                onChange={(e) => setCategory(e.target.value)}
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

            <div>
              <label className="text-white " htmlFor="passwordConfirmation">
                Description
              </label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                id="textarea"
                className="block w-full px-4 py-2 mt-2  border  rounded-md bg-gray-800
                 text-gray-300 border-gray-600  focus:border-blue-500 focus:outline-none focus:ring"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-white">
                Image
              </label>
              <div className="mt-6">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Uploaded"
                    className="w-full h-auto"
                  />
                ) : (
                  <>
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
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
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
                              onChange={handleImageChange}
                            />
                          </label>
                          <p className="pl-1 text-white">or drag and drop</p>
                        </div>
                        <p className="text-xs text-white">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </>
                )}
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
