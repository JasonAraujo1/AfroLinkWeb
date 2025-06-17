import { Outlet } from "react-router";
import HeaderSimples from "../components/header/headerSimples";


export default function LayoutHeaderSimples() {
  return (
    <>
      <HeaderSimples />
      <main className="fade-in ">
        <Outlet />
      </main>
    </>
  );
}
