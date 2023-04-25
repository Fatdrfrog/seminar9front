import React from "react";
import ReactDOM from "react-dom/client";
import SendMoney from "./SendMoney";
import GenerateToken from "./GenerateToken";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/sendMoney",
    element: <SendMoney />,
  },
  {
    path: "/generateToken",
    element: <GenerateToken />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
