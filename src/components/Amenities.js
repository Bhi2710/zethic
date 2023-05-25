import React from 'react';
import '../css/Amenities.css'
import dp from '../assets/image2.jpg';

const Amenities = () => {
    return (
        <section className='amenities-container'>
            <div className='amenities-line'></div>
            <div className='amenities-line'>
               <div className='amenities-line-images'>
                 <img src={dp} alt='load' />
               </div>
                <div className='amenities-line-child'>
                    <h1>Children's Play Arena</h1>
                </div>
                <div className='amenities-line-street'>
                    <h1>Street Light</h1>
                </div>
                <div className='amenities-line-security'>
                    <h1>24 X 7 Security</h1>
                </div>
                <div className='amenities-line-Avenue'>
                    <h1>Avenue Trees</h1>
                </div>
            </div>
            <div className='amenities-line'>
                <div className='amenities-line-heading'>
                    <h1>Project Amenities</h1>
                </div>
            </div>
            <div className='amenities-line'></div>
            <div className='amenities-line'></div>
            <div className='amenities-line'></div>
        </section>
    )
}

export default Amenities