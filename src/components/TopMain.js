import React from 'react';
import '../css/TopMain.css';
import land from '../assets/land.jpg';
import sun from '../assets/sun.png';
import heart from '../assets/heart.png';
import demo1 from '../assets/project1.jpg';
import demo2 from '../assets/project2.jpg';

const TopMain = () => {
    return (
        <>
            <section className='topmain-container'>
                <div className='line'>
                    <img src={land} alt="load" />
                    <div className='first-details-container'>
                        <h2>437k+</h2>
                        <h3>Happy Customers</h3>
                    </div>
                    <article className='lorem'>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </article>
                </div>
                <div className='line'>
                    <div className='second-details-container'>
                        <h2>437k+</h2>
                        <h3>Landmark Near Chennai</h3>
                    </div>
                </div>
                <div className='line'>
                    <h1>Discover Your Perfect</h1>
                    <p>Plot of Land.</p>
                    <p>Strating at</p>
                    <span>₹3999</span>
                    <span>per.sqft</span>
                    <div className='topmain-container-input'>
                        <input type='text' placeholder='Search area or loaction' />
                        <label>₹Budget</label>
                        <select></select>
                        <button>Search</button>
                    </div>
                    <div className='third-details-container'>
                        <h2>4.3m+</h2>
                        <h3>Sq. Feet Developed</h3>
                    </div>
                </div>
                <div className='line'></div>
                <div className='line'>
                    <figure className='sun'>
                        <img src={sun} alt="load" width="30px" height="30px" />
                    </figure>
                    <div className='heart'>
                       <img src={heart} alt="load"/>
                       <label>
                          Tranding projects
                       </label>
                    </div>
                    <figure className='demo1'>
                      <img src={demo1} alt="load" />
                    </figure>
                    <figure className='demo2'>
                       <img src={demo2} alt="load" />
                    </figure>
                </div>
                <div className='line'></div>
            </section>

        </>
    )
}

export default TopMain;