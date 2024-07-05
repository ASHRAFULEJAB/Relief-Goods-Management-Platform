// Service.js
import "./Service.css";

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
      <div className="service-cards">
        <div className="service-card">
          <div className="service-icon service-education"></div>
          <h2>Education initiatives</h2>
          <p>
            Empowering future generations through access to quality education
            and skill development programs.
          </p>
          <button className="service-button">Read more</button>
        </div>
        <div className="service-card">
          <div className="service-icon service-healthcare"></div>
          <h2>Healthcare services</h2>
          <p>
            Enhancing health outcomes and promoting wellness through accessible
            healthcare services.
          </p>
          <button className="service-button">Read more</button>
        </div>
        <div className="service-card">
          <div className="service-icon service-community"></div>
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
