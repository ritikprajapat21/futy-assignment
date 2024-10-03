import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./user.tsx";
import Coins from "./coins.tsx";
import Score from "./score.tsx";
import Options from "./components/options.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Options />,
        children: [
          { path: "/live", element: <div>Live</div> },
          { path: "/completed", element: <div>Completed</div> },
          { path: "/", element: <div>Upcoming</div> },
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
