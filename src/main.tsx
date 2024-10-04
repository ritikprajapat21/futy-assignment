import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./user.tsx";
import Coins from "./coins.tsx";
import Score from "./score.tsx";
import Options from "./components/options.tsx";
import { completedLoader, liveLoader, upcomingLoader } from "./lib/loader.ts";
import Live from "./components/live.tsx";
import Completed from "./components/completed.tsx";
import Upcoming from "./components/upcoming.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Options />,
        children: [
          { path: "/live", loader: liveLoader, element: <Live /> },
          {
            path: "/completed",
            loader: completedLoader,
            element: <Completed />,
          },
          { path: "/", loader: upcomingLoader, element: <Upcoming /> },
        ],
      },
      { path: "/profile", element: <User /> },
      { path: "/score", element: <Score /> },
      { path: "/coins", element: <Coins /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
