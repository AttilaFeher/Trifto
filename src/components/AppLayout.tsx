import { Outlet } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
