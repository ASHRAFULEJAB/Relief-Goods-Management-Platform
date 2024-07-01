import App from "@/App";
import Login from "@/components/Login";
import Register from "@/components/Register";
import AddSupply from "@/pages/AddSupply";
import AllRelief from "@/pages/Allrelief/AllRelief";
import SingaleRelief from "@/pages/Allrelief/SingaleRelief";
import AllSupply from "@/pages/allSupply";
import DashboardLayout from "@/pages/dashboard/admin/DashboardLayout";

import HomePageDashboad from "@/pages/dashboard/admin/HomePageDashboad";
import UserDashboard from "@/pages/dashboard/user/UserDashboard";
import UserDashboardHomePage from "@/pages/dashboard/user/UserDashboardHomePage";
import UserDashboardLayout from "@/pages/dashboard/user/UserDashboardLayout";
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
    element: <UserDashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: (
          <>
            {/* <HomePageDashboad /> */}
            <UserDashboardHomePage />
          </>
        ),
      },
      {
        path: "/dashboard/supplies",
        element: <AllSupply />,
      },
      {
        path: "/dashboard/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/dashboard/create-supply",
        element: <AddSupply />,
      },
    ],
  },
]);

export default router;
