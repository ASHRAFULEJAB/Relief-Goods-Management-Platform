import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Container from "@/components/Container";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
