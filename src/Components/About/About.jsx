import React from 'react';
import './About.css';
import { FaUserCheck, FaHeart, FaLightbulb, FaDollarSign, FaRocket, FaArrowsAltH } from 'react-icons/fa'; // Importing icons

const About = () => {
    return (
        <div className='about container'>
            <div className='about-text'>
                <h1 className="fade-in">About</h1>
                <p className="slide-in-left">Welcome to the heart of our journey—a place where ingenuity meets ambition, where we craft tomorrow's solutions today, fueling your aspirations beyond imagination.</p>
                <h1 className="fade-in">Why Choose Us</h1>
                <p className="slide-in-right">Choose us because we're a dynamic startup fueled by creativity, commitment, and a genuine desire to make a difference in your journey towards success.</p>
                
                <div className="benefits">
                    <div className="benefit-item fade-in">
                        <FaUserCheck className="icon" />
                        <p>Personalized Attention</p>
                    </div>
                    <div className="benefit-item fade-in">
                        <FaHeart className="icon" />
                        <p>Passionate Team</p>
                    </div>
                    <div className="benefit-item fade-in">
                        <FaLightbulb className="icon" />
                        <p>Fresh Perspectives</p>
                    </div>
                    <div className="benefit-item fade-in">
                        <FaDollarSign className="icon" />
                        <p>Cost-effectiveness</p>
                    </div>
                    <div className="benefit-item fade-in">
                        <FaRocket className="icon" />
                        <p>Quick Turnaround</p>
                    </div>
                    <div className="benefit-item fade-in">
                        <FaArrowsAltH className="icon" />
                        <p>Flexible Approach</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;











// //About.jsx
// import React from 'react'
// import './About.css'
// import about_pic from '../../assets/about.jpg'
// const About = () => {
//     return (
//         <div className='about container'>
//             <div className='about-text'>
//                 <h1>About</h1>
//                 <p>Welcome to the heart of our journey—a place where ingenuity meets ambition, where we craft tomorrow's solutions today, fueling your aspirations beyond imagination.</p>
//                 <h1>Why Choose Us</h1>
//                 <p>Choose us because we're a dynamic startup fueled by creativity, commitment, and a genuine desire to make a difference in your journey towards success.</p>

//             </div>
//         </div>
//     )
// }

// export default About;