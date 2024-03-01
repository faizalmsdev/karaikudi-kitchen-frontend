import React, { useState } from 'react';
import Container from "../Layout/Container";
import './Hero.css';
import hero from "../images/hero-bg.jpg";
import { CookingPot, Percent } from '@phosphor-icons/react';
import ReviewPopup from "../Components/Review/ReviewPopup";

const Hero = () => {
    const [isReviewPopupOpen, setReviewPopupOpen] = useState(false);

    const openReviewPopup = () => {
        setReviewPopupOpen(true);
    };

    return (
        <div className='hero xl:h-[80vh] xl:w-[80vw] lg:h-[70vh] lg:w-[70vw] flex xl:ml-[10%] justify-center items-center'>
            <div className='flex'>
                <div className='mx-4 lg:mx-6 my-6 lg:my-8 py-8 lg:py-10 flex flex-col pl-4 lg:pl-6 gap-4 lg:gap-6 w-full lg:w-[60%]'>
                <h1 className='text-[#000000]  text-3xl lg:text-4xl lg:text-5xl xl:text-8xl font-heading text-left leading-tight'>Flavors of <span className='text-primary font-design'>Karaikudi</span>, <span className='text-accent font-design'>Delight</span> of Chennai</h1>
                <p className="font-highlight text-sm lg:text-base lg:text-lg xl:text-4xl font-medium mt-6 leading-snug">From the heart of Karaikudi to the soul of Chennai – discover the magic of KTCJen</p>
                    <div className='flex gap-3 lg:gap-4 w-[50%]'>
                        <button className='flex flex-grow items-center leading-snug text-background gap-2  shadow-lg hover:shadow-inner bg-primary px-8 py-4 rounded-lg font-body text-3xl mt-6'>
                            Visit Us <CookingPot size={32}  className='ml-6'/>
                        </button>
                        <button className='flex flex-grow items-center gap-2 bg-accent text-background shadow-lg hover:shadow-inner px-10 py-4 rounded-lg font-body  text-3xl mt-6' onClick={openReviewPopup}>
                            Get Discount <Percent size={22} />
                        </button>
                    </div>
                </div>
                <div className='mt-2 rounded-lg w-[40%] lg:pt-11 lg:pl-7'>
                    <div className='w-[90%] my-4 lg:my-7 mx-6 lg:mx-10 ml-[10%]'>
                        <img src={hero} alt="hero-img" className='rounded-lg w-full' loading="lazy" />
                    </div>
                </div>
            </div>
    {/* Review Popup */}
    {isReviewPopupOpen && <ReviewPopup setReviewPopupOpen={setReviewPopupOpen} />}
</div>

    );
};

export default Hero;
