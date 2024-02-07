import React, { useEffect, useState } from 'react'
// import Backdrop from '../../../UI/Backdrop/Backdrop'
// import Modale from '../../../UI/Backdrop/Modale'
import { CloseBtn } from '../../../UI/Icons'
import Modal from '../../../UI/poppup/Modal';
import Overlay from '../../../UI/poppup/Overlay';
import SingleCompany from './SingleCompany'

const Compaines = ({curretnCompany, type, resource, certification}) => {

  const [companies, setCompanies] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedComapny, setSelectedCompany] = useState({});

  const x = certification === 'certification' ? 'تعليم جديدة ' :
   certification === 'prog' ? 'برنامج جديد ' : 
   certification === 'lang' ? 'لغة جديدة' : 
   certification === 'certificate' ? 'شهادة جديدة' : 'خبرة جديدة'

  useEffect(() => {
    setCompanies(curretnCompany);
  }, [curretnCompany]);


  // Open Poup  : =

  const openPopupHandler = comp => {
    setShowDetails(true);
    setSelectedCompany(comp);
  }

  // ChangeValue Handler : =

  const changeValueHandler = (key, value) => {
    setSelectedCompany({
      ...selectedComapny,
      data: {
        ...selectedComapny.data,
        [key]: value
      }
    });
  }

  // Save Change Data : = 

  const submitFormHandler = e => {
    e.preventDefault();
    const filteredCompanies = companies.filter(comp => comp.id !== selectedComapny.id)
    setCompanies(filteredCompanies.concat(selectedComapny));
    setShowDetails(false);
    console.log(companies);
    console.log(selectedComapny);

  }

  // Add  NEw Company

  const addNewCompanyHandler = () => {
    setShowDetails(true);
    setSelectedCompany({
      id: Math.random(),
      data: {}
    });

  };


  // Delete Company : = 

  const deleteCompanyHandler = () => {
    setCompanies(companies.filter(comp => comp.id !== selectedComapny.id));
    setShowDetails(false)
  }


  return (
    <>
    {!companies ? <h1>Loading</h1> :companies.map(company => 
      <img 
        className='comp_Logo' 
        onClick={() => openPopupHandler(company)} 
        key={company.id} 
        src={company.data.logo} 
        alt={company.data.enName}
      />
    )}
    
    <Overlay state={showDetails} setState={setShowDetails} />
    <Modal state={showDetails} setState={setShowDetails}>
      <form onSubmit={submitFormHandler}>

        <div className='add_new_Project' style={{display: 'flex', justifyContent: 'space-between'}}>
          <SingleCompany resource={resource} type={type} changeHandler={changeValueHandler} data={selectedComapny.data}/>
        </div>

        <div className='form_btn' style={{justifyContent: 'flex-end', columnGap: '20px', marginTop: '20px'}}>
          <button className='calncel_btn' type='button' onClick={deleteCompanyHandler}>Delete</button>
          <button type='submit'>Save</button>
        </div>

      </form>

    </Modal>
    <button className='AddNewComp' onClick={addNewCompanyHandler}>{type == 'about_page' ? '+ إضافة خبرة جديدة' : `+ إضافة ${x}`}</button>
    </>
  )
}

export default Compaines