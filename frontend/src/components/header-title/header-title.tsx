import { type ROUTESType } from "../../config/constans";
import styles from "./header-title.module.css";
import { useLocation } from "react-router";

type TTitle = { firstWord: string; secondWord: string };

const MAP: Record<ROUTESType, TTitle> = {
  "/": { firstWord: "Dash", secondWord: "bord" },
  "/vital-task": { firstWord: "Vital", secondWord: " task" },
  "/my-task": { firstWord: "My", secondWord: " task" },
  "/task-categories": { firstWord: "Task", secondWord: " categories" },
  "/account-info": { firstWord: "Account", secondWord: " info" },
};

export function HeaderTitle() {
  const location = useLocation();

  const title = MAP[location.pathname as ROUTESType];

  return (
    <h2 className={styles.title}>
      <span>{title.firstWord}</span>
      {title.secondWord}
    </h2>
  );
}
