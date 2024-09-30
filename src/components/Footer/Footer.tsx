import { FC } from "react";
import "./Footer.css";

const Footer: FC = () => {
   return (
      <footer className="footer">
         <a className="footer__link-github" href="https://github.com/RomaVellas/conduit"><text className="footer__text">Fork on GitHub</text></a>
      </footer>
   )
}

export default Footer;
