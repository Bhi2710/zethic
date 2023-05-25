import React from 'react';
import businessIcon from '../assets/business.jpg';
import marketIcon from '../assets/market.png';
import forbesIcons from '../assets/forbes.png';
import YahooIcon from '../assets/Yahoo.png';
import TechIcon from '../assets/TechBullion.png';



const Icons = () => {
  return (
    <div className='Icons-container-logo'>
      <figure>
        <img src={businessIcon} alt="load" width="200px" height="100px"/>
      </figure>
      <figure>
        <img src={marketIcon} alt="load" width="200px" height="100px"/>
      </figure>
      <figure>
        <img src={forbesIcons} alt="load" width="200px" height="100px"/>
      </figure>
      <figure>
        <img src={YahooIcon} alt="load" width="200px" height="100px"/>
      </figure>
      <figure>
        <img src={TechIcon} alt="load" width="200px" height="80px"/>
      </figure>
    </div>
  )
}

export default Icons;