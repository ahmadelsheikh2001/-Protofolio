import React, { useContext } from 'react';
import { useEffect } from 'react';
import AdminCards from '../../../UI/Cards/AdminCards';
import { MessageIcon, PaperIcon, UserNameIcon } from '../../../UI/Icons';
import ReviewFooter from './ReviewFooter';
import AdminContext from '../../../store/admin-ctx';
import Api, { handleApiError } from '../../../config/api';
import { feedBackData } from '../../../redux/slices/feedback.slice';
import { notifySuccess } from '../../../config/toastify';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';



const SingleReview = ({ _id, image, name, job, review, status, onApproveReview, onRefuseReview, message }) => {
 
  const { t, i18n } = useTranslation();
  const ctx = useContext(AdminContext);
  useEffect(() => {
    ctx.setTitle(name);
  }, []);

  const reactions = [
    {
      id: 'happy',
      text: `${t("Happy")}`,
      dataType: 'happy',
      icon: './assets/Helper.gif'
    },
    {
      id: 'serious',
      text: `${t("Serious")}`,
      dataType: 'serious',
      icon: './assets/Helper.gif'
    },
    {
      id: 'diligent',
      text: `${t("Diligent")}`,
      dataType: 'diligent',
      icon: './assets/Diligent.gif'
    },
    {
      id: 'friendly',
      text: `${t("Friendly")}`,
      dataType: 'diligent',
      icon: './assets/Friendly.gif'
    },
    {
      id: 'intelligent',
      text: `${t("Intelligent")}`,
      dataType: 'diligent',
      icon: './assets/Intelligent.gif'
    },
    {
      id: 'notgood',
      text: `${t("Not_good")}`,
      dataType: 'diligent',
      icon: './assets/Not-good.gif'
    },
  ];

  const dispatch = useDispatch()
  function updateFeedback(id, status) {
    Api.patch("/feedback/" + id, { status })
      .then(() => {
        notifySuccess("FeedBack is " + status)
        dispatch(feedBackData())
      })
      .catch((error) => handleApiError(error))
  }


  const apiUrl = process.env.REACT_APP_API_URL
  return (
    <>
      <AdminCards>
        <div className='data'>
          <img src={image ?apiUrl + image  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVuigXD45DkkFU3159RAK53IMriiLLGUjNeFbqzPY&s'} alt='profileImage' />
          <div className='flex'>
            <span className='row_num'>1</span>
            <p className='question'>رأيك عني بكل صراحة ؟</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {/* {reactions.map(react => <p key={react} className='answer border_card'>{react.iimg}<img src={react.icon}/></p>)} */}
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
            <UserNameIcon />
            {name}
          </p>
        </div>
        <div className='data'>
          <div className='flex'>
            <span className='row_num'>3</span>
            <p className='question'>ما هو المسمي الوظيفي؟</p>
          </div>
          <p className='answer'>
            <MessageIcon />
            {job}
          </p>
        </div>
        <div className='data'>
          <div className='flex'>
            <span className='row_num'>4</span>
            <p className='question'>تعليقك عني</p>
          </div>
          <p className='answer about_p'>
            <PaperIcon />
            {message}
          </p>
        </div>
      </AdminCards>
      <ReviewFooter onRefuseReview={onRefuseReview} onApproveReview={onApproveReview} status={status} />
    </>
  )
}

export default SingleReview