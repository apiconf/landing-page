import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import NotFound from './NotFound.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Apcp />,
    errorElement: <NotFound />,
  },
  {
    path: '/v2',
    element: <App />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
