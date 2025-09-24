import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import MyTask from "./pages/MyTask.tsx";
import AccountInfo from "./pages/AccountInfo.tsx";
import TaskCategories from "./pages/TaskCategories.tsx";
import VitalTask from "./pages/VitalTask.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "account-info",
        element: <AccountInfo />,
      },
      {
        path: "my-task",
        element: <MyTask />,
      },
      {
        path: "task-categories",
        element: <TaskCategories />,
      },
      {
        path: "vital-task",
        element: <VitalTask />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
