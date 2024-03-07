import React, { useContext, useEffect, useRef, useState } from "react";
// import { useContext } from "react";
// import AdminContext from "../../store/admin-ctx";
import { AlarmIcon, DesignLanguageIcon, SearchIcon } from "../../UI/Icons";
import AppContext from "../../store/app-context";
import AdminContext from "../../store/admin-ctx";
// import { TitleContext } from "../context/Title";
import { useTitle } from '../../components/admin/companies/TitleContext';
import NavbarControl from "../visitor/MainLayout/header/NavbarControl";

import socket from "../../config/socket"
import { useDispatch, useSelector } from "react-redux"
import { fetchNotification } from "../../redux/slices/notitifaction.slice";
import SearchResult from "./SearchResult";
import NotificationBox from "./NotificationBox";

// import '../visitor/MainLayout/header/Navbar.css'
const AdminNavbar = () => {
  // const title = useContext(AdminContext).title;
  // const { title } = useTitle();
  const [showInput, setShowInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const allNotification = useSelector((state) => state.notification.data);
  const { title } = useContext(AdminContext);

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = ['Result 1', 'Result 2', 'Result 3'].filter((result) =>
      result.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setShowInput(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const seenNotitifcation = () => {
    socket.emit("seen");
    dispatch(fetchNotification());
  };

  useEffect(() => {
    socket.on("new", (data) => {
      console.log("New notification !!", data);
    });

    dispatch(fetchNotification());

    return () => {
      socket.off("new");
    };
  }, []);

  const icons = {
    notification: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_101_18156)">
          <path
            d="M22.5549 13.6617L20.6549 6.82569C20.098 4.82302 18.8877 3.06398 17.2163 1.82816C15.5449 0.592343 13.5083 -0.0493232 11.4304 0.00515695C9.35244 0.0596371 7.35233 0.807137 5.74798 2.12884C4.14364 3.45054 3.02713 5.27059 2.57592 7.29969L1.10492 13.9147C0.942436 14.6456 0.946193 15.4037 1.11591 16.133C1.28563 16.8623 1.61699 17.5442 2.0855 18.1282C2.55402 18.7123 3.14774 19.1837 3.82283 19.5076C4.49792 19.8316 5.23714 19.9997 5.98592 19.9997H7.09992C7.32944 21.13 7.94265 22.1462 8.83566 22.8761C9.72867 23.606 10.8466 24.0047 11.9999 24.0047C13.1533 24.0047 14.2712 23.606 15.1642 22.8761C16.0572 22.1462 16.6704 21.13 16.8999 19.9997H17.7379C18.5087 19.9997 19.2691 19.8216 19.9597 19.4791C20.6502 19.1367 21.2523 18.6392 21.7187 18.0256C22.1852 17.4119 22.5035 16.6987 22.6487 15.9417C22.794 15.1847 22.7622 14.4044 22.5559 13.6617H22.5549ZM11.9999 21.9997C11.3817 21.9971 10.7793 21.8036 10.2752 21.4456C9.77115 21.0876 9.39 20.5826 9.18392 19.9997H14.8159C14.6098 20.5826 14.2287 21.0876 13.7246 21.4456C13.2206 21.8036 12.6182 21.9971 11.9999 21.9997ZM20.1259 16.8147C19.8473 17.1844 19.4862 17.4839 19.0715 17.6897C18.6568 17.8954 18.1998 18.0015 17.7369 17.9997H5.98592C5.53671 17.9996 5.09324 17.8987 4.68826 17.7043C4.28328 17.5099 3.92713 17.227 3.64608 16.8766C3.36504 16.5261 3.16628 16.1171 3.06448 15.6795C2.96268 15.242 2.96044 14.7872 3.05792 14.3487L4.52792 7.73269C4.88227 6.1389 5.75923 4.70929 7.01938 3.67114C8.27953 2.63298 9.85054 2.04586 11.4827 2.0031C13.1148 1.96035 14.7144 2.46441 16.0272 3.43516C17.34 4.40591 18.2906 5.78764 18.7279 7.36069L20.6279 14.1967C20.7535 14.6421 20.7735 15.1106 20.6863 15.565C20.5992 16.0195 20.4073 16.4473 20.1259 16.8147Z"
            fill="#331C48"
          />
        </g>
        <defs>
          <clipPath id="clip0_101_18156">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    dark: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#27536B"
        />
        <path
          d="M18.3585 13.7347C17.7611 14.3319 17.0405 14.7917 16.2472 15.0819C15.4538 15.3721 14.6067 15.4858 13.7649 15.415C12.9231 15.3443 12.1069 15.0908 11.3731 14.6723C10.6393 14.2538 10.0056 13.6802 9.51622 12.9917C9.02681 12.3031 8.69344 11.5161 8.53937 10.6855C8.3853 9.85493 8.41422 9.00073 8.62412 8.18246C8.83402 7.36419 9.21984 6.60154 9.75471 5.94766C10.2896 5.29379 10.9606 4.76443 11.721 4.39648C10.2434 4.43602 8.80982 4.9078 7.59752 5.75348C6.38522 6.59915 5.44739 7.78163 4.90001 9.15467C4.35264 10.5277 4.21974 12.0311 4.51774 13.4788C4.81575 14.9266 5.53158 16.2553 6.57672 17.3005C7.62187 18.3458 8.95046 19.0617 10.3982 19.3599C11.8459 19.658 13.3493 19.5253 14.7224 18.978C16.0955 18.4308 17.2781 17.4931 18.1239 16.2809C18.9697 15.0686 19.4416 13.6351 19.4813 12.1575C19.1981 12.7424 18.8185 13.2756 18.3585 13.7347Z"
          fill="#FCD57E"
        />
        <path
          d="M16.6905 7.20289L16.9583 9.62539L17.226 7.20289L19.6485 6.93514L17.226 6.66739L16.9605 4.24414L16.6928 6.66664L14.2695 6.93439L16.6905 7.20289Z"
          fill="white"
        />
        <path
          d="M5.27023 19.2601L5.46223 20.9956L5.65423 19.2601L7.38973 19.0681L5.65423 18.8761L5.46223 17.1406L5.27023 18.8761L3.53473 19.0681L5.27023 19.2601Z"
          fill="white"
        />
        <path
          d="M11.6507 11.5411L11.307 11.8848L11.6507 12.2284L11.9943 11.8848L11.6507 11.5411Z"
          fill="white"
        />
        <path
          d="M19.8947 8.96885L19.551 9.3125L19.8947 9.65615L20.2383 9.3125L19.8947 8.96885Z"
          fill="white"
        />
        <path
          d="M21.3526 13.2403L21.009 13.584L21.3526 13.9276L21.6963 13.584L21.3526 13.2403Z"
          fill="white"
        />
        <path
          d="M3.81088 5.74033L3.46722 6.08398L3.81088 6.42764L4.15453 6.08398L3.81088 5.74033Z"
          fill="white"
        />
        <path
          d="M16.4882 19.6681L16.1445 20.0117L16.4882 20.3554L16.8318 20.0117L16.4882 19.6681Z"
          fill="white"
        />
        <path
          d="M5.75863 4.49033L5.41498 4.83398L5.75863 5.17764L6.10229 4.83398L5.75863 4.49033Z"
          fill="white"
        />
      </svg>
    ),
    language: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.026 6.9908e-06C9.24618 -0.00299067 6.55137 0.958143 4.40088 2.71958C2.2504 4.48103 0.777333 6.93375 0.232778 9.65968C-0.311777 12.3856 0.105881 15.2161 1.41456 17.6685C2.72325 20.121 4.84195 22.0437 7.40955 23.109C9.97714 24.1742 12.8347 24.316 15.4952 23.5103C18.1556 22.7045 20.4543 21.001 21.9994 18.6902C23.5445 16.3793 24.2403 13.6042 23.9684 10.8377C23.6964 8.07126 22.4735 5.48473 20.508 3.51901C18.259 1.2678 15.208 0.00201249 12.026 6.9908e-06ZM20.673 7.00001H17.452C16.7294 5.32869 15.7783 3.76578 14.626 2.35601C17.1743 3.04776 19.3471 4.71644 20.673 7.00001ZM16.526 12C16.5178 13.0181 16.3574 14.0293 16.05 15H8.00197C7.69462 14.0293 7.53418 13.0181 7.52597 12C7.53418 10.9819 7.69462 9.97068 8.00197 9.00001H16.05C16.3574 9.97068 16.5178 10.9819 16.526 12ZM8.80397 17H15.248C14.3992 18.6757 13.3141 20.2208 12.026 21.588C10.7374 20.2212 9.65224 18.676 8.80397 17ZM8.80397 7.00001C9.65275 5.32429 10.7378 3.77917 12.026 2.41201C13.3146 3.77878 14.3997 5.32396 15.248 7.00001H8.80397ZM9.42597 2.35601C8.27363 3.76579 7.32256 5.3287 6.59997 7.00001H3.37897C4.70483 4.71644 6.87763 3.04776 9.42597 2.35601ZM2.48697 9.00001H5.92597C5.66672 9.97915 5.53232 10.9871 5.52597 12C5.53232 13.0129 5.66672 14.0209 5.92597 15H2.48697C1.87231 13.0472 1.87231 10.9528 2.48697 9.00001ZM3.37897 17H6.59997C7.32256 18.6713 8.27363 20.2342 9.42597 21.644C6.87763 20.9523 4.70483 19.2836 3.37897 17ZM14.626 21.644C15.7783 20.2342 16.7294 18.6713 17.452 17H20.673C19.3471 19.2836 17.1743 20.9523 14.626 21.644ZM21.565 15H18.126C18.3852 14.0209 18.5196 13.0129 18.526 12C18.5196 10.9871 18.3852 9.97916 18.126 9.00001H21.563C22.1777 10.9528 22.1777 13.0472 21.563 15H21.565Z"
          fill="black"
        />
      </svg>
    ),
  };


  return (
    <div className="admin_navbar content">

      <h2>{title}</h2>
      <div className="icons">
        <div className="icon_box" onClick={toggleInput}>
          <SearchIcon />
        </div>
        {showInput && (
          <div className="spar" ref={inputRef}>
            <input
              type="text"
              placeholder="Search..."
              className="search_input"
              value={searchTerm}
              onChange={handleInputChange}
            />
            {searchResults.length > 0 && (
              <div className="search_results">
                {searchResults.map((result, index) => (
                  <SearchResult key={index} result={result} />
                ))}
              </div>
            )}
          </div>
        )}
        {/* <div className="icon_box" style={{cursor:"pointer"}} onClick={seenNotitifcation}>{icons.notification}</div> */}
        <NotificationBox />
        <NavbarControl />
      </div>
    </div>
  );
};

export default AdminNavbar;
