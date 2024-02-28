import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Hidden, Show, TrashDelete } from '../../../UI/Icons';
import Api, { handleApiError } from '../../../config/api';
import { notifySuccess } from '../../../config/toastify';
import { useDispatch } from 'react-redux';
import { fetchContent } from '../../../redux/slices/content.slice';
// import Modal from '../../../UI/poppup/Modal';
// import Overlay from '../../../UI/poppup/Overlay';

const SingleProject = ({ image, name, date, type, likes, price, setShowModal, setId, _id, visible ,description}) => {

  const [visibleProject, setvisibleProject] = useState(visible);
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL
  const dispatch = useDispatch()

  function toggleVisible() {
    Api.patch("/content/" + _id, { visible: !visible })
      .then(() => {
        console.log(visible);
        notifySuccess("Ui is now " + (visible ? "not visisble" : "visiable"))
        dispatch(fetchContent())
      })
      .catch((error) => handleApiError(error))
  }



  return (
    <>
      <tr>
        <td className='flex' style={{ columnGap: '12px' }}>
          <img
            src={apiUrl + image || 'data:image/jpeg;base64,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'} alt='Project Image' style={{ borderRadius: '8px', width: '68px', height: '68px', cursor: 'pointer' }}
            onClick={() => navigate(_id)} />
          {name}
        </td>
        <td style={{ maxWidth: '200px' }}>
          {description?.length > 50 ? `${description?.slice(0, 50)}...` : description}
        </td>
        <td>{date}</td>
        {type === 'forsale' && <td>{price}$</td>}
        <td>{likes}</td>
        <td>
          <div className='flex' style={{ gap: '12px' }}>
            <button onClick={toggleVisible}>
              {visible ? <Show /> : <Hidden />}
            </button>
            <button
              className='trash_bnt'
              onClick={() => {
                setShowModal(true)
                setId(_id)
              }}
            >
              <TrashDelete />
            </button>
          </div>
        </td>
      </tr>
      {/* <Overlay setState={setShowModal} state={showModal} />
      <Modal setState={setShowModal} state={showModal}>
        <div className="admin_modal">
          <h3>حذف التصميم</h3>
          <p>هل أنت متأكد من هذا حذف التصميم؟</p>
          <div className="btns flex">
            <button onClick={() => setShowModal(false)}>إلغاء</button>
            <button 
              className='cancel_btn' 
              onClick={() => deletefun(id)}
            >
              حذف التصميم
            </button>
          </div>
        </div>
      </Modal> */}
    </>

  )
}

export default SingleProject