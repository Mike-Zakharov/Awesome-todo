import { createBrowserRouter } from "react-router";
import { App } from "./app.tsx";
import { Dashboard } from "./pages/dashboard.tsx";
import { MyTask } from "./pages/my-task.tsx";
import { AccountInfo } from "./pages/account-info.tsx";
import { TaskCategories } from "./pages/task-categories.tsx";
import { VitalTask } from "./pages/vital-task.tsx";

export const router = createBrowserRouter([
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
