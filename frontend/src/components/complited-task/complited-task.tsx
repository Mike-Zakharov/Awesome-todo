import { Icon } from "../icon";
import styles from "./complited-task.module.css";

export function ComplitedTask() {
  return (
    <div className={styles.container}>
      <div className={styles.title_group}>
        <Icon name="my-task" size="l" />
        <h4>Completed Task</h4>
      </div>
      <div></div>
    </div>
  );
}
