import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
import RootLayout from "./Layouts/RootLayout.jsx";
import PlantDetails from "./Pages/PlantDetails.jsx";
import axios from "axios";
import LoadingSpinner from "./components/LoadingSpinner.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("https://openapi.programming-hero.com/api/plants"),
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/plant-details/:id",
        Component: PlantDetails,
        loader: ({ params }) =>
          axios(`https://openapi.programming-hero.com/api/plant/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
