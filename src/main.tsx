import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.tsx";
import "./index.css";
import { CurrentWeatherView } from "./views/currentWeatherView.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <CurrentWeatherView /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
