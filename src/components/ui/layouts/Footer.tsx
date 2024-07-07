import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#074495] text-white lg:py-10">
      <div className="w-full max-w-[1230px]  lg:px-[20px] mx-auto">
        <div className="container mx-auto lg:px-4">
          <div className="lg:flex justify-between items-center mb-8">
            <div className="lg:flex items-center">
              <img src={logo} alt="Charitfix Logo" className="w-20" />
              <nav className="lg:ml-10 lg:space-x-8">
                <Link to="/" className="text-white ">
                  Home
                </Link>
                <Link to="/donation" className="text-white ">
                  Donation
                </Link>
                <Link to="/about" className="text-white ">
                  About
                </Link>
                <Link to="/blog" className="text-white ">
                  Blog
                </Link>
                <Link to="/contact" className="text-white ">
                  Contact
                </Link>
              </nav>
            </div>
            <Link
              to="/donate"
              className="bg-[#E37423] hover:bg-[#E37423] text-white font-bold py-2 px-4 rounded"
            >
              Donate
            </Link>
          </div>
          {/* <hr className="border-gray-500" /> */}
          <div className="grid md:grid-cols-4 gap-8 mt-10">
            <div>
              <h3 className="text-xl font-bold mb-4">Home</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-white ">
                    About Fund Raising
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white ">
                    Latest Causes
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white ">
                    Latest Blog
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white ">
                    Our Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white ">
                    Our Mission
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Get Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-white ">
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white ">
                    Volunter Hub
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white ">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white ">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons">email</span>
                  <Link
                    to="mailto:donation@gmail.com"
                    className="text-white ml-2 "
                  >
                    donation@gmail.com
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="material-icons">phone</span>
                  <Link to="tel:+88111222333" className="text-white ml-2 ">
                    (+88) 111-222-333
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="material-icons">Address</span>
                  <span className="text-white ml-2">Dhaka,Bangladesh</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Achievement</h3>
              <ul className="">
                <li className="flex items-center">
                  <img
                    src="https://charitfix.vercel.app/theme/assets/images/gallery/project-1.png"
                    alt="Project 1"
                    className="w-10 h-10 rounded"
                  />
                  <div className="ml-2 mt-5">
                    <p className="text-white">
                      18 Best Charity Marketing Champions
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <img
                    src="https://charitfix.vercel.app/theme/assets/images/gallery/project-2.png"
                    alt="Project 2"
                    className="w-10 h-10 rounded"
                  />
                  <div className="ml-2 mt-5">
                    <p className="text-white">
                      Charity starts from home. You Can't Even Help,
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex justify-between items-center border-t border-gray-500 pt-4">
            <div className="text-sm ">
              <p className="text-white mt-5">
                © 2024 Copyright - PH RELIEF FUND
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-white ">
                <span className="material-icons">facebook</span>
              </a>
              <a href="#" className="text-white ">
                <span className="material-icons">twitter</span>
              </a>
              <a href="#" className="text-white ">
                <span className="material-icons">linkedin</span>
              </a>
              <a href="#" className="text-white ">
                <span className="material-icons">instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
