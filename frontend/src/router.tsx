import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const { App } = await import("./app");
      return { Component: App };
    },
    children: [
      {
        path: "/",
        lazy: async () => {
          const { Dashboard } = await import("./pages/dashboard");
          return { Component: Dashboard };
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
