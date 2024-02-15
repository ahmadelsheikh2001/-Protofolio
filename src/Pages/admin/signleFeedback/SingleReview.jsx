import React,  { useContext } from 'react';
import { useEffect } from 'react';
import AdminCards from '../../../UI/Cards/AdminCards';
import {  MessageIcon, PaperIcon, UserNameIcon } from '../../../UI/Icons';
import ReviewFooter from './ReviewFooter';
import AdminContext from '../../../store/admin-ctx';



const SingleReview = ({ id, img, reactions, name, job, review, status, onApproveReview, onRefuseReview }) => {

  const ctx = useContext(AdminContext);

  useEffect(() => {
    ctx.setTitle(name);

  }, []);

  return (
    <>
    <AdminCards>
      <div className='data'>
        <img src={img || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVuigXD45DkkFU3159RAK53IMriiLLGUjNeFbqzPY&s'} alt='profileImage'/>
        <div className='flex'>
          <span className='row_num'>1</span>
          <p className='question'>رأيك عني بكل صراحة ؟</p>
        </div>
        <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
          {reactions.map(react => <p key={react} className='answer border_card'>{react.iimg}<img src={react.icon}/></p>)}
        </div>
      </div>
    </AdminCards>
    <AdminCards>
      <div className='data'>
        <div className='flex'>
          <span className='row_num'>2</span>
          <p className='question'>ما هو أسمك ؟</p>
        </div>
        <p className='answer'>
          <UserNameIcon/>
          {name}
          </p>
      </div>
      <div className='data'>
        <div className='flex'>
          <span className='row_num'>3</span>
          <p className='question'>ما هو المسمي الوظيفي؟</p>
        </div>
        <p className='answer'>
          <MessageIcon/>
          {job}
          </p>
      </div>
      <div className='data'>
        <div className='flex'>
          <span className='row_num'>4</span>
          <p className='question'>تعليقك عني</p>
        </div>
        <p className='answer about_p'>
          <PaperIcon/>
          {review}
        </p>
      </div>
    </AdminCards> 
    <ReviewFooter onRefuseReview={onRefuseReview} onApproveReview={onApproveReview} status={status}/>
    </>
  )
}

export default SingleReview