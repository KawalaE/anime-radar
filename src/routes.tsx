import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AnimeDetailPage from "./components/AnimeDetailPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "anime/:id", element: <AnimeDetailPage /> },
    ],
  },
]);

export default router;
