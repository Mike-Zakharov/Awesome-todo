import { Outlet } from "react-router";
import { Header } from "../header/header";
import { Sidebar } from "../sidebar/sidebar.tsx";
import styles from "./app.module.css";

export function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
