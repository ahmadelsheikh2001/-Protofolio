import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../../store/app-context";
import { LogoDarkEN, LogoLigthEN, LogoDarkAR, LogoLigthAR } from "../../UI/Icons";
import NavbarControl from "../visitor/MainLayout/header/NavbarControl";

const SecNavbar = () => {
  const ctx = useContext(AppContext);

  const Logo = ctx.theme === 'dark' && ctx.lang === 'en' ? <LogoDarkEN /> : ctx.theme !== 'dark' && ctx.lang === 'en' ? <LogoLigthEN /> : ctx.theme === 'dark' && ctx.lang !== 'en' ? <LogoDarkAR /> : <LogoLigthAR />;

  return (
    <nav >
      <div className="d-none d-lg-block">
        <header id="header" className="flex">
            <div className="logo flex">
              <NavLink to='/home'>{Logo}</NavLink>
            </div>
            <div className="flex">
              <div className="main_navbar flex">
                <NavbarControl />
              </div>
            </div>
        </header>
      </div>
      <div className=" container d-lg-none">
        <header id="header" className="flex">
            <div className="logo flex">
              <NavLink to='/home'>{Logo}</NavLink>
            </div>
            <div className="flex">
              <div className="main_navbar flex">
                <NavbarControl />
              </div>
            </div>
        </header>
      </div>
    </nav>
  );
};

export default SecNavbar;