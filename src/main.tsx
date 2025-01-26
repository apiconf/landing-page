import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App2024 from "./App2024.tsx";
import App from "./App.tsx";
import Speakers from "./pages/speakers";
import Sessions from "./pages/sessions";
import Confirmation from "./components/Confirmation";
import NotFound from "./NotFound.tsx";
import "./index.css";
import { AppContextProvider } from "./context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
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
