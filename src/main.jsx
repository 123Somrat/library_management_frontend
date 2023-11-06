import React from "react";
import ReactDOM from "react-dom/client";
import router from "./Router/Router.jsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Providers from "./Providers/Providers.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </React.StrictMode>
);
