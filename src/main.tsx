import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import { AppContextProvider } from './context';
import CodeOfConduct from './pages/Code-of-conduct/index.tsx'
import Confirmation from './components/Confirmation';
import NotFound from './NotFound.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Redirect from './Redirect.tsx';
import Sessions from './pages/sessions/index.tsx';
import Speakers from './pages/speakers';
import Sponsors from './pages/sponsors/index.tsx';
import Teams from './pages/team';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: '/sponsors',
    element: <Sponsors />,
    errorElement: <NotFound />,
  },
  {
    path: '/sponsors/form',
    element: <Redirect to="https://tinyurl.com/sponsor-apiconf-form" />,
    errorElement: <NotFound />,
  },
  {
    path: '/sponsor',
    element: (
      <Redirect to="https://docs.google.com/presentation/d/1DtU1WKhuVRtVoCCc0FD7l3PYzHHEZ6alI_a1HboUdyo/edit" />
    ),
    errorElement: <NotFound />,
  },
  {
    path: '/register',
    element: <Redirect to="https://lu.ma/ltp8u2bb" />,
    errorElement: <NotFound />,
  },
  {
    path: '/cfp',
    element: <Redirect to="https://sessionize.com/api-conf-lagos-2025/" />,
    errorElement: <NotFound />,
  },
  {
    path: '2024',
    element: <NotFound />,
    errorElement: <NotFound />,
  },
  {
    path: 'speakers',
    element: <Speakers />,
    errorElement: <NotFound />,
  },
  {
    path: 'teams',
    element: <Teams />,
    errorElement: <NotFound />,
  },
  {
    path: '/schedule',
    element: <Sessions />,
    errorElement: <NotFound />,
  },
  {
    path: '/code-of-conduct',
    element: <CodeOfConduct />,
    errorElement: <NotFound />,
  },
  {
    path: '2024/dp',
    element: <Confirmation />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
