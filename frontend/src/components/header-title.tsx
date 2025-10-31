export type headerTitleProps = {
  title:
    | "/"
    | "/vital-task"
    | "/my-task"
    | "/task-categories"
    | "/account-info";
};

export function HeaderTitle({ title }: headerTitleProps) {
  switch (title) {
    case "/":
      return (
        <h2>
          <span>Dash</span>board
        </h2>
      );
    case "/vital-task":
      return (
        <h2>
          <span>Vital</span>-task
        </h2>
      );
    case "/my-task":
      return (
        <h2>
          <span>My-</span>task
        </h2>
      );
    case "/task-categories":
      return (
        <h2>
          <span>Task-</span>categories
        </h2>
      );
    case "/account-info":
      return (
        <h2>
          <span>Account</span>-info
        </h2>
      );
  }
}
