import React, { useState } from 'react'
import SecLayout from '../../../layout/secLayout/SecLayout'
import NewProjectContent from './newProjectComponents/NewProjectContent'
import NewProjectSidebar from './newProjectComponents/NewProjectSidebar'

import './newProject.css';


const NewProject = () => {

  const [active, setActive] = useState(0);


  return (
    <SecLayout 
      content={<NewProjectContent onCurrentForm={setActive} onActivce={active} />} 
      sidebar={<NewProjectSidebar onCurrentForm={setActive} onActivce={active} />}
    />
  )
}

export default NewProject