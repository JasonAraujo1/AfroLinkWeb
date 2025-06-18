import { Outlet } from "react-router";
import HeaderSimples from "../components/header/headerSimples";
import FooterHome from "../components/footerHome";


export default function LayoutHeaderSimples() {
  return (
    <>
      <HeaderSimples />
      <main className="fade-in ">
        <Outlet />
        <FooterHome/>
      </main>
    </>
  );
}
