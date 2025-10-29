import styles from "./header-title.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const titleTypes = [
  "/",
  "/vital-task",
  "/my-task",
  "/task-categories",
  "/account-info",
] as const;

type TitleType = (typeof titleTypes)[number];

export function HeaderTitle() {
  const location = useLocation();
  const [titleType, setTitleType] = useState(location.pathname);

  useEffect(() => {
    if (titleTypes.includes(location.pathname as TitleType)) {
      setTitleType(location.pathname as TitleType);
    } else {
      setTitleType("/");
    }
  }, [location.pathname]);

  let text = <></>;

  switch (titleType) {
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
