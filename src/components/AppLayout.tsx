import { Outlet } from "react-router-dom";
import Main from "./Main";

function AppLayout() {
  return (
    <div>
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
