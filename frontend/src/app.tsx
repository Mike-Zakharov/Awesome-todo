import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/header";

export function App() {
  return (
    <>
      <Header />
      <h1>Awesome Todo</h1>
      <Outlet />
    </>
  );
}

export default App;
