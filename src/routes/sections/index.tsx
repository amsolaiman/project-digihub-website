import { Navigate, useRoutes, Outlet } from "react-router-dom";
// layouts
// import MainLayout from "src/layouts/main";
//
import { HomePage, mainRoutes } from "./main";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Outlet />,
      children: [{ element: <HomePage />, index: true }],
    },

    // Auth routes
    // ...authRoutes,

    // Dashboard routes
    // ...dashboardRoutes,

    // Main routes
    ...mainRoutes,

    // No match 404
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
