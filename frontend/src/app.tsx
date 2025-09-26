import { Outlet } from "react-router";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";

export function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="conteiner">
        <Outlet />
      </div>
    </>
  );
}

export default App;
