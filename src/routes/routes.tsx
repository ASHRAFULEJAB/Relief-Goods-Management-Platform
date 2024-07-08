import App from "@/App";
import Login from "@/components/Login";
import Register from "@/components/Register";
import AddSupply from "@/pages/AddSupply";
import AllRelief from "@/pages/Allrelief/AllRelief";
import SingaleRelief from "@/pages/Allrelief/SingaleRelief";
import AllSupply from "@/pages/allSupply";
import HomePageDashboad from "@/pages/dashboard/admin/HomePageDashboad";
import DynamicLayout from "@/pages/dashboard/dynamicLayout";
import UserDashboardHomePage from "@/pages/dashboard/user/UserDashboardHomePage";
import UserProfile from "@/pages/dashboard/user/UserProfile";
import Home from "@/pages/home/Home";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "relief-goods",
        element: <AllRelief />,
      },
      {
        path: "relief-goods/:id",
        element: <SingaleRelief />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <DynamicLayout />,
    children: [
      {
        index: true,
        element: <UserDashboardHomePage />, // Default user dashboard content
      },
      {
        path: "supplies",
        element: <AllSupply />,
      },
      {
        path: "user-profile",
        element: <UserProfile />,
      },
      {
        path: "create-supply",
        element: <AddSupply />,
      },
      {
        path: "admin-dashboard",
        element: <HomePageDashboad />, // Admin dashboard content
      },
    ],
  },
]);

export default router;
