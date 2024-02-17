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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_101_18164)">
                  <path d="M17.0001 14C17.0001 14.2652 16.8948 14.5196 16.7072 14.7071C16.5197 14.8947 16.2653 15 16.0001 15H8.00012C7.73491 15 7.48055 14.8947 7.29302 14.7071C7.10548 14.5196 7.00012 14.2652 7.00012 14C7.00012 13.7348 7.10548 13.4805 7.29302 13.2929C7.48055 13.1054 7.73491 13 8.00012 13H16.0001C16.2653 13 16.5197 13.1054 16.7072 13.2929C16.8948 13.4805 17.0001 13.7348 17.0001 14ZM13.0001 17H8.00012C7.73491 17 7.48055 17.1054 7.29302 17.2929C7.10548 17.4805 7.00012 17.7348 7.00012 18C7.00012 18.2652 7.10548 18.5196 7.29302 18.7071C7.48055 18.8947 7.73491 19 8.00012 19H13.0001C13.2653 19 13.5197 18.8947 13.7072 18.7071C13.8948 18.5196 14.0001 18.2652 14.0001 18C14.0001 17.7348 13.8948 17.4805 13.7072 17.2929C13.5197 17.1054 13.2653 17 13.0001 17ZM22.0001 10.485V19C21.9985 20.3256 21.4712 21.5965 20.5339 22.5338C19.5966 23.4711 18.3257 23.9984 17.0001 24H7.00012C5.67453 23.9984 4.40368 23.4711 3.46634 22.5338C2.529 21.5965 2.00171 20.3256 2.00012 19V5.00002C2.00171 3.67443 2.529 2.40358 3.46634 1.46624C4.40368 0.528905 5.67453 0.00161091 7.00012 2.30487e-05H11.5151C12.4347 -0.00234388 13.3457 0.177611 14.1953 0.529482C15.045 0.881354 15.8164 1.39816 16.4651 2.05002L19.9491 5.53602C20.6014 6.18426 21.1185 6.95548 21.4705 7.805C21.8226 8.65451 22.0026 9.56545 22.0001 10.485ZM15.0511 3.46402C14.7364 3.15918 14.3831 2.89695 14.0001 2.68402V7.00002C14.0001 7.26524 14.1055 7.51959 14.293 7.70713C14.4806 7.89467 14.7349 8.00002 15.0001 8.00002H19.3161C19.1031 7.61721 18.8405 7.26417 18.5351 6.95002L15.0511 3.46402ZM20.0001 10.485C20.0001 10.32 19.9681 10.162 19.9531 10H15.0001C14.2045 10 13.4414 9.68395 12.8788 9.12134C12.3162 8.55873 12.0001 7.79567 12.0001 7.00002V2.04702C11.8381 2.03202 11.6791 2.00002 11.5151 2.00002H7.00012C6.20447 2.00002 5.44141 2.31609 4.8788 2.8787C4.31619 3.44131 4.00012 4.20437 4.00012 5.00002V19C4.00012 19.7957 4.31619 20.5587 4.8788 21.1213C5.44141 21.684 6.20447 22 7.00012 22H17.0001C17.7958 22 18.5588 21.684 19.1214 21.1213C19.6841 20.5587 20.0001 19.7957 20.0001 19V10.485Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_101_18164">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              طلبات العمل
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="allfeedbacks"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_101_18167)">
                  <path d="M20 0H4C2.93913 0 1.92172 0.421427 1.17157 1.17157C0.421427 1.92172 0 2.93913 0 4L0 16C0 17.0609 0.421427 18.0783 1.17157 18.8284C1.92172 19.5786 2.93913 20 4 20H6.9L11.351 23.763C11.5316 23.9158 11.7605 23.9997 11.997 23.9997C12.2335 23.9997 12.4624 23.9158 12.643 23.763L17.1 20H20C21.0609 20 22.0783 19.5786 22.8284 18.8284C23.5786 18.0783 24 17.0609 24 16V4C24 2.93913 23.5786 1.92172 22.8284 1.17157C22.0783 0.421427 21.0609 0 20 0V0ZM22 16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H17.1C16.6273 18.0001 16.1699 18.1677 15.809 18.473L12 21.69L8.193 18.473C7.83156 18.1673 7.3734 17.9997 6.9 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H20C20.5304 2 21.0391 2.21071 21.4142 2.58579C21.7893 2.96086 22 3.46957 22 4V16Z" fill="white" fill-opacity="0.5" />
                  <path d="M7 7H12C12.2652 7 12.5196 6.89464 12.7071 6.7071C12.8946 6.51957 13 6.26521 13 6C13 5.73478 12.8946 5.48043 12.7071 5.29289C12.5196 5.10536 12.2652 5 12 5H7C6.73478 5 6.48043 5.10536 6.29289 5.29289C6.10536 5.48043 6 5.73478 6 6C6 6.26521 6.10536 6.51957 6.29289 6.7071C6.48043 6.89464 6.73478 7 7 7Z" fill="white" fill-opacity="0.5" />
                  <path d="M17 9H7C6.73478 9 6.48043 9.10536 6.29289 9.29289C6.10536 9.48043 6 9.73478 6 10C6 10.2652 6.10536 10.5196 6.29289 10.7071C6.48043 10.8946 6.73478 11 7 11H17C17.2652 11 17.5196 10.8946 17.7071 10.7071C17.8946 10.5196 18 10.2652 18 10C18 9.73478 17.8946 9.48043 17.7071 9.29289C17.5196 9.10536 17.2652 9 17 9Z" fill="white" fill-opacity="0.5" />
                  <path d="M17 13H7C6.73478 13 6.48043 13.1054 6.29289 13.2929C6.10536 13.4804 6 13.7348 6 14C6 14.2652 6.10536 14.5196 6.29289 14.7071C6.48043 14.8947 6.73478 15 7 15H17C17.2652 15 17.5196 14.8947 17.7071 14.7071C17.8946 14.5196 18 14.2652 18 14C18 13.7348 17.8946 13.4804 17.7071 13.2929C17.5196 13.1054 17.2652 13 17 13Z" fill="white" fill-opacity="0.5" />
                </g>
                <defs>
                  <clipPath id="clip0_101_18167">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              أراء الناس
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="uiProjects"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_101_18174)">
                  <path d="M21 16.001V12.001C20.9997 10.6575 20.698 9.33123 20.1172 8.11978C19.5364 6.90833 18.6912 5.84258 17.644 5.00102H20.277C20.4986 5.37863 20.8385 5.67266 21.2441 5.8376C21.6497 6.00254 22.0983 6.02918 22.5206 5.9134C22.9429 5.79763 23.3152 5.54589 23.5799 5.19716C23.8447 4.84842 23.9871 4.42215 23.9851 3.98431C23.9831 3.54647 23.8369 3.1215 23.569 2.77516C23.3011 2.42883 22.9266 2.18045 22.5033 2.06848C22.08 1.95651 21.6316 1.98718 21.2275 2.15577C20.8235 2.32435 20.4862 2.62142 20.268 3.00102H15.858C15.6397 2.14343 15.1419 1.38302 14.4433 0.83991C13.7446 0.296799 12.8849 0.00195313 12 0.00195312C11.1151 0.00195313 10.2554 0.296799 9.55672 0.83991C8.85806 1.38302 8.36027 2.14343 8.142 3.00102H3.723C3.50139 2.6234 3.16148 2.32937 2.75589 2.16443C2.3503 1.9995 1.90166 1.97286 1.4794 2.08863C1.05714 2.20441 0.684827 2.45615 0.42008 2.80488C0.155333 3.15361 0.0129225 3.57989 0.0148928 4.01772C0.0168631 4.45556 0.163104 4.88054 0.430979 5.22687C0.698853 5.57321 1.07342 5.82159 1.4967 5.93356C1.91999 6.04553 2.36837 6.01485 2.77246 5.84627C3.17655 5.67769 3.51379 5.38061 3.732 5.00102H6.356C5.30876 5.84258 4.46362 6.90833 3.88281 8.11978C3.30201 9.33123 3.00033 10.6575 3 12.001V16.001C2.20435 16.001 1.44129 16.3171 0.87868 16.8797C0.31607 17.4423 0 18.2054 0 19.001L0 21.001C0 21.7967 0.31607 22.5597 0.87868 23.1223C1.44129 23.6849 2.20435 24.001 3 24.001H5C5.79565 24.001 6.55871 23.6849 7.12132 23.1223C7.68393 22.5597 8 21.7967 8 21.001V19.001C8 18.2054 7.68393 17.4423 7.12132 16.8797C6.55871 16.3171 5.79565 16.001 5 16.001V12.001C5.00163 10.7697 5.32801 9.56064 5.94621 8.49578C6.5644 7.43093 7.45254 6.54797 8.521 5.93602C8.86194 6.56099 9.36493 7.08258 9.97712 7.44598C10.5893 7.80937 11.2881 8.00114 12 8.00114C12.7119 8.00114 13.4107 7.80937 14.0229 7.44598C14.6351 7.08258 15.1381 6.56099 15.479 5.93602C16.5475 6.54797 17.4356 7.43093 18.0538 8.49578C18.672 9.56064 18.9984 10.7697 19 12.001V16.001C18.2044 16.001 17.4413 16.3171 16.8787 16.8797C16.3161 17.4423 16 18.2054 16 19.001V21.001C16 21.7967 16.3161 22.5597 16.8787 23.1223C17.4413 23.6849 18.2044 24.001 19 24.001H21C21.7956 24.001 22.5587 23.6849 23.1213 23.1223C23.6839 22.5597 24 21.7967 24 21.001V19.001C24 18.2054 23.6839 17.4423 23.1213 16.8797C22.5587 16.3171 21.7956 16.001 21 16.001ZM6 19.001V21.001C6 21.2662 5.89464 21.5206 5.70711 21.7081C5.51957 21.8957 5.26522 22.001 5 22.001H3C2.73478 22.001 2.48043 21.8957 2.29289 21.7081C2.10536 21.5206 2 21.2662 2 21.001V19.001C2 18.7358 2.10536 18.4814 2.29289 18.2939C2.48043 18.1064 2.73478 18.001 3 18.001H5C5.26522 18.001 5.51957 18.1064 5.70711 18.2939C5.89464 18.4814 6 18.7358 6 19.001ZM12 6.00102C11.6044 6.00102 11.2178 5.88372 10.8889 5.66396C10.56 5.44419 10.3036 5.13184 10.1522 4.76638C10.0009 4.40093 9.96126 3.9988 10.0384 3.61084C10.1156 3.22288 10.3061 2.86651 10.5858 2.5868C10.8655 2.3071 11.2219 2.11662 11.6098 2.03945C11.9978 1.96228 12.3999 2.00188 12.7654 2.15326C13.1308 2.30463 13.4432 2.56098 13.6629 2.88988C13.8827 3.21878 14 3.60546 14 4.00102C14 4.53145 13.7893 5.04016 13.4142 5.41523C13.0391 5.7903 12.5304 6.00102 12 6.00102ZM22 21.001C22 21.2662 21.8946 21.5206 21.7071 21.7081C21.5196 21.8957 21.2652 22.001 21 22.001H19C18.7348 22.001 18.4804 21.8957 18.2929 21.7081C18.1054 21.5206 18 21.2662 18 21.001V19.001C18 18.7358 18.1054 18.4814 18.2929 18.2939C18.4804 18.1064 18.7348 18.001 19 18.001H21C21.2652 18.001 21.5196 18.1064 21.7071 18.2939C21.8946 18.4814 22 18.7358 22 19.001V21.001Z" fill="white" fill-opacity="0.5" />
                </g>
                <defs>
                  <clipPath id="clip0_101_18174">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>



              تصميمات الواجهات
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="casesproejects"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_101_18171)">
                  <path d="M19.535 3.12202L17.879 1.46402C17.4157 0.998333 16.8646 0.629159 16.2576 0.377864C15.6507 0.126569 14.9999 -0.00185599 14.343 2.02654e-05H8C6.67441 0.00160812 5.40356 0.528902 4.46622 1.46624C3.52888 2.40358 3.00159 3.67443 3 5.00002V19C3.00159 20.3256 3.52888 21.5965 4.46622 22.5338C5.40356 23.4711 6.67441 23.9984 8 24H16C17.3256 23.9984 18.5964 23.4711 19.5338 22.5338C20.4711 21.5965 20.9984 20.3256 21 19V6.65702C21.0016 6.0002 20.873 5.34959 20.6215 4.74281C20.37 4.13604 20.0007 3.58515 19.535 3.12202ZM18.121 4.53602C18.2628 4.67734 18.3898 4.83282 18.5 5.00002H16V2.50002C16.1669 2.61134 16.3227 2.7386 16.465 2.88002L18.121 4.53602ZM19 19C19 19.7957 18.6839 20.5587 18.1213 21.1213C17.5587 21.684 16.7956 22 16 22H8C7.20435 22 6.44129 21.684 5.87868 21.1213C5.31607 20.5587 5 19.7957 5 19V5.00002C5 4.20437 5.31607 3.44131 5.87868 2.8787C6.44129 2.31609 7.20435 2.00002 8 2.00002H14V5.00002C14 5.53045 14.2107 6.03916 14.5858 6.41423C14.9609 6.78931 15.4696 7.00002 16 7.00002H19V19ZM16 9.00002C16.2652 9.00002 16.5196 9.10538 16.7071 9.29291C16.8946 9.48045 17 9.73481 17 10C17 10.2652 16.8946 10.5196 16.7071 10.7071C16.5196 10.8947 16.2652 11 16 11H8C7.73478 11 7.48043 10.8947 7.29289 10.7071C7.10536 10.5196 7 10.2652 7 10C7 9.73481 7.10536 9.48045 7.29289 9.29291C7.48043 9.10538 7.73478 9.00002 8 9.00002H16ZM17 14C17 14.2652 16.8946 14.5196 16.7071 14.7071C16.5196 14.8947 16.2652 15 16 15H8C7.73478 15 7.48043 14.8947 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14C7 13.7348 7.10536 13.4805 7.29289 13.2929C7.48043 13.1054 7.73478 13 8 13H16C16.2652 13 16.5196 13.1054 16.7071 13.2929C16.8946 13.4805 17 13.7348 17 14ZM16.808 17.413C16.9634 17.6269 17.0279 17.8936 16.9872 18.1548C16.9466 18.416 16.8041 18.6505 16.591 18.807C15.5778 19.529 14.3778 19.9432 13.135 20C12.4089 19.9965 11.7048 19.7501 11.135 19.3C10.807 19.075 10.682 19 10.435 19C9.76643 19.1035 9.13562 19.3769 8.603 19.794C8.39175 19.9446 8.13024 20.0072 7.87369 19.9686C7.61715 19.93 7.38565 19.7932 7.22808 19.5871C7.07052 19.381 6.99922 19.1217 7.02925 18.864C7.05927 18.6063 7.18827 18.3704 7.389 18.206C8.27018 17.522 9.32828 17.1036 10.439 17C11.1051 17.0107 11.7491 17.2409 12.271 17.655C12.5089 17.869 12.8152 17.9913 13.135 18C13.9527 17.9388 14.739 17.6594 15.412 17.191C15.6266 17.0355 15.8942 16.9715 16.1559 17.0131C16.4177 17.0547 16.6522 17.1986 16.808 17.413Z" fill="white" fill-opacity="0.5" />
                </g>
                <defs>
                  <clipPath id="clip0_101_18171">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>


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
            <svg className="svgcardmostfa" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_101_18177)">
                <path d="M21.1549 3.272L18.8709 0.913C18.5904 0.624966 18.2552 0.39584 17.885 0.239061C17.5147 0.0822824 17.1169 0.00100643 16.7149 0L11.9999 0C10.8477 0.00145452 9.7312 0.40009 8.83863 1.12872C7.94606 1.85735 7.33197 2.87141 7.09988 4H6.99988C5.67428 4.00159 4.40344 4.52888 3.4661 5.46622C2.52876 6.40356 2.00147 7.67441 1.99988 9V19C2.00147 20.3256 2.52876 21.5964 3.4661 22.5338C4.40344 23.4711 5.67428 23.9984 6.99988 24H12.9999C14.3255 23.9984 15.5963 23.4711 16.5337 22.5338C17.471 21.5964 17.9983 20.3256 17.9999 19V18.9C19.1285 18.6679 20.1425 18.0538 20.8712 17.1613C21.5998 16.2687 21.9984 15.1522 21.9999 14V5.36C22.0014 4.58042 21.6981 3.83112 21.1549 3.272ZM12.9999 22H6.99988C6.20423 22 5.44117 21.6839 4.87856 21.1213C4.31595 20.5587 3.99988 19.7956 3.99988 19V9C3.99988 8.20435 4.31595 7.44129 4.87856 6.87868C5.44117 6.31607 6.20423 6 6.99988 6V14C7.00147 15.3256 7.52876 16.5964 8.4661 17.5338C9.40344 18.4711 10.6743 18.9984 11.9999 19H15.9999C15.9999 19.7956 15.6838 20.5587 15.1212 21.1213C14.5586 21.6839 13.7955 22 12.9999 22ZM16.9999 17H11.9999C11.2042 17 10.4412 16.6839 9.87856 16.1213C9.31595 15.5587 8.99988 14.7956 8.99988 14V5C8.99988 4.20435 9.31595 3.44129 9.87856 2.87868C10.4412 2.31607 11.2042 2 11.9999 2H15.9999V4C15.9999 4.53043 16.2106 5.03914 16.5857 5.41421C16.9607 5.78929 17.4694 6 17.9999 6H19.9999V14C19.9999 14.7956 19.6838 15.5587 19.1212 16.1213C18.5586 16.6839 17.7955 17 16.9999 17Z" fill="white" fill-opacity="0.5" />
              </g>
              <defs>
                <clipPath id="clip0_101_18177">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>

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
