//import nubisoftLogo from "assets/nubisoft.svg";
import { CurrentWeatherView } from "./views/currentWeatherView.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <CurrentWeatherView /> },
  { path: "/Gliwice", element: <CurrentWeatherView /> },
  { path: "/Hamburg", element: <CurrentWeatherView /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
