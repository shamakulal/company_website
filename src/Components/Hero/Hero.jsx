import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div className='hero container'>
            <div className='hero-text'>
                <h1>Avadhani Software</h1>
            <button className='btn'><Link to='program'smooth={true} offset={-260} duration={500} > Explore more</Link>  </button>
            </div>
        </div>
    )
}

export default Hero
