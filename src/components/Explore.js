import React from 'react'
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import heart from '../assets/heart.png';

const Explore = () => {
  return (
    <section className='explore-container'>
      <div className='explore-container-text'>
        <p>Explore Our</p>
        <p>Collections</p>
        <div></div>
        <figure>
          <img src={heart} alt="load" width="20px" height="20px" />&emsp;
          <label>Corner Plots</label>
        </figure>
        <div></div>
      </div>
      <figure>
        <img src={image1} alt="load" width="300px" height="400px" />&emsp;
      </figure>
      <figure>
        <img src={image2} alt="load" width="300px" height="400px"/>&emsp;
      </figure>
      <figure>
        <img src={image3} alt="load" width="300px" height="400px"/>
      </figure>
    </section>
  )
}

export default Explore;