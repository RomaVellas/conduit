import "./Header.css";

const Header = () => {
   return (
      <header className="header">
         <nav className="header__nav">
            <div className="container">
               <a className="nav__link-home" href="#">conduit</a>
               <ul className="nav__links-right">
                  <li className="nav__link-wrapper"><a className="nav__link" href="#">Home</a></li>
                  <li className="nav__link-wrapper"><a className="nav__link" href="#">Sing in</a></li>
                  <li className="nav__link-wrapper"><a className="nav__link" href="#">Sing up</a></li>
               </ul>
            </div>
         </nav>
      </header>
   )
}

export default Header;
