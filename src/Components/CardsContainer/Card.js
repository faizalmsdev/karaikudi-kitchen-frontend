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
        <div className='product-card md:h-[99%] md:w-[325px] h-[84%] w-[290px] bg-white  rounded-lg shadow-md relative p-8'>
            <div className="cardbody">
                <div className="cardimg md:h-[200px] md:w-[300px] h-[160px] w-[260px]">
                    <img src={images} alt="Product" className="h-[200px] w-full object-cover shadow-sm" />
                </div>
                <div className="Carddescription mt-4 flex flex-col justify-around">
                    <div className="meal-tags">
                        <h3 className={`text-primary font-medium tag md:text-base text-xs md:py-[0.4rem] md:px-[0.8rem] py-[0.2rem] px-[0.6rem]  ${vgCategory == "veg" ? "tag--vegetarian" : "tag--non-vegetarian" }`}>{vgCategory}</h3>
                    </div>
                    <div className='mx-2 h-[200px]'>
                        <h2 className="md:font-normal font-light md:text-[27px] text-[24px]  leading-7 md:h-[18%] h-[10%] ">{dishName}</h2>

                        <h3 className="text-xl my-4 pt-2 ">
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
                        <p className='font-light font-heading text-xl my-4 md:block hidden'>{description.length > 21 ? `${description.substring(0, 21)}...` : description}</p>
                        <div className="order w-[39%] mb-2">
                            <a className="text-white font-medium  w-full " href='/Contact-us'>Order now</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default Card;
