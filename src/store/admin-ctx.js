import React from "react";


const AdminContext = React.createContext({
  title: 'لوحة التحكم',
  setTitle: () => {}
});

export default AdminContext;