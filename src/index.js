import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContactPage from './pages/ContactPage';
import EventsPage from './pages/EventsPage';
import TeamPage from './pages/TeamPage';
import FlutterPage from './pages/FlutterPage';
import CodePage from './pages/CodePage';
import Android3Page from './pages/Android3Page';
import Android2Page from './pages/Android2Page';
import Android1Page from './pages/Android1Page';
import HomePage from './pages/HomePage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "home",
    element: <HomePage/>,
  },
  {
    path: "contact",
    element: <ContactPage/>,
  },
  {
    path: "event",
    element: <EventsPage/>,
  },
  {
    path: "team",
    element: <TeamPage/>,
  },
  {
    path: "flutter",
    element: <FlutterPage/>,
  },
  {
    path: "code",
    element: <CodePage/>,
  },
  {
    path: "android3",
    element: <Android3Page/>,
  },
  {
    path: "android2",
    element: <Android2Page/>,
  },
  {
    path: "android1",
    element: <Android1Page/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
