const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col items-center bg-zinc-50 text-center text-surface dark:bg-neutral-700 dark:text-white">
        <div className="container p-6">
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            <div className="mb-6 lg:mb-0">
              <img
                src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://tecdn.b-cdn.net/img/new/fluid/city/111.webp"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://tecdn.b-cdn.net/img/new/fluid/city/112.webp"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://tecdn.b-cdn.net/img/new/fluid/city/114.webp"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://tecdn.b-cdn.net/img/new/fluid/city/115.webp"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://tecdn.b-cdn.net/img/new/fluid/city/116.webp"
                className="w-full rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="w-full bg-[#074495] text-white p-4 text-center">
          © 2024 Copyright -
          <a href="https://tw-elements.com/" className=""> PH RELIEF FUND</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
