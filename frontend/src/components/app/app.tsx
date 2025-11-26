import { Outlet } from "react-router";
import { Header } from "../header/header";
import { Sidebar } from "../sidebar/sidebar.tsx";
import styles from "./app.module.css";
// import { SignIn } from "../../pages/sign-in/sign-in.tsx";
// import { useAuthStore } from "../../store/user-store.ts";
import { withAuth } from "../with-auth.tsx";

function App() {
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

export const AppWithUser = withAuth(App);
