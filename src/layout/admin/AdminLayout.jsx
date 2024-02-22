import React, { useEffect } from 'react'
import AdminProvider from '../../store/AdminProvider';
import AdminContent from './AdminContent';
import Sidebar from './Sidebar';

import './dashLayout.css';
import { useSelector, useDispatch } from 'react-redux';
import Login from '../../Pages/admin/login/Login';
import { getUserData } from '../../redux/slices/user.slice';

const AdminLayout = () => {
  const dispatch = useDispatch()
  const authUser = useSelector((state) => state.user.logedin)
  useEffect(() => {
    document.dir = 'rtl';
    document.getElementsByTagName('html')[0].setAttribute("lang", "ar");
    dispatch(getUserData())
  }, [])

  return (
    <>
      {authUser ? <AdminProvider>
        <div className='admin_layout'>
          <Sidebar />
          <AdminContent />
        </div>
      </AdminProvider> :
        <Login />
      }
    </>)
}

export default AdminLayout