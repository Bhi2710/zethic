import React from 'react';
import '../css/Highlight.css';
import pic from '../assets/image2.jpg'

const Highlight = () => {
  return (
    <section className='highlight-container'>
            <div className='highlight-line'>
              <figure className='highlight-image'>
                <img src={pic} alt="load" width="400px" height="500px" />
              </figure>
            </div>
            <div className='highlight-line'></div>
            <div className='highlight-line'>
              <div className='highlight-heading'>
                <h1>Project Highlights</h1>
              </div>
              <div className='highlight-text-heading'>
                <h1>Near To Station</h1>
              </div>
              <div className='highlight-text-heading-text'>
                <p>Lorem Ipsum is simply dummy text and typesetting industry. Lorem Ipsum has been the industry's standard </p>
              </div>
            </div>
            <div className='highlight-line'></div>
            <div className='highlight-line'></div>
            <div className='highlight-line'></div>
        </section>
  )
}

export default Highlight