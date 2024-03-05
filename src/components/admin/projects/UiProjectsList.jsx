import React from 'react'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Modal from '../../../UI/poppup/Modal';
import Overlay from '../../../UI/poppup/Overlay';
import Table from '../../../UI/table/Table'
import SingleProject from './SingleProject'
import DateSelector from './DateSelector';
import TableFilteradmin from '../tables/TableFilteradmin';
import AdminNavbar from '../../../layout/admin/AdminNavbar';
import Api, { handleApiError } from '../../../config/api';
import { notifySuccess } from '../../../config/toastify';
import { useDispatch } from 'react-redux';
import { fetchContent } from '../../../redux/slices/content.slice';
import { Button } from 'react-bootstrap';

const UiProjectsList = ({ type, projects, designType }) => {

  const headers = type === 'forsale' ? ['أسم التصميم', 'الوصف', 'التاريخ', 'السعر', 'عدد الاعجابات', 'القرار'] : ['أسم التصميم', 'الوصف', 'التاريخ', 'عدد الاعجابات', 'القرار'];

  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(null);
  const dispatch = useDispatch()
  const naviagate = useNavigate()

  function deleteProject() {
    Api.delete("/content/" + id)
      .then(() => {
        dispatch(fetchContent())
        notifySuccess("UI Deleted !!")
      })
      .catch((error) => handleApiError(error))
  }
  return (
    <>
      {/* <DateSelector/> */}
      <button onClick={() => naviagate("/admin/uiprojects/add/" + designType)} style={{ backgroundColor: "#331c48", color: "#fff", borderRadius: "16px", padding: "8px" }}>اضافة عمل</button>
      <Table tableHead={headers}>
        {projects.map(
          project =>
            <SingleProject
              type={type}
              setShowModal={setShowModal}
              setId={setId}
              key={project.id}
              {...project}
            />
        )}
      </Table>
      <Overlay setState={setShowModal} state={showModal} />
      <Modal setState={setShowModal} state={showModal}>
        <div className="admin_modal">
          <h3>حذف التصميم</h3>
          <p>هل أنت متأكد من هذا حذف التصميم؟</p>
          <div className="btns flex">
            <button onClick={() => setShowModal(false)}>إلغاء</button>
            <button
              className='cancel_btn'
              onClick={() => {
                deleteProject(id)
                setShowModal(false)
              }}
            >
              حذف التصميم
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default UiProjectsList