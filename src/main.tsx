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
    path: "futy-assignment/",
    element: <App />,
    children: [
      {
        path: "futy-assignment/",
        element: <Options />,
        children: [
          {
            path: "futy-assignment/live",
            loader: liveLoader,
            element: <Live />,
          },
          {
            path: "futy-assignment/completed",
            loader: completedLoader,
            element: <Completed />,
          },
          {
            path: "futy-assignment/",
            loader: upcomingLoader,
            element: <Upcoming />,
          },
        ],
      },
      { path: "futy-assignment/profile", element: <User /> },
      { path: "futy-assignment/score", element: <Score /> },
      { path: "futy-assignment/coins", element: <Coins /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
