import { FC } from "react";
import { Outlet } from "react-router-dom";

import "./Layout.css";

const Layout: FC = () => {
   return (
      <>
         <Outlet />
      </>
   )
}

export { Layout };
