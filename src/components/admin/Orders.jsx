import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import AdminCards from '../../UI/Cards/AdminCards';
import OrederTable from './tables/OrederTable';
import AppContext from '../../store/app-context';
import './order.css';


const Orders = ({ orders }) => {
  const ctx = useContext(AppContext);

  const themeClass = ctx.theme === 'dark' ? 'dark-mode' : '';

  return (
    <AdminCards >
      <div className={`order-card ${themeClass} oreder_container_header flex`}>
        <h3 className=' order-title'>طلبات العملاء</h3>
        <NavLink to='requests'>عرض الكل</NavLink>
      </div>
      <OrederTable currentData={orders}/>
    </AdminCards>
  );
};

export default Orders