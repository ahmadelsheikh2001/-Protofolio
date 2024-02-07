import { useEffect, useState, useContext } from "react";
import AppContext from "../../../../store/app-context";
import { Container } from "react-bootstrap";
import { LogoDarkAR, LogoDarkEN, LogoLigthAR, LogoLigthEN, ToggleMenuBtn } from "../../../../UI/Icons";
import { NavLink } from "react-router-dom";
import MainLinks from "./MainLinks";
import NavbarControl from "./NavbarControl";
import ButtonTransition from "../../../../UI/Buttons/ButtonTransition";
import HireBtn from '../../../../UI/Buttons/HireBtn/HireBtn';

import './Navbar.css';

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(null);
  const [showNav, setShowNav] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const ctx = useContext(AppContext);


  const Logo = ctx.theme === 'dark' && ctx.lang === 'en' ? <LogoDarkEN /> : ctx.theme !== 'dark' && ctx.lang === 'en' ? <LogoLigthEN /> : ctx.theme === 'dark' && ctx.lang !== 'en' ? <LogoDarkAR /> : <LogoLigthAR />;


  const controlNavbar = () => {
    if(document.body.getBoundingClientRect().top < -document.getElementById('header').getBoundingClientRect().height) {
      setScrollPosition (document.body.getBoundingClientRect().top);
      setShowNav(document.body.getBoundingClientRect().top > scrollPosition);
    }else {
      setShowNav(null);
    }
    openMenu && setShowNav(true);
  };

  useEffect(() => {

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    }

  },[scrollPosition]);

  const openMenuBtn = 
    <button 
      className="d-lg-none openMenu_btn"  
      onClick={() => setOpenMenu(true)}>
        <ToggleMenuBtn /> 
    </button>

  return (
    <div 
      className={`header ${showNav === null ? '' : showNav === true ? 'show' : 'hide'}`}
    >
      <header id="header" className="flex">
        <Container className='flex'>
          <div className="logo flex">
            {openMenuBtn}
            <ButtonTransition>
              <NavLink to='/home'>{Logo}</NavLink>
            </ButtonTransition>
          </div>
          <div className="flex">
            <div className="main_navbar flex">
              <MainLinks onMenuState={openMenu} onCloseMenu={() => setOpenMenu(false)} />
              <NavbarControl />
            </div>
            <span className="d-none d-lg-block">
              <HireBtn path='/new-project'/>
            </span>
          </div>
        </Container>
      </header>
    </div>
  );
};

export default Navbar;