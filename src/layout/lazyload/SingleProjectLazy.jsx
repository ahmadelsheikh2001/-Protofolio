import React from 'react'
import { Container } from 'react-bootstrap'

const SingleProjectLazy = () => {
  return (
    <section className='single-ui-page'>
      <Container>
        <div className='lazy'  style={{
          width: '100%',
          minHeight: '600px'
        }}></div>
        <div className="flex buttons_container">
          <div className='lazy' style={{
              width: '20%',
              borderRadius: '12px',
              height: '60px'
            }}></div>
          <div className='lazy' style={{
              width: '20%',
              borderRadius: '12px',
              height: '60px'
            }}></div>
          <div className='lazy' style={{
              width: '20%',
              borderRadius: '12px',
              height: '60px'
            }}></div>
        </div>
        <section className="certification_section">
          <div className='lazy lazy_title'></div>
          <div className='flex' style={{ columnGap: '24px' }}>
            <div className='lazy' style={{
              height: '200px',
              borderRadius: '16px'              
            }}></div>
            <div className='lazy' style={{
              height: '200px',
              borderRadius: '16px'              
            }}></div>
            <div className='lazy' style={{
              height: '200px',
              borderRadius: '16px'              
            }}></div>
          </div>
        </section>
      </Container>
    </section>
  )
}

export default SingleProjectLazy