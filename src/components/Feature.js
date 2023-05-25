import React from 'react';
import '../css/Feature.css';
import img1 from '../assets/image1.jpg'
import img2 from '../assets/image2.jpg'
import img3 from '../assets/image3.jpg'


const Feature = () => {
    return (
        <div className='feature-container'>
            <h1>Feature Projects</h1>
            <section className='feature-buttons'>
                <div className='feature-buttons-left'>
                    <button>Egmore</button>
                    <button>Koyambedu</button>
                    <button>Sholinganallur</button>
                    <button>Choolaimedu</button>
                    <button>Grams Road</button>
                    <button>Royapettah</button>
                </div>
                <div className='feature-buttons-right'>
                    <button>&lt;</button>
                    <button>&gt;</button>
                </div>
            </section>
            <figure className='feature-buttons-images'>
                <div>
                    <img src={img1} alt='load' width="300px" height="400px" />
                    <p>Loreum ispum is the dummmy text used to fill the</p>
                    <div className='feature-prizes'>
                        <p>$16,471 </p>
                        <div></div>
                        <p>2088 sqft</p>
                    </div>
                </div>
                <div>
                    <img src={img2} alt='load' width="300px" height="400px" />
                    <p>Loreum ispum is the dummmy text used to fill the</p>
                    <div className='feature-prizes'>
                        <p>$16,471 </p>
                        <div></div>
                        <p>2088 sqft</p>
                    </div>
                </div>
                <div>
                    <img src={img3} alt='load' width="300px" height="400px" />
                    <p>Loreum ispum is the dummmy text used to fill the</p>
                    <div className='feature-prizes'>
                        <p>$16,471 </p>
                        <div></div>
                        <p>2088 sqft</p>
                    </div>
                </div>
                <div>
                    <img src={img1} alt='load' width="300px" height="400px" />
                    <p>Loreum ispum is the dummmy text used to fill the</p>
                    <div className='feature-prizes'>
                        <p>$16,471 </p>
                        <div></div>
                        <p>2088 sqft</p>
                    </div>
                </div>
            </figure>
        </div>
    )
}

export default Feature