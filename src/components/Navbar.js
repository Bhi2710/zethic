import React from 'react';
import '../css/Navbar.css';
import arrow from '../assets/down-arrow.png'

const Navbar = () => {
    return (
        <>
            <section className='main-navbar'>
                <aside className='main-navbar-left'>
                    <h2>Discover</h2>
                    <h2>Plots</h2>
                </aside>
                <aside className='main-navbar-right'>
                    <div className='main-navbar-select'>
                        <label>Project</label>&nbsp;
                        <img src={arrow} alt="load" width="15px" height="15px" />
                    </div>
                    <div>
                        <p>Agents</p>
                    </div>
                    <div>
                        <p>Amenities</p>
                    </div>
                    <div className='main-navbar-horizontal-line'>
                        <div></div>
                    </div>
                    <div>
                        <p>Sign In</p>
                    </div>
                    <div>
                        <button>Schedule a Call</button>
                    </div>
                </aside>
            </section>
            <hr />
        </>
    )
}

export default Navbar;