// src/routes.js
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Actors from './pages/Actors';
import Directors from './pages/Directors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage';

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />, // Optional: Error handling for Home route
  },
  {
    path: "/actors",
    element: <Actors />,
    errorElement: <ErrorPage />, // Optional: Error handling for Actors route
  },
  {
    path: "/directors",
    element: <Directors />,
    errorElement: <ErrorPage />, // Optional: Error handling for Directors route
  },
  {
    path: "/movie/:id",
    element: <Movie />,
    errorElement: <ErrorPage />, // Optional: Error handling for Movie route
  },
  {
    path: "*", // Catch-all route for undefined paths
    element: <ErrorPage />,
  },
];

export default routes;
