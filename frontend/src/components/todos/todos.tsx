import { Icon } from "../icon";
import styles from "./todos.module.css";

export function Todos() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title_group}>
          <Icon name="task-clock_S" size="l" />
          <h4>To-do</h4>
        </div>
        <button className={styles.btn}>
          <Icon name="plus" size="m" />
          Add task
        </button>
      </div>
      <div className={styles.wrapper}>
        <div>Todo card</div>
      </div>
    </div>
  );
}
