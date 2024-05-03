import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Apperror from "./Views/Auth/Error";
import Login from "./Views/Auth/login";
import QueryGen from "./Views/QueryGen";
import QueryResults from './Views/QueryGen/queryResults';

export const router = createBrowserRouter([
  { path: "/", element: <QueryGen /> },
  {
    path: "/querygen",
    element: <QueryGen />,
  },
  {
    path: "/queryresults",
    element: <QueryResults />,
  },
]);

export const unprotectedRoutes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/error",
    element: <Apperror />,
  },
]);
