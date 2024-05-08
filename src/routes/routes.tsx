import App from "@/App";
import Login from "@/components/Login";
import Register from "@/components/Register";
import AllRelief from "@/pages/Allrelief/AllRelief";
import Dashboard from "@/pages/dashboard";
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
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default router;
