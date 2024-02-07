import React, { useEffect } from 'react'
import AdminProvider from '../../store/AdminProvider';
import AdminContent from './AdminContent';
import Sidebar from './Sidebar';

import './dashLayout.css';


const AdminLayout = () => {

  useEffect(() => {
    document.dir = 'rtl';
    document.getElementsByTagName('html')[0].setAttribute("lang", "ar");
  }, [])


  return (
    <AdminProvider>
      <div className='admin_layout'>
        <Sidebar />
        <AdminContent />
      </div>
    </AdminProvider>
  )
}

export default AdminLayout