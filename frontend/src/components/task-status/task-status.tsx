import { Icon } from "../icon";
import styles from "./task-status.module.css";

export function TaskStatus() {
  return (
    <div className={styles.container}>
      <div className={styles.title_group}>
        <Icon name="task-complete" size="l" />
        <h4>Task Status</h4>
      </div>
      <div></div>
    </div>
  );
}
