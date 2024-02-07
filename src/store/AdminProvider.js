import React, { useState } from 'react';
import AdminContext from './admin-ctx';

const AdminProvider = ({ children }) => {

  const [title, setTitle] = useState('لوحة التحكم')


  const value = {
    title,
    setTitle
  }

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  )
}

export default AdminProvider