import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from '../../../UI/poppup/Modal';
import Overlay from '../../../UI/poppup/Overlay';
import Table from '../../../UI/table/Table'
import SingleProject from './SingleProject'

const UiProjectsList = ({ type, setProjects, projects }) => {

  const headers = type === 'forsale' ? ['أسم التصميم', 'الوصف', 'التاريخ', 'السعر', 'عدد الاعجابات', 'القرار'] : ['أسم التصميم', 'الوصف', 'التاريخ', 'عدد الاعجابات', 'القرار'];

  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(null);

  const deleteProject = (id) => {
    setProjects(prevSt => prevSt.filter(project => project.id !== id));
  };

  return (
    <>
      <NavLink className='add_project_btn' to='add'>+إنشاء مشروع جديد</NavLink>
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