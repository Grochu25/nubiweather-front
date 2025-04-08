//import nubisoftLogo from "assets/nubisoft.svg";
import { WeatherView } from "./views/weatherView.tsx";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/Gliwice" replace /> },
  { path: "/Gliwice", element: <WeatherView /> },
  { path: "/Hamburg", element: <WeatherView /> },
  { path: "*", element: <Navigate to="/Gliwice" replace /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
