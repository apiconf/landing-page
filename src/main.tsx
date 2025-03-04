import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import App2024 from "./App2024.tsx";
import { AppContextProvider } from "./context";
import Confirmation from "./components/Confirmation";
import NotFound from "./NotFound.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import Sessions from "./pages/sessions";
import Speakers from "./pages/speakers";
import SponsorRedirect from "./SponsorRedirect.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path:"/sponsor",
    element: <SponsorRedirect />,
    errorElement: <NotFound />
  },
  {
    path: "2024",
    element: <App2024 />,
    errorElement: <NotFound />,
  },
  {
    path: "2024/speakers",
    element: <Speakers />,
    errorElement: <NotFound />,
  },
  {
    path: "2024/sessions",
    element: <Sessions />,
    errorElement: <NotFound />,
  },
  {
    path: "2024/dp",
    element: <Confirmation />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
