import React, { useEffect, useState } from 'react'
// import Backdrop from '../../../UI/Backdrop/Backdrop'
// import Modale from '../../../UI/Backdrop/Modale'
import { CloseBtn } from '../../../UI/Icons'
import Modal from '../../../UI/poppup/Modal';
import Overlay from '../../../UI/poppup/Overlay';
import SingleCompany from './SingleCompany'
import Api, { handleApiError } from '../../../config/api';
import { notifySuccess } from '../../../config/toastify';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExperience } from '../../../redux/slices/experience.slice';

const Compaines = ({ curretnCompany, type, resource, certification }) => {

  const [companies, setCompanies] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedComapny, setSelectedCompany] = useState({});
  const [update, setUpdate] = useState(false)

  const x = certification === 'education' ? 'تعليم جديدة ' :
    certification === 'program' ? 'برنامج جديد ' :
      certification === 'language' ? 'لغة جديدة' :
        certification === 'certificate' ? 'شهادة جديدة' : 
        certification === 'skills' ? 'مهارة جديدة' : 
        certification === 'trust' ? 'شركة جديدة' : 
        certification === 'experience' ? 'خبرة جديدة' :""

  useEffect(() => {
    setCompanies(curretnCompany);
  }, [curretnCompany]);

  // Open Poup  : =
  const openPopupHandler = comp => {
    setShowDetails(true);
    setSelectedCompany(comp);
    setUpdate(true)
  }

  const [image, setImage] = useState(null)
  function setImageValue(value) {
    setImage(value)
  }
  const changeValueHandler = (key, value) => {
    setSelectedCompany({
      ...selectedComapny,
      [key]: value
    });
  }
  // Save Change Data : = 

  const dispatch = useDispatch()
  const data = useSelector((state) => state.experience.data)
  useEffect(() => {
    dispatch(fetchExperience())
  }, [])


  const submitFormHandler = e => {
    e.preventDefault();
    console.log(selectedComapny);
    if (update) {
      Api.patch("/experience/" + selectedComapny._id, selectedComapny, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
        .then(() => {
          console.log(selectedComapny);
          setSelectedCompany({})
          notifySuccess("Experience Added !!")
          setShowDetails(false)
          dispatch(fetchExperience())
        })
        .catch((error) => { handleApiError(error) })
    } else {
      Api.post("/experience", { ...selectedComapny, type: certification }, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
        .then(() => {
          setSelectedCompany({})
          notifySuccess("Experience Added !!")
          setShowDetails(false)
          dispatch(fetchExperience())
        })
        .catch((error) => { handleApiError(error) })
    }
  }


  // Add  NEw Company

  const addNewCompanyHandler = () => {
    setShowDetails(true);
    setUpdate(false)
    setSelectedCompany({
      id: Math.random(),
      data: {}
    });

  };


  // Delete Company : = 

  const deleteCompanyHandler = (id) => {
    Api.delete("/experience/" + id)
      .then(() => {
        setSelectedCompany({})
        notifySuccess("Experience Deleted !!")
        setShowDetails(false)
        dispatch(fetchExperience())
      })
      .catch((error) => { handleApiError(error) })
  }
  const apiUrl = process.env.REACT_APP_API_URL
  return (
    <>
      {!companies ? <h1>Loading</h1> : companies.map(company =>
        <img
          className='comp_Logo'
          onClick={() => openPopupHandler(company)}
          key={company?._id}
          src={apiUrl + company?.logo}
          alt={company?.company}
        />
      )}

      <Overlay state={showDetails} setState={setShowDetails} />
      <Modal state={showDetails} setState={setShowDetails}>
        <form onSubmit={submitFormHandler}>

          <div className='add_new_Project' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <SingleCompany image={image} setImage={setImageValue} update={update} resource={resource} type={type} changeHandler={changeValueHandler} data={selectedComapny} />
          </div>

          <div className='form_btn' style={{ justifyContent: 'flex-end', columnGap: '20px', marginTop: '20px' }}>
            <button className='calncel_btn' type='button' onClick={() => deleteCompanyHandler(selectedComapny._id)}>Delete</button>
            <button type='submit'>Save</button>
          </div>

        </form>

      </Modal>
      <button className='AddNewComp' onClick={addNewCompanyHandler}>{type == 'about_page' ? '+ إضافة خبرة جديدة' : `+ إضافة ${x}`}</button>
    </>
  )
}

export default Compaines