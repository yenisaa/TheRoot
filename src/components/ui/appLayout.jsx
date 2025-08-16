import { Outlet } from "react-router-dom";
import Footer from "../features/footer/footer";
import Header from "../features/header/header";

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
