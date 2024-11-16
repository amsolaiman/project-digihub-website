import React from "react";
// routes
import Router from "./routes/sections";
// styles
import "swiper/css";

// ----------------------------------------------------------------------

export default function App() {
  return (
    <React.Suspense fallback={<div />}>
      <Router />
    </React.Suspense>
  );
}
