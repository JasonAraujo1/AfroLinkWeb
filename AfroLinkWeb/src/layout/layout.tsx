import { Outlet } from "react-router";
import Header from "../components/header";


export default function AppLayout() {
  return (
    <>
      <Header />
      <main className="fade-in ">
        <Outlet />
      </main>
    </>
  );
}
