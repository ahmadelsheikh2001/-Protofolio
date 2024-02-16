import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HomeAdminIcon, LogoDarkAR, Settings } from "../../UI/Icons";
import Ellipse from "./Ellipse.png";
const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const signOut = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_101_17949)">
        <path
          d="M22.8289 9.17143L18.9499 5.29243C18.7613 5.11027 18.5087 5.00948 18.2465 5.01176C17.9843 5.01403 17.7334 5.1192 17.548 5.30461C17.3626 5.49002 17.2575 5.74083 17.2552 6.00303C17.2529 6.26523 17.3537 6.51783 17.5359 6.70643L21.4149 10.5854C21.5301 10.703 21.6308 10.8339 21.7149 10.9754C21.6999 10.9754 21.6879 10.9674 21.6729 10.9674L5.98886 10.9994C5.72364 10.9994 5.46929 11.1048 5.28175 11.2923C5.09422 11.4799 4.98886 11.7342 4.98886 11.9994C4.98886 12.2646 5.09422 12.519 5.28175 12.7065C5.46929 12.8941 5.72364 12.9994 5.98886 12.9994L21.6669 12.9674C21.6949 12.9674 21.7179 12.9534 21.7449 12.9514C21.6562 13.1206 21.5437 13.2762 21.4109 13.4134L17.5319 17.2924C17.4363 17.3847 17.3602 17.495 17.3078 17.617C17.2554 17.739 17.2278 17.8702 17.2266 18.003C17.2255 18.1358 17.2508 18.2675 17.301 18.3904C17.3513 18.5133 17.4256 18.6249 17.5195 18.7188C17.6134 18.8127 17.725 18.887 17.8479 18.9373C17.9708 18.9875 18.1025 19.0128 18.2353 19.0117C18.368 19.0105 18.4993 18.9829 18.6213 18.9305C18.7433 18.8781 18.8536 18.8019 18.9459 18.7064L22.8249 14.8274C23.5747 14.0773 23.996 13.0601 23.996 11.9994C23.996 10.9388 23.5747 9.92154 22.8249 9.17143H22.8289Z"
          fill="#FF9452"
        />
        <path
          d="M7 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H7C7.26522 2 7.51957 1.89464 7.70711 1.70711C7.89464 1.51957 8 1.26522 8 1C8 0.734784 7.89464 0.48043 7.70711 0.292893C7.51957 0.105357 7.26522 0 7 0L5 0C3.67441 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.67441 0 5L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H7C7.26522 24 7.51957 23.8946 7.70711 23.7071C7.89464 23.5196 8 23.2652 8 23C8 22.7348 7.89464 22.4804 7.70711 22.2929C7.51957 22.1054 7.26522 22 7 22Z"
          fill="#FF9452"
        />
      </g>
      <defs>
        <clipPath id="clip0_101_17949">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <div className="admin_sidebar">
      <div>
        <div className="logo">
          <NavLink to="/">
            <LogoDarkAR />
          </NavLink>
        </div>
        <div className="card_mostatfa">
          <div>
            <img src={Ellipse} alt="Ellipse"></img>
          </div>
          <div className="card_mtext">
            <p>درش كامل</p>
            <p>صاحب الموقع</p>
          </div>
        </div>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/"
            >
              <HomeAdminIcon />
              لوحة التحكم
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="requests"
            >
              <HomeAdminIcon />
              طلبات العمل
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="allfeedbacks"
            >
              <HomeAdminIcon />
              أراء الناس
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="uiProjects"
            >
              <HomeAdminIcon />
              تصميمات الواجهات
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="casesproejects"
            >
              دراسة الحالات
            </NavLink>
          </li>
          <li>
            <span>أخرى</span>

            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="settings"
            >
              <Settings />
              الاعدادات
            </NavLink>
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => setShowMenu((prev) => !prev)}
          >
            كل الصفحات
            {showMenu && (
              <ul>
                <li>
                  <NavLink
                    className={(navData) => (navData.isActive ? "active" : "")}
                    to="homedata"
                  >
                    الرئيسية
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(navData) => (navData.isActive ? "active" : "")}
                    to="aboutdata"
                  >
                    معلومات عني
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(navData) => (navData.isActive ? "active" : "")}
                    to="resumedata"
                  >
                    سيرتي الذاتية
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div className="sign_out">
          <NavLink to="login">
            <span className="center">{signOut}</span>
            تسجيل الخروج
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
