import { Link } from "react-router";
import { Icon } from "./icon";

export function Sidebar() {
  return (
    <nav className="nav">
      <Link to="/">
        <Icon name="dashboard" size="l" color="#fff" />
        Dashboard
      </Link>
      <Link to="/vital-task">
        <Icon name="exclamation" size="l" color="#fff" />
        Vital Task
      </Link>
      <Link to="/my-task">
        <Icon name="my-task" size="l" color="#fff" />
        My Task
      </Link>
      <Link to="/task-categories">
        <Icon name="categories" size="l" color="#fff" />
        Task Categories
      </Link>
      <Link to="/account-info">
        <Icon name="settings-icon" size="l" color="#fff" />
        Account Info
      </Link>
    </nav>
  );
}
