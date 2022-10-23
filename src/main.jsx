import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import Page2 from "./Page2";

import { DataProvider } from "./context/Datacontext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/page2",
    element: <Page2 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>
);
