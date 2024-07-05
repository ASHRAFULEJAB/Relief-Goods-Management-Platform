import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#074495] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <img src={logo} alt="Charitfix Logo" className="w-32" />
            <nav className="ml-10 space-x-8">
              <Link to="/" className="text-white hover:text-gray-400">
                Home
              </Link>
              <Link to="/donation" className="text-white hover:text-gray-400">
                Donation
              </Link>
              <Link to="/about" className="text-white hover:text-gray-400">
                About
              </Link>
              <Link to="/blog" className="text-white hover:text-gray-400">
                Blog
              </Link>
              <Link to="/contact" className="text-white hover:text-gray-400">
                Contact
              </Link>
            </nav>
          </div>
          <Link
            to="/donate"
            className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
          >
            Donate
          </Link>
        </div>
        <hr className="border-gray-700" />
        <div className="grid md:grid-cols-4 gap-8 mt-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Explore Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-white hover:text-gray-400">
                  About Company
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white hover:text-gray-400">
                  Latest Projects
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white hover:text-gray-400">
                  Latest Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white hover:text-gray-400">
                  Our Testimonials
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white hover:text-gray-400">
                  Our Mission
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Get Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-white hover:text-gray-400">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white hover:text-gray-400">
                  Knowledge Hub
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white hover:text-gray-400">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white hover:text-gray-400">
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
                  className="text-white ml-2 hover:text-gray-400"
                >
                  donation@gmail.com
                </Link>
              </li>
              <li className="flex items-center">
                <span className="material-icons">phone</span>
                <Link
                  to="tel:+88111222333"
                  className="text-white ml-2 hover:text-gray-400"
                >
                  (+88) 111-222-333
                </Link>
              </li>
              <li className="flex items-center">
                <span className="material-icons">location_on</span>
                <span className="text-white ml-2">
                  Tropical Cyclone, Volcano
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Projects</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <img
                  src="https://example.com/project1.jpg"
                  alt="Project 1"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-2">
                  <p className="text-white">
                    18 Best Charity Marketing Champions
                  </p>
                  <p className="text-gray-400 text-sm">12.Oct.2023</p>
                </div>
              </li>
              <li className="flex items-center">
                <img
                  src="https://example.com/project2.jpg"
                  alt="Project 2"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-2">
                  <p className="text-white">
                    Charity starts from home. You Can't Even Help,
                  </p>
                  <p className="text-gray-400 text-sm">20.Oct.2023</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex justify-between items-center border-t border-gray-700 pt-4">
          <div className="text-sm">
            <p>© 2024 Copyright - PH RELIEF FUND</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <span className="material-icons">facebook</span>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <span className="material-icons">twitter</span>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <span className="material-icons">linkedin</span>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <span className="material-icons">instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
