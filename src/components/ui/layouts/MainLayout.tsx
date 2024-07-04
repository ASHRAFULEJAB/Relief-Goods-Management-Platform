import Container from "@/components/Container";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Banner from "@/pages/home/Banner";

const MainLayout = () => {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";
  return (
    <div>
      <Navbar />
      {isHomeRoute && <Banner />}
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
