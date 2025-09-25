import { Outlet } from "react-router";
import Header from "./components/header";
import { Sidebar } from "./components/sidebar";

export function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="conteiner">
        <h1>Awesome Todo</h1>
        <Outlet />
      </div>
    </>
  );
}

export default App;
