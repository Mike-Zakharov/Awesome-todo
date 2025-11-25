import { ComplitedTask } from "../../components/complited-task/complited-task";
import { TaskStatus } from "../../components/task-status/task-status";
import { Todos } from "../../components/todos/todos";
import { useAuthStore } from "../../store/user-store";
import styles from "./dashboard.module.css";

export function Dashboard() {
  const username = useAuthStore((s) => s.user?.username);
  const greeting = username ? `Welcome back, ${username}` : "Welcome back";

  return (
    <section className={styles.container}>
      <h3 className={styles.greeting}>{greeting}</h3>
      <div className={styles.wrapper}>
        <Todos />
        <TaskStatus />
        <ComplitedTask />
      </div>
    </section>
  );
}
