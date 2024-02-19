import React from 'react';
import img1 from '../../images/chicken_chettinad.jpg';
import './template.css';
import veg from "../../images/veg-icon.png";
import nonVeg from "../../images/non-veg-icon.png";

function Card({
    dishName,
    price,
    inStock,
    description,
    vgCategory,
    discountPrice,
    discountPriceAvailable,
    images
}) {
    console.log("Dish Name:", dishName); // Adding console log here
    // console.log(images , "images value")

    return (
        <div className='product-card'>
            <div className="cardbody">
                <div className="cardimg">
                    <img src={`https://karaikudi-kitchen-backend.onrender.com/${images}`} alt="" />
                    <div className="imgbadges">
                        <div className={` absolute px-5 h-[32px] flex top-0 p-[5px] type ${vgCategory === 'veg' ? 'bg-[#22aa00]' : 'bg-[#bf360c]'}`}>
                            {/* <img src={veg} width={155} height={10} alt="" /> */}
                            <h3>{vgCategory}</h3>
                        </div>
                        <div className="discount">

                        </div>
                    </div>
                </div>
                <div className="Carddescription">
                    <h2>{dishName}</h2>
                    <h3>Price: <span class="">{price} Rs/only</span></h3>
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

export default Card;
