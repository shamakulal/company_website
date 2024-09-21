import React from 'react'
import './Programs.css'
import hotel1 from '../../assets/hotel (2).jpg'
import travel2 from '../../assets/travel.jpg'
import photo3 from '../../assets/photo.jpg'
import hotel_icon from '../../assets/hotel-icon.png'
import travel_icon from '../../assets/travel-icon.png';
import photo_icon from '../../assets/photo-icon.png';
import { Link } from 'react-router-dom'; // Import the Link component

const Programs = () => {

    return (
        <div className='programs'>
            <Link to="/hotel"> {/* Wrap the div in a Link */}

                <div className='program'>
                    <img src={hotel1} height="400" width="600"  alt="hotel_img" />
                    <div className="caption">
                        <img src={hotel_icon} alt="hotel_icon" />
                        <h3> Hotel </h3>

                    </div>
                </div>
            </Link>
            <Link to="/travel"> {/* Wrap the div in a Link */}

                <div className='program'>

                    <img src={travel2} height="400" width="600" alt="" />
                    <div className="caption">
                        <img src={travel_icon} alt="" />
                        <h3> Tourism </h3>

                    </div>
                </div>
            </Link>

            <Link to="/photo"> {/* Wrap the div in a Link */}

                <div className='program'>
                    <img src={photo3} height="400" width="600" alt="" />
                    <div className="caption">
                        <img src={photo_icon} alt="" />
                        <h3> Photography </h3>

                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Programs