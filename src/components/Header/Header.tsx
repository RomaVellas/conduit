import { Link } from "react-router-dom";
import { FC } from "react";

import "./Header.scss";

const Header: FC = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <Link className="nav__link-home" to="/">
            conduit
          </Link>
          <ul className="nav__links-right">
            <li>
              <Link className="nav__link" to="/">
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
