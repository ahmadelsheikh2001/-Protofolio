import React from 'react'
import SingleInput from './SingleInput'
import UpdateInput from './UpdateInput'

const EnForm = ({ resource, changeHandler, curretnData, projectType }) => {

  return (
    <>
      <div className='add_new_Project' style={{ display: 'flex', justifyContent: 'space-between' }}>
        {resource.map((input, index) => <SingleInput projectType={projectType} data={curretnData} changeHandler={changeHandler} key={input.id} index={index} {...input} />)}
      </div>
    </>
  )
}

export default EnForm