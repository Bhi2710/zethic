import React from 'react';
import '../css/Call.css';

const Call = () => {
  return (
    <div className='call-container'>
       <div className='call-line'>
          <div className='call-line-text'>
            <p>Curious about our land plot offerings in</p>
          </div>
          <div className='call-line-text-second'>
            <p>Chennai? Contact us today</p>
          </div>
          <div className='call-line-button'>
            <button>Schedule a Call</button>
          </div>
       </div>
       <div className='call-line'></div>
    </div>
  )
}

export default Call