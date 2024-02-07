import React from 'react';
import { NavLink } from 'react-router-dom';
import FeedbacksTable from './tables/FeedbacksTable';
import AdminCards from '../../UI/Cards/AdminCards';


const Feedbacks = ({ feedbacks }) => {


  return (
    <AdminCards>
      <div className=' oreder_container_header flex'>
        <h3 className='title'>أراء الناس</h3>
        <NavLink to='allfeedbacks'>عرض الكل</NavLink>
      </div>
      <FeedbacksTable currentData={feedbacks}/>
    </AdminCards>
  )
}

export default Feedbacks