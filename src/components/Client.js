import React from 'react';
import '../css/Client.css'
import image from '../assets/image3.jpg'

const Client = () => {
    return (
        <div className='top-client-container'>
            <h1>Clients Testimonial</h1>
            <div className='client-container'>
                <img src={image} alt="load" width="450" height="340" />
                <video width="470" height="340" controls>
                    <source src={image} type='video/jpg' />
                </video>
                <img src={image} alt="load" width="450" height="340" />
            </div>
            <div className='feature-buttons-right'>
                <button>&lt;</button>
                <button>&gt;</button>
            </div>
        </div>
    )
}

export default Client;