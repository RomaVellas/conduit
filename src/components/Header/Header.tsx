import { Link } from "react-router-dom";
import { PATH_HOME } from "../../paths";
import { FC } from "react";

import "./Header.scss";

const Header: FC = () => {
  return (
    <header>
      <nav className="header__nav">
        <div className="container">
          <Link className="nav__link-home" to={PATH_HOME}>
            conduit
          </Link>
          <ul className="nav__links-right">
            <li>
              <Link className="nav__link" to={PATH_HOME}>
                Home
              </Link>
            </li>
            <li>
              <Link className="nav__link" to="#">
                Sign in
              </Link>
            </li>
            <li>
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
