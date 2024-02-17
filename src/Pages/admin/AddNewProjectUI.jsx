import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import AdminContext from '../../store/admin-ctx';
import NewUiProjects from './new/NewUiProjects';


const AddNewProjectUI = ({ type }) => {

  const {setTitle}= useContext(AdminContext);
  const [data, setData] = useState({});
  
  useEffect(() => {
    type === 'ui' ?setTitle('إنشاء تصميم واجهات جديد') :
    setTitle('إنشاء دراسة حالة جديدة')
  }, [data])

  return (
    <NewUiProjects type='uiProjects'data={data} />
  )
}

export default AddNewProjectUI