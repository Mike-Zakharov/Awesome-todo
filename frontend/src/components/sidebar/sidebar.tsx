import { Link } from "react-router";
import { Icon } from "../icon";
import styles from "./sidebar.module.css";

export function Sidebar() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <Icon name="dashboard" size="l" />
        Dashboard
      </Link>
      <Link to="/vital-task">
        <Icon name="exclamation" size="l" />
        Vital Task
      </Link>
      <Link to="/my-task">
        <Icon name="my-task" size="l" />
        My Task
      </Link>
      <Link to="/task-categories">
        <Icon name="categories" size="l" />
        Task Categories
      </Link>
      <Link to="/account-info">
        <Icon name="settings-icon" size="l" />
        Account Info
      </Link>
      <Link to="#">
        <Icon name="exit" size="l" />
        Logout
      </Link>
    </nav>
  );
}
