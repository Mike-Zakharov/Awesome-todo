import { ComplitedTask } from "../../components/complited-task/complited-task";
import { TaskStatus } from "../../components/task-status/task-status";
import { Todos } from "../../components/todos/todos";
import styles from "./dashboard.module.css";

export function Dashboard() {
  return (
    <section className={styles.container}>
      <div className={styles.greeting}>Welcome back, UserName</div>
      <div className={styles.wrapper}>
        <Todos />
        <TaskStatus />
        <ComplitedTask />
      </div>
    </section>
  );
}
