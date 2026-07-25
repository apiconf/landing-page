import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import App2025 from './pages/2025/index.tsx';
import { AppContextProvider } from './context';
import ChatWidget from './components/ChatWidget.tsx';
import CodeOfConduct from './pages/Code-of-conduct/index.tsx';
import Confirmation from './components/Confirmation';
import Hackathon from './pages/hackathon/index.tsx';
import NotFound from './NotFound.tsx';
import QR from './pages/Qr/index.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Redirect from './Redirect.tsx';
import Sessions from './pages/sessions/index.tsx';
import Speakers from './pages/speakers';
import Sponsors from './pages/sponsors/index.tsx';
import Teams from './pages/team';
import Venue from './pages/venue';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: '/2025',
    errorElement: <NotFound />,
    children: App2025,
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
      <Redirect to="https://drive.google.com/file/d/1i5eUM2ZHzFrKOaQ1TFo9snj06I6N8Av3/view" />
    ),
    errorElement: <NotFound />,
  },
  {
    path: '/register',
    element: <Redirect to="https://luma.com/588n962h" />,
    errorElement: <NotFound />,
  },
  {
    path: '/cfp',
    element: <Redirect to="https://sessionize.com/api-conf-lagos-2026/" />,
    errorElement: <NotFound />,
  },
  {
    path: '/workshop',
    element: <Redirect to="https://meetumo.ai/e/api-conf-lagos-workshop-2026" />,
    errorElement: <NotFound />,
  },
  {
    path: '2024',
    element: <NotFound />,
    errorElement: <NotFound />,
  },
  {
    path: '/speakers',
    element: <Speakers />,
    errorElement: <NotFound />,
  },
  {
    path: '/teams',
    element: <Teams />,
    errorElement: <NotFound />,
  },
  {
    path: '/schedule',
    element: <Sessions />,
    errorElement: <NotFound />,
  },
  {
    path: '/venue',
    element: <Venue />,
    errorElement: <NotFound />,
  },
  {
    path: '/code-of-conduct',
    element: <CodeOfConduct />,
    errorElement: <NotFound />,
  },
  {
    path: '/hackathon',
    element: <Hackathon />,
    errorElement: <NotFound />,
  },
  {
    path: '/2025qr',
    element: <QR />,
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
      <ChatWidget />
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
