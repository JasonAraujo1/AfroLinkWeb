import { Outlet } from "react-router";


export default function AppLayout() {
  return (
    <div>
      <main className="fade-in ">
        <Outlet />
      </main>
    </div>
  );
}
