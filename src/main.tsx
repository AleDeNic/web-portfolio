import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Projects from "./pages/landing-page/Projects.tsx";
import Habitomori from "./pages/habitomori/Habitomori.tsx";

/**
 * This is the entry point of the application.
 * It is responsible for rendering the App component, where all the navigation resides.
 * As you can see, the App component is wrapped in a RouterProvider. This is necessary for the library to work.
 *
 * The createBrowserRouter function is responsible for creating the router.
 * It receives an array of routes. Each route has a path and an element.
 *
 * You may not like the fact that you have different URLs, but in React it's very common to have this structure.
 * You always stay on the same page, but the content changes depending on the URL.
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/habitomori",
        element: <Habitomori />,
      },
      {
        path: "/noclip",
        element: <div>Noclip</div>,
      },
      {
        path: "/sussurri-sepolti",
        element: <div>Sussurri Sepolti</div>,
      },
      {
        path: "/everlived",
        element: <div>Everlived</div>,
      },
      {
        path: "/la-superscomoda",
        element: <div>La Superscomoda</div>,
      },
      {
        path: "/quanto",
        element: <div>Quanto</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
);
