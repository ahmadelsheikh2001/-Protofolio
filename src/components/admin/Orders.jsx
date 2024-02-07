import React from 'react'
import { NavLink } from "react-router-dom";
import AdminCards from '../../UI/Cards/AdminCards';
import OrederTable from './tables/OrederTable';


const Orders = ({ orders }) => {

  return (
    <AdminCards>
      <div className=' oreder_container_header flex'>
        <h3 className='title'>طلبات العملاء</h3>
        <NavLink to='requests'>عرض الكل</NavLink>
      </div>
      <OrederTable currentData={orders}/>
    </AdminCards>
  );
};

export default Orders