import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { PATH_HOME } from "./paths";

import "./App.scss";

const App: FC = () => {
  return (
    <Routes>
      <Route path={PATH_HOME} element={<Layout />}></Route>
    </Routes>
  );
};

export default App;
