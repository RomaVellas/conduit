import { Link } from "react-router-dom";
import { PATH_HOME } from "../../paths";
import { FC } from "react";

import "./Header.css";

const Header: FC = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="container">
          <Link className="nav__link-home" to={PATH_HOME}>
            conduit
          </Link>
          <ul className="nav__links-right">
            <li className="nav__link-wrapper">
              <Link className="nav__link" to="/">
                Home
              </Link>
            </li>
            <li className="nav__link-wrapper">
              <Link className="nav__link" to="#">
                Sign in
              </Link>
            </li>
            <li className="nav__link-wrapper">
              <Link className="nav__link" to="#">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
