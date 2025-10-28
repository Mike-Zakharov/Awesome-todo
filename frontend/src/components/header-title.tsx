import styles from "../styles/header-title.module.css";

export type headerTitleProps = {
  title:
    | "/"
    | "/vital-task"
    | "/my-task"
    | "/task-categories"
    | "/account-info";
};

export function HeaderTitle({ title }: headerTitleProps) {
  let text = <></>;
  switch (title) {
    case "/":
      text = (
        <>
          <span>Dash</span>board
        </>
      );
      break;
    case "/vital-task":
      text = (
        <>
          <span>Vital</span> task
        </>
      );
      break;
    case "/my-task":
      text = (
        <>
          <span>My</span> task
        </>
      );
      break;
    case "/task-categories":
      text = (
        <>
          <span>Task</span> categories
        </>
      );
      break;
    case "/account-info":
      text = (
        <>
          <span>Account</span> info
        </>
      );
      break;
  }
  return <h2 className={styles.title}>{text}</h2>;
}
