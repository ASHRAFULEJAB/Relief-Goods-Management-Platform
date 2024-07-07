// Service.js
import "./Service.css";
import service1 from "../../assets/images/service1.png";
import service2 from "../../assets/images/service2.png";
import service3 from "../../assets/images/service3.png";

const Service = () => {
  return (
    <div className="service-container">
      <header className="service-header">
        <h1>
          Empowering communities through{" "}
          <span className="service-highlight">sustainable</span> programs
        </h1>
        <p>
          Explore our impactful programs promoting education, healthcare access,
          and community development.
        </p>
      </header>
      <div className="service-cards text-center ">
        <div className="service-card">
          <div className="text-center">
            <img
              className="h-16 w-36 text-center ml-[80px]"
              src={service1}
              alt=""
            />
          </div>
          <h2>Education initiatives</h2>
          <p>
            Empowering future generations through access to quality education
            and skill development programs.
          </p>
          <button className="service-button">Read more</button>
        </div>
        <div className="service-card">
          <div className="text-center">
            <img
              className="h-16 w-36 text-center ml-[80px]"
              src={service2}
              alt=""
            />
          </div>
          <h2>Healthcare services</h2>
          <p>
            Enhancing health outcomes and promoting wellness through accessible
            healthcare services.
          </p>
          <button className="service-button">Read more</button>
        </div>
        <div className="service-card">
          <div className="text-center">
            <img
              className="h-16 w-36 text-center ml-[80px]"
              src={service3}
              alt=""
            />
          </div>
          <h2>Community development</h2>
          <p>
            Fostering inclusive and resilient communities through infrastructure
            projects, and social programs.
          </p>
          <button className="service-button">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
