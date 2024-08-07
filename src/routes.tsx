import AnimeDetailPage from "./components/AnimeDetailPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "anime/:id", element: <AnimeDetailPage /> },
    ],
  },
];

export default routes;
