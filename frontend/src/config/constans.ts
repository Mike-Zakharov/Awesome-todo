export const ROUTES = {
  MY_TASK: "/my-task",
  DASHBOARD: "/",
  VITAL_TASK: "/vital-task",
  TASK_CATEGORIES: "/task-categories",
  ACCOUNT_INFO: "/account-info",
} as const;

export type ROUTESType = (typeof ROUTES)[keyof typeof ROUTES];

export const BASE_PATH = "http://localhost:3000";
