import React, { useEffect } from "react";
import AdminProvider from "../../store/AdminProvider";
import AdminContent from "./AdminContent";
import Sidebar from "./Sidebar";

import "./dashLayout.css";
import { useSelector } from "react-redux";
import Login from "../../Pages/admin/login/Login";
import { Navigate, Outlet } from "react-router-dom";
import AppProvider from "../../store/AppProvider";

const AdminLayout = () => {
  const authUser = useSelector((state) => state.user.logedin);
  useEffect(() => {
    document.dir = "rtl";
    document.getElementsByTagName("html")[0].setAttribute("lang", "ar");
  }, []);

  return (
    <>
      {authUser ? <AdminProvider>
        <div className='admin_layout'>
          <Sidebar />
          <AdminContent />
        </div>
      </AdminProvider> :
        <Outlet />
      }
    </>)
}

export default AdminLayout;
