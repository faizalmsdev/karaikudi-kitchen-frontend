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
    console.log("Dish Name:", discountPriceAvailable); // Adding console log here
    // console.log(images , "images value")
    return (
        <div className='product-card bg-[#f7f2f2] h-350px w-325px rounded-lg shadow-md relative p-8'>
            <div className="cardbody">
                <div className="cardimg">
                    <img src={images} alt="Product" className="h-200px w-full object-cover shadow-sm" />
                </div>
                <div className="Carddescription mt-4 flex flex-col justify-around">
                    <div className="meal-tags">
                        <h3 className={`text-primary font-medium tag  ${vgCategory == "veg" ? "tag--vegetarian" : "tag--non-vegetarian" }`}>{vgCategory}</h3>
                    </div>
                    <div className='mx-2'>
                        <h2 className="font-medium text-2xl mb-4   ">{dishName}</h2>
                        <h3 className="text-xl my-4 ">
                            Price: 
                            <span className="font-medium">
                                {discountPriceAvailable ? (
                                    <>
                                        <del className='opacity-55'> {price}</del> {discountPrice} ₹
                                    </>
                                ) : (
                                    `${price} ₹`
                                )}
                            </span>
                        </h3>
                        <p className='font-light font-heading text-xl my-4'>{description}</p>
                        <div className="order w-[34%] mb-2">
                            <a className="text-white font-medium  w-full " href='/Contact-us'>Order now</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default Card;
