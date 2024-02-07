import { useEffect, useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AboutIcon , CloseMenuBtn, DropDownIcon, HomeIcon, ProtofolioIcon, ResumeIcon } from "../../../../UI/Icons";
import NavbarControl from './NavbarControl';
import HireBtn from '../../../../UI/Buttons/HireBtn/HireBtn';
import DropPortfMenu from './DropPortfMenu';
import { motion, AnimatePresence } from 'framer-motion';


const MainLinks = props => {

  const [currentPath, setCurrentPath] = useState(false);
  const [showDropMenu, setShowDropDown] = useState(false);

  const location = useLocation();
  const { t, i18n } = useTranslation();


  // Active Protofolio
  useEffect(() => {
    if(
      location.pathname === '/ui' || 
      location.pathname === '/cases' || 
      location.pathname === '/sales'
    ) {
      setCurrentPath(true);
    }else {
      setCurrentPath(false);
    }
  },[location]);


  const classes = showDropMenu ? 'navlink flex show' : 'navlink flex';
  const navClasses = props.onMenuState ? 'main_links flex active' : 'main_links flex unnactive'
  

  return (
    <ul className={navClasses}>
      <div className='header_menu d-flex d-lg-none flex'>
        <button id='close_btn' onClick={props.onCloseMenu}>
          <CloseMenuBtn/>
        </button>
        <HireBtn path='/new-project'/>
      </div>
      <li>
        <NavLink
          onClick={props.onCloseMenu} 
          className={`navlink ${(navData) => navData.isActive ? 'active' : '' }`}
          to='/home'
        >
          <span className='d-lg-none'>
            <HomeIcon/>
          </span>
          <span>{t('Home')}</span>
        </NavLink>
      </li>
      <motion.li className='position-relative'>
        <button
          onClick={() => setShowDropDown(prevSt => !prevSt)} 
          className={`${classes} ${currentPath ? 'active' : ''}`}
          id='toggle-menu-prtf'
         >
           <span className='d-lg-none'><ProtofolioIcon/></span>
           <span>{t('Protofolio')}</span>
           <DropDownIcon />
        </button>
        <AnimatePresence>
          {showDropMenu && 
            <DropPortfMenu 
              id='toggle-menu-prtf' 
              setShowDropDown={setShowDropDown} 
              showDropMenu={showDropMenu}
              onCloseMenu={props.onCloseMenu}
            />
            }
        </AnimatePresence>
      </motion.li>
      <li>
        <NavLink
          onClick={props.onCloseMenu} 
          className={`navlink ${(navData) => navData.isActive ? 'active' : '' }`} 
          to='/resume'
        >
          <span className='d-lg-none'><ResumeIcon/></span>
          <span>{t('Resume')}</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={props.onCloseMenu} 
          className={`navlink ${(navData) => navData.isActive ? 'active' : '' }`} 
          to='/about-me'
        >
          <span className='d-lg-none'><AboutIcon/></span>
          <span>{t('About')}</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={props.onCloseMenu} 
          className={`navlink ${(navData) => navData.isActive ? 'active' : '' }`} 
          to='/admin'
        >
          <span className='d-lg-none'><AboutIcon/></span>
          <span>{t('Dashboard')}</span>
        </NavLink>
      </li>
      <li className='d-block d-lg-none'>
        <NavbarControl/>
      </li>
    </ul>
  );
};

export default MainLinks;