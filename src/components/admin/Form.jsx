import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AddIcon } from '../../UI/Icons';
import Input from './Input'
import Api, { handleApiError } from '../../config/api';
import { useDispatch } from 'react-redux';
import { fetchAbout } from '../../redux/slices/about.slice';
import { notifySuccess } from '../../config/toastify';
import { fetchResume } from '../../redux/slices/resume.slice';
import { fetchExp } from '../../redux/slices/exp.slice';

const HomeForm = props => {
  const dispatch = useDispatch()
  const [image, setImage] = useState(null)
  const [file, setFile] = useState(null)

  const submitFormHandler = e => {
    e.preventDefault();
    if (props.type == "resume_page") {
      if (props.update) {
        Api.patch("/resume/" + props.data._id, props.data, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
          .then(() => {
            dispatch(fetchResume())
            notifySuccess("Resume Date Added !!")
          })
          .catch((error) => handleApiError(error))
      } else {
        Api.post("/resume", props.data, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
          .then(() => {
            dispatch(fetchAbout())
            notifySuccess("About Date Added !!")
          })
          .catch((error) => handleApiError(error))
      }
    } else if(props.type == "exp"){
      if (props.update) {
        Api.patch("/exp/" + props.data._id, props.data)
          .then(() => {
            dispatch(fetchExp())
            notifySuccess("Data Added !!")
          })
          .catch((error) => handleApiError(error))
      } else {
        Api.post("/exp", props.data)
          .then(() => {
            dispatch(fetchExp())
            notifySuccess("Data Added !!")
          })
          .catch((error) => handleApiError(error))
      }
    }else{
      if (props.update) {
        Api.patch("/about/" + props.data._id, props.data, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
          .then(() => {
            dispatch(fetchAbout())
            notifySuccess("About Date Added !!")
          })
          .catch((error) => handleApiError(error))
      } else {
        Api.post("/about", props.data, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
          .then(() => {
            dispatch(fetchAbout())
            notifySuccess("About Date Added !!")
          })
          .catch((error) => handleApiError(error))
      }
    }
  };

  const apiUrl = process.env.REACT_APP_API_URL

  return (
    <form onSubmit={submitFormHandler}>
      <div className='add_new_Project' style={{ display: 'flex', justifyContent: 'space-between' }}>
        {props.resource.map((input, index) => <Input update={props.update} file={file} setFile={setFile} key={input.id} index={index} {...input} data={props.data} setData={props.setData} />)}
        {props.type === 'about_page' &&
          <div style={{ flexBasis: '100%', alignItems: 'flex-start' }} className='input_control'>
            <div className='flex'>
              <span className='row_num'>15</span>
              <p>صورتي الشخصية</p>
            </div>
            <div>
              <input onChange={e => {
                setImage(e.target.files[0])
                props.setData({ ...props.data, image: e.target.files[0] })
              }} style={{ display: 'none' }} type='file' id='profile_image' />
              <label htmlFor='profile_image'>
                {!image && !props.data?.image && <div className='addimage'><AddIcon /></div>}
                {!image && props.data.image && <img className='addimage' src={apiUrl + props.data.image || ''} />}
                {image && <img className='addimage' src={URL.createObjectURL(image)} />}
              </label>
            </div>
          </div>
        }
      </div>
      <div className='form_btn' style={{ justifyContent: 'flex-end', columnGap: '20px', marginTop: '20px' }}>
        <button type='button' className='calncel_btn' onClick={() => dispatch(fetchAbout())}>عدم الحفظ</button>
        <button type='submit'>حفظ التغييرات</button>
      </div>
    </form>
  )
}

export default HomeForm