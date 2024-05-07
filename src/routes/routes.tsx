import App from "@/App";
import Login from "@/components/Login";
import Register from "@/components/Register";
import AllRelief from "@/pages/Allrelief/AllRelief";
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
        path: "all-relief",
        element: <AllRelief />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
