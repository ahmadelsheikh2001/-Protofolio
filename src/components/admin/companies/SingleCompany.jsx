import React from 'react'
import { AddIcon } from '../../../UI/Icons'

const SingleCompany = ({data, changeHandler, type, resource}) => {

  return (
    <>
      {resource.map((input, index) => (
      <div 
      key={input.id}
      className='input_control'>
      <div className='flex'>
        <span className='row_num'>{index + 1}</span>
        <p>{input.text}</p>
      </div>
      <div>
       {input.id === 'logo' ? 
        <>
        <input 
        onChange={e => changeHandler(input.id, URL.createObjectURL(e.target.files[0]))} style={{display: 'none'}} type='file' id='image_en_1'/>
        <label htmlFor='image_en_1'>
          {!data.logo ? 
          <div className='addimage'><AddIcon/></div> :
          <img className='addimage' src={data.logo  || ''}/>}
        </label>
        </>
       : 
      <div className='label_input'>
        {'icon'}
        <input 
        type={input.type}
        value={data[input.id] || ''}
        placeholder={input.placeHolder}
        onChange={e => changeHandler(input.id, e.target.value)}
        />
      </div>}
      </div>
    </div> 

    ))}
    </>
  )
}

export default SingleCompany