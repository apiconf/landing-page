import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
    path: "/speakers",
    element: <Speakers />,
    errorElement: <NotFound />,
  },
  {
    path: "/sessions",
    element: <Sessions />,
    errorElement: <NotFound />,
  },
  {
    path: "/dp",
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
