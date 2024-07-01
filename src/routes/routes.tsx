import App from "@/App";
import Login from "@/components/Login";
import Register from "@/components/Register";
import AddSupply from "@/pages/AddSupply";
import AllRelief from "@/pages/Allrelief/AllRelief";
import SingaleRelief from "@/pages/Allrelief/SingaleRelief";
import AllSupply from "@/pages/allSupply";
import DashboardLayout from "@/pages/dashboard/DashboardLayout";
import HomePageDashboad from "@/pages/dashboard/HomePageDashboad";
import Home from "@/pages/home/Home";

import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";

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
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: (
          <>
            <HomePageDashboad />
          </>
        ),
      },
      {
        path: "/dashboard/supplies",
        element: <AllSupply />,
      },
      {
        path: "/dashboard/create-supply",
        element: <AddSupply />,
      },
    ],
  },
]);

export default router;
