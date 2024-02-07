import React from 'react'
import { Container } from 'react-bootstrap'

const LazyResume = () => {
  return (
    <div className='resume_page'>
      <Container>
      <section className='resume-header'>
        <div className="flex" style={{justifyContent: 'space-between'}}>
          <div className="left">
            <div className="lazy" style={{
              width: '140px',
              height: '50px',
              marginBottom: '20px'
            }}></div>
            <div className="lazy" style={{
              width: '170px',
              height: '50px',
              marginBottom: '20px'
            }}></div>
            <div className="flex" style={{columnGap: '20px'}}>
              <div className="lazy" style={{width: '50px', height: '50px', borderRadius: '50%'}}></div>
              <div className="lazy" style={{width: '50px', height: '50px', borderRadius: '50%'}}></div>
              <div className="lazy" style={{width: '50px', height: '50px', borderRadius: '50%'}}></div>
              <div className="lazy" style={{width: '50px', height: '50px', borderRadius: '50%'}}></div>
            </div>
          </div>
          <div className="lazy" style={{width: '120px', height: '50px'}}></div>
        </div>
      </section>
      <div className='lazy lazy_title'></div>
      <section className='resume-content'>
        <div className="left">
          <div className="lazy" 
            style={{height: '200px', marginBottom: '20px'}}
            ></div>
          <div className="lazy" 
            style={{height: '200px', marginBottom: '20px'}}
            ></div>
          <div className="lazy" 
            style={{height: '200px', marginBottom: '20px'}}
            ></div>
          <div className="lazy" 
            style={{height: '200px', marginBottom: '20px'}}
            ></div>
        </div>
        <div className="right">
          <div className="lazy" style={{height: '420px', marginBottom: '20px'}}></div>
          <div className="lazy" style={{height: '420px', marginBottom: '20px'}}></div>
        </div>
      </section>
      <div className="lazy" style={{height: '300px', marginBottom: '20px'}}></div>
      </Container>
    </div>
  )
}

export default LazyResume