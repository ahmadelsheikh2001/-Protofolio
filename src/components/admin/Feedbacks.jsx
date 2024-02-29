import { NavLink } from 'react-router-dom';
import FeedbacksTable from './tables/FeedbacksTable';
import AdminCards from '../../UI/Cards/AdminCards';
import AppContext from '../../store/app-context';
import React, { useContext } from 'react';


const Feedbacks = ({ feedbacks }) => {
  
  const ctx = useContext(AppContext);

  const themeClass = ctx.theme === 'dark' ? 'dark-mode' : '';
  return (
    <AdminCards  >
      <div className={`order-card ${themeClass} oreder_container_header flex`}>

        <h3 className='order-title '>أراء الناس</h3>
        <NavLink to='allfeedbacks'>عرض الكل</NavLink>
      </div>
      <FeedbacksTable currentData={feedbacks}/>
    </AdminCards>
  )
}

export default Feedbacks