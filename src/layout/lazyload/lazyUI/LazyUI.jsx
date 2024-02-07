import React from 'react'
import { Container } from 'react-bootstrap';

const LazyUI = ({ header }) => {
  return (
    <section className='project_Section ui'>
      <Container>
      {header &&<div className="flex headr-ui" style={{ justifyContent: 'space-between', marginBottom: '40px'}}>
        <div 
        className='lazy lazy_title'
        style={{marginBottom: 0}}
        ></div>
        <div className='lazy'
          style={{
            flexBasis: '70%',
            height: '40px'                
          }}
        ></div>
      </div>}
      <div className="project_list_container">
        <div className='last_project_single parent lazy'></div>
        <div className='last_project_single parent lazy'></div>
        <div className='last_project_single parent lazy'></div>
        <div className='last_project_single parent lazy'></div>
        <div className='last_project_single parent lazy'></div>
        <div className='last_project_single parent lazy'></div>
      </div>
      </Container>
    </section>
  )
}

export default LazyUI;