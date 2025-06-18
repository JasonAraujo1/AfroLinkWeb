import { Outlet } from "react-router";
import Header from "../components/header/headerComBusca";
import FooterHome from "../components/footerHome";


export default function AppLayout() {
  return (
    <>
      <Header />
      <main className="fade-in ">
        <Outlet />
        <FooterHome/>
      </main>
    </>
  );
}
