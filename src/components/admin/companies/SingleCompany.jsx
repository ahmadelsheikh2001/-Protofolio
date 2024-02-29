import React from 'react'
import { AddIcon } from '../../../UI/Icons'

const SingleCompany = ({ image, setImage, data, changeHandler, type, resource, update }) => {
  const apiUrl = process.env.REACT_APP_API_URL
  console.log(image);
  return (
    <>
      {resource.map((input, index) => (
        <div key={input.id} className='input_control'>
          <div className='flex'>
            <span className='row_num'>{index + 1}</span>
            <p>{input.text}</p>
          </div>
          <div>
            {input.id === 'logo' ?
              <>
                <input
                  onChange={e => {
                    changeHandler(input.id, e.target.files[0])
                    setImage(e.target.files[0])
                    }} style={{ display: 'none' }} type='file' id='image_en_1' autoComplete="off" />
                <label htmlFor='image_en_1'>
                  {!data?.logo && !image &&<div className='addimage'><AddIcon /></div>}
                  {image && <img className='addimage' src={URL.createObjectURL(image) || ''} />}
                  {!image && data.logo && <img className='addimage' src={apiUrl + data.logo} />}
                </label>
              </>
              :
              <div className='label_input'>
                {'icon'}
                <input
                  type={input?.type}
                  value={data && data[input?.id] || ''}
                  placeholder={input?.placeHolder}
                  onChange={e => changeHandler(input?.id, e.target.value)}
                  autoComplete="off"
                />
              </div>}
          </div>
        </div>

      ))}
    </>
  )
}

export default SingleCompany