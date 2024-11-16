import { lazy } from "react";
import { Outlet } from "react-router-dom";
// layouts
// import MainLayout from "src/layouts/main";

// ----------------------------------------------------------------------

export const HomePage = lazy(() => import("src/pages/home"));

// ----------------------------------------------------------------------

export const mainRoutes = [
  {
    element: <Outlet />,
    children: [],
  },
];
