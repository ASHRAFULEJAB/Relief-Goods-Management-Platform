import Testimonial from "@/components/Testimonial";
import AllRelief from "../Allrelief/AllRelief";
import Banner from "./Banner";
import Carousal from "./Carousal";
import Aboutus from "../Aboutus";
import DistributionCenterLocation from "../DistributionCenterLocation";

const Home = () => {
  return (
    <div>
      <Banner />
      <AllRelief />
      <Testimonial />
      <Carousal />
      <Aboutus />
      <DistributionCenterLocation />
    </div>
  );
};

export default Home;
