import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AddIcon } from '../../UI/Icons';
import Input from './Input'

const HomeForm = props => {

  const navigate = useNavigate();

  const submitFormHandler = e => {
    e.preventDefault();
    console.log(props.data);
  };


  return (
    <form onSubmit={submitFormHandler}>
      <div className='add_new_Project' style={{display: 'flex', justifyContent: 'space-between'}}>
        {props.resource.map((input, index) => <Input key={input.id} index={index} {...input} data={props.data} setData={props.setData}/>)}
        {props.type === 'about_page' && 
           <div style={{flexBasis: '100%', alignItems: 'flex-start'}} className='input_control'>
           <div className='flex'>
             <span className='row_num'>10</span>
             <p>صورتي الشخصية</p>
           </div>
           <div>
             <input onChange={e => props.setData({...props.data, profile_Pic: URL.createObjectURL(e.target.files[0])})} style={{display: 'none'}} type='file' id='profile_image'/>
             <label htmlFor='profile_image'>
               {!props.data.profile_Pic ? 
               <div className='addimage'><AddIcon/></div> :
               <img className='addimage' src={props.data.profile_Pic  || ''}/>}
             </label>
           </div>
         </div> 
        }
      </div>
      <div className='form_btn' style={{justifyContent: 'flex-end', columnGap: '20px', marginTop: '20px'}}>
        <button type='button' className='calncel_btn' onClick={() => navigate('/admin')}>عدم الحفظ</button>
        <button type='submit'>حفظ التغييرات</button>
      </div>
    </form>
  )
}

export default HomeForm