import SecNavbar from "./SecNavbar";

import './secLayout.css';
import AppProvider from "../../store/AppProvider";

const SecLayout = ({ sidebar, content }) => {


  return (
    <AppProvider>
      <div className="layout-container">
        <div className="sidebar">
          <div className="sidebar-content">
            {sidebar}
          </div>
        </div>
          <div className="content">
            <SecNavbar />
            <div className="main_content">
                {content}
            </div>
          </div>
      </div>
    </AppProvider>
  );
};

export default SecLayout;