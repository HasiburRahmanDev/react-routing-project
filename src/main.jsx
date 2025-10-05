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

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
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
        path: "/plant-details/:id",
        Component: PlantDetails,
      },
    ],
  },

  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "/about",
    Component: About,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
