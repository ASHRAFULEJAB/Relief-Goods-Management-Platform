import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Container from "@/components/Container";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default MainLayout;
