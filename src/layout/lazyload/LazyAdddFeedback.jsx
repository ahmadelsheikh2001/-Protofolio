import React from 'react'

const LazyAdddFeedback = () => {
  return (
    <div className="layout-container" style={{minHeight: '100vh'}}>
      <div className="sidebar lazy"></div>
      <div className="content">
        <div className='lazy' style={{minHeight: '60px'}}></div>
        <div className="main_content lazy" style={{minHeight: 'calc(100vh - 130px)'}}>
        </div>
      </div>
    </div>
  )
}

export default LazyAdddFeedback;