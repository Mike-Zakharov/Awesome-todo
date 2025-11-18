import { createBrowserRouter } from "react-router";
import { ProtectedRoute } from "./components/redirects";

export const router = createBrowserRouter([
  {
    path: "/login",
    lazy: async () => {
      const { SignIn } = await import("./pages/sign-in/sign-in");
      return { Component: SignIn };
    },
  },
  {
    path: "/",
    lazy: async () => {
      const { AppWithUser } = await import("./components/app/app");
      return { Component: AppWithUser };
    },
    children: [
      {
        path: "/",
        lazy: async () => {
          const { Dashboard } = await import("./pages/dashboard/dashboard");
          return {
            Component: () => (
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            ),
          };
        },
      },
      {
        path: "account-info",
        lazy: async () => {
          const { AccountInfo } = await import("./pages/account-info");
          return { Component: AccountInfo };
        },
      },
      {
        path: "my-task",
        lazy: async () => {
          const { MyTask } = await import("./pages/my-task");
          return { Component: MyTask };
        },
      },
      {
        path: "task-categories",
        lazy: async () => {
          const { TaskCategories } = await import("./pages/task-categories");
          return { Component: TaskCategories };
        },
      },
      {
        path: "vital-task",
        lazy: async () => {
          const { VitalTask } = await import("./pages/vital-task");
          return { Component: VitalTask };
        },
      },
    ],
  },
]);
