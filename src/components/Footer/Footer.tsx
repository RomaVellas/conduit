import { FC } from "react";
import "./Footer.css";
import { PATH_TO_THE_PROJECT } from "./consts";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <a className="footer__link-github" href={PATH_TO_THE_PROJECT}>
        <text className="footer__text">Fork on GitHub</text>
      </a>
    </footer>
  );
};

export default Footer;
