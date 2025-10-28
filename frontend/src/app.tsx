import { Outlet } from "react-router";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import styles from "./styles/app.module.css";

export function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className={styles.conteiner}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
