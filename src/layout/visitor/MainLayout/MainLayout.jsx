import { Outlet } from "react-router-dom";
import AppProvider from "../../../store/AppProvider";
import Contact from "../Contact/Contact";
// import ScrollTopBtn from "../scrollTopBtn/ScrollTopBtn";
import Navbar from "./header/Navbar";
import ScrollToTopButton from "../scrollTopBtn/ScrollToTopButton";

// import BackToTopButton from "../scrollTopBtn/BackToTopButton";

const MainLayout = () => {
  return (
    <AppProvider>
      <Navbar />
      <Outlet />
    
      <Contact />
      {
        // <BackToTopButton />
        // <ScrollTopBtn />
      } 
      <ScrollToTopButton/>
      
    </AppProvider>
  );
};

export default MainLayout;