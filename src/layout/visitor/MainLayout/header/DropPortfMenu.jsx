import React from "react";
import { NavLink } from "react-router-dom";
import DropMenu from "../../../../UI/dropdownMenu/DropMenu";
import { CaseStudyIcon, UIICon, Arrow } from "../../../../UI/Icons";
import { useTranslation } from "react-i18next";

const DropPortfMenu = ({ setShowDropDown, showDropMenu, id, onCloseMenu }) => {
  const { t, i18n } = useTranslation();

  return (
    <DropMenu state={showDropMenu} setState={setShowDropDown} id={id}>
      <li>
        <NavLink
          onClick={onCloseMenu}
          className={`navlink ${(navData) =>
            navData.isActive ? "active" : ""}`}
          to="/ui"
        >
          <div className="icon_box">
            <UIICon />
          </div>
          <div className="link_box">
            <div className="link_head">
              <p>{t("Ui_Desings")}</p>
              <p className="link_arr link_arren">
                <svg
                  width="24"
                  height="11"
                  viewBox="0 0 24 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6234 9.99616C17.6231 9.87593 17.6466 9.75684 17.6928 9.64582C17.739 9.5348 17.8068 9.43407 17.8923 9.34952L21.787 5.45769L17.8923 1.56587C17.72 1.39427 17.623 1.16129 17.6225 0.918195C17.6221 0.675096 17.7183 0.441786 17.8901 0.269592C18.0618 0.097397 18.2949 0.000422451 18.5382 1.37697e-06C18.7815 -0.000419697 19.015 0.0957472 19.1873 0.267346L23.7313 4.80806C23.8165 4.89294 23.8841 4.99379 23.9302 5.10482C23.9763 5.21584 24 5.33487 24 5.45507C24 5.57528 23.9763 5.6943 23.9302 5.80533C23.8841 5.91636 23.8165 6.0172 23.7313 6.10209L19.1873 10.6428C19.0148 10.8129 18.7822 10.9082 18.5398 10.9082C18.2975 10.9082 18.0649 10.8129 17.8923 10.6428C17.8068 10.5582 17.739 10.4575 17.6928 10.3465C17.6466 10.2355 17.6231 10.1164 17.6234 9.99616Z"
                    fill="#FF9452"
                  />
                  <path
                    d="M0.182678 5.45415C0.184431 5.21244 0.281092 4.98109 0.451849 4.8099C0.622606 4.63871 0.853806 4.54136 1.09567 4.53882L23.084 4.53882C23.3264 4.54058 23.5584 4.63758 23.7298 4.80886C23.9012 4.98014 23.9982 5.21193 24 5.45415C23.9984 5.69649 23.9014 5.92848 23.73 6.09991C23.5586 6.27135 23.3265 6.36846 23.084 6.37022L1.09567 6.37022C0.853676 6.36767 0.622364 6.27022 0.451588 6.09887C0.280809 5.92752 0.184237 5.69598 0.182678 5.45415Z"
                    fill="#FF9452"
                  />
                </svg>
              </p>
              <p className="link_arrar">&#8592;</p>
            </div>
            <span className="link_arren">
              A lot of different design projects.
            </span>
            <span className="link_arrar">
              الكثير من مشاريع التصميم المختلفة.
            </span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={onCloseMenu}
          className={`navlink ${(navData) =>
            navData.isActive ? "active" : ""}`}
          to="/cases"
        >
          <div className="icon_box">
            <CaseStudyIcon />
          </div>
          <div className="link_box">
            <div className="link_head">
              <p>{t("Case_Studies")}</p>
              <p className="link_arr link_arren">
              <svg
                  width="24"
                  height="11"
                  viewBox="0 0 24 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6234 9.99616C17.6231 9.87593 17.6466 9.75684 17.6928 9.64582C17.739 9.5348 17.8068 9.43407 17.8923 9.34952L21.787 5.45769L17.8923 1.56587C17.72 1.39427 17.623 1.16129 17.6225 0.918195C17.6221 0.675096 17.7183 0.441786 17.8901 0.269592C18.0618 0.097397 18.2949 0.000422451 18.5382 1.37697e-06C18.7815 -0.000419697 19.015 0.0957472 19.1873 0.267346L23.7313 4.80806C23.8165 4.89294 23.8841 4.99379 23.9302 5.10482C23.9763 5.21584 24 5.33487 24 5.45507C24 5.57528 23.9763 5.6943 23.9302 5.80533C23.8841 5.91636 23.8165 6.0172 23.7313 6.10209L19.1873 10.6428C19.0148 10.8129 18.7822 10.9082 18.5398 10.9082C18.2975 10.9082 18.0649 10.8129 17.8923 10.6428C17.8068 10.5582 17.739 10.4575 17.6928 10.3465C17.6466 10.2355 17.6231 10.1164 17.6234 9.99616Z"
                    fill="#FF9452"
                  />
                  <path
                    d="M0.182678 5.45415C0.184431 5.21244 0.281092 4.98109 0.451849 4.8099C0.622606 4.63871 0.853806 4.54136 1.09567 4.53882L23.084 4.53882C23.3264 4.54058 23.5584 4.63758 23.7298 4.80886C23.9012 4.98014 23.9982 5.21193 24 5.45415C23.9984 5.69649 23.9014 5.92848 23.73 6.09991C23.5586 6.27135 23.3265 6.36846 23.084 6.37022L1.09567 6.37022C0.853676 6.36767 0.622364 6.27022 0.451588 6.09887C0.280809 5.92752 0.184237 5.69598 0.182678 5.45415Z"
                    fill="#FF9452"
                  />
                </svg>
              </p>
              <p className="link_arrar">&#8592;</p>
            </div>
            <span className="link_arren">
              Many solutions for many problems.
            </span>
            <span className="link_arrar">
              الكثير من مشاريع التصميم المختلفة.
            </span>
          </div>
        </NavLink>
      </li>
    </DropMenu>
  );
};

export default DropPortfMenu;
