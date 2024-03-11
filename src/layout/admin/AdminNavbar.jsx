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
import { feedBackData } from "../../redux/slices/feedback.slice";
import { fetchContent } from "../../redux/slices/content.slice";
import { getorderData } from "../../redux/slices/order.slice";

// import '../visitor/MainLayout/header/Navbar.css'
const AdminNavbar = () => {
  // const title = useContext(AdminContext).title;
  // const { title } = useTitle();
  const [showInput, setShowInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);

  const { title } = useContext(AdminContext);

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };



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

  const [searchData, setSearchData] = useState([])
  const dispatch = useDispatch()
  const orders = useSelector((state) => state.order.data)
  const feedbacks = useSelector((state) => state.feedback.data)
  const content = useSelector((state) => state.content.data)

  useEffect(() => {
    dispatch(fetchContent())
    dispatch(feedBackData())
    dispatch(getorderData())
  }, [])


  const orderdata = orders.map((ele) => ({
    title: ele.name,
    route: "/admin/requests/" + ele._id,
    type:"طلبات عمل"
  }));

  const feedbackdata = feedbacks.map((ele) => ({
    title: ele.name,
    route: "/admin/allfeedbacks/" + ele._id,
    type:"اراء الناس"
  }));
  const contentdata = content.map((ele) => ({
    title: ele.name,
    route: ele.type === "case" ? "/admin/casesproejects/" + ele._id : "/admin/uiProjects/" + ele._id,
    type:ele.type === "case" ?"دراسة حالة" :"تصميم وجهات"
  }));
  const allData = [...orderdata, ...feedbackdata, ...contentdata]
  const [filterdData,setfFilterdData] =useState([])
  useEffect(() => {
    if(searchTerm){
      let temp = allData.filter((ele) => ele?.title?.toLowerCase()?.includes(searchTerm.toLowerCase()))
      setfFilterdData(temp);
    }else{
      setfFilterdData([])
    }
  }, [searchTerm]);

  console.log(filterdData);
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
            {filterdData.length >0 && (
              <div className="search_results">
                {filterdData?.slice(0,10).map((result, index) => (
                  <SearchResult key={index} result={result} toggleInput={toggleInput}/>
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
