import { FC } from "react";
import { Outlet } from "react-router-dom";

import "./Layout.css";
import Header from "../Header/Header";

const Layout: FC = () => {
   return (
      <>
         <Header/>
         <Outlet />
      </>
   )
}

export { Layout };
