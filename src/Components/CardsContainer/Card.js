import React from 'react'
import img1 from '../../images/chicken_chettinad.jpg';
import './template.css'

function Card() {
  return (
    <div className='product-card'>
        <div className="cardbody">
            <div className="cardimg">
            <img src={img1} alt="" />
            <div className="imgbadges">
                <div className="type">
                    <h3>NON-VEG</h3>
                </div>
                <div className="discount">

                </div>
            </div>
            </div>
            <div className="Carddescription">
                <h2>Chiken Curry</h2>
                <h3>Price: <span class="">599 Rs/only</span></h3>
                <div className="order">
                <h1>Order now</h1>
                </div>
                
            </div>
            <div className="offer">
                <h3>55% off</h3>
            </div>
            
        </div>
    </div>
  )
}

export default Card