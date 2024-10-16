import { FC } from "react";
import { PATH_TO_THE_PROJECT } from "../../paths";

import "./Footer.scss";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <a className="footer__link-github" href={PATH_TO_THE_PROJECT}>
        <h3>Fork on GitHub</h3>
      </a>
    </footer>
  );
};

export default Footer;
