import React, { useState, useEffect } from 'react';
import Container from "../Layout/Container";
import './Hero.css';
import hero from "../images/hero-bg.jpg";
import { CookingPot, Percent } from '@phosphor-icons/react';
import ReviewPopup from "../Components/Review/ReviewPopup";

const Hero = () => {
    const [isReviewPopupOpen, setReviewPopupOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsSmallScreen(true);
            } else {
                setIsSmallScreen(false); // Ensure it's false if it's not <= 768
            }
        };
    
        // Listen to the resize event and call handleResize
        window.addEventListener('resize', handleResize);
    
        // Initial call to set initial screen size
        handleResize();
    
        // Cleanup the event listener when component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    

    const openReviewPopup = () => {
        setReviewPopupOpen(true);
    };

    return ( 
        <div className=''>
            {isSmallScreen ? (
                <div className='xl:w-[80%] lg:w-[90%] md:h-[50vh] h-[50vh] lg:h-[90vh]  justify-center items-center md:w-[100%] md:flex-col md:items-center md:justify-center mx-auto flex flex-col lg:flex-row xl:flex-row lg:py-10 ' style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className={`xl:w-[60%] xl:gap-[7%] flex flex-col xl:mr-8 justify-center items-center  glass w-[98%] my-10 md:my-0 h-[45vh]  md:w-[90%] md:h-[80%]`}>
                        <h1 className='text-2xl md:text-4xl lg:text-4xl xl:text-6xl text-primary text-wrap md:font-bold font-heading text-center  leading-normal  mb-4 md:mr-3'>Flavors of <span className='text-primary'>Karaikudi</span>, <span className='text-primary'>Delight</span> of <span className='md:flex md:justify-center md:items-center md:text-primary'>Chennai</span> </h1>
                        <p className="text-lg lg:text-xl xl:text-2xl font-medium mb-6 lg:mb-8 md:mx-0 text-center mx-4">From the heart of Karaikudi to the soul of Chennai – discover the magic of KTCJen</p>
                        <div className='flex gap-4 md:gap-10 '>
                            <a href="/Contact-us">
                                <button className='flex items-center text-base lg:text-xl xl:text-2xl bg-primary px-3 py-2 text-background rounded-lg font-medium shadow-lg hover:shadow-inner' >
                                    Visit Us <CookingPot size={20} className='ml-2'/>
                                </button>
                            </a>
                            
                            <button className='flex items-center bg-accent  px-3 py-2 rounded-lg font-medium text-base lg:text-xl xl:text-2xl shadow-lg hover:shadow-inner' onClick={openReviewPopup}>
                                Get Discount <Percent size={20} className='ml-2'/>
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='xl:w-[80%] lg:w-[90%] md:h-[50vh] lg:h-[90vh] md:w-[80%] mx-auto flex flex-col lg:flex-row xl:flex-row lg:py-10 '>
                    <div className='xl:w-[60%] xl:gap-[7%] flex flex-col xl:mr-8 justify-center'>
                        <h1 className='text-4xl lg:text-4xl xl:text-6xl text-primary font-heading leading-normal mb-4'>Flavors of <span className='text-accent'>Karaikudi</span>, <span className='text-accent'>Delight</span> of Chennai</h1>
                        <p className="text-lg lg:text-xl xl:text-2xl font-medium mb-6 lg:mb-8">From the heart of Karaikudi to the soul of Chennai – discover the magic of KTCJen</p>
                        <div className='flex gap-4'>
                            <a href="/Contact-us">
                                <button className='flex items-center text-lg lg:text-xl xl:text-2xl bg-primary px-6 py-3 text-background rounded-lg font-medium shadow-lg hover:shadow-inner' >
                                    Visit Us <CookingPot size={24} className='ml-2'/>
                                </button>
                            </a>
                            
                            <button className='flex items-center bg-accent  px-8 py-3 rounded-lg font-medium text-lg lg:text-xl xl:text-2xl shadow-lg hover:shadow-inner' onClick={openReviewPopup}>
                                Get Discount <Percent size={20} className='ml-2'/>
                            </button>
                        </div>
                    </div>
                    <div className='xl:w-[40%] lg:w-[40%] lg:mt-4 xl:mt-0 xl:ml-12 xl:mb-5 lg:flex lg:justify-center lg:pl-4 md:hidden'>
                        <div className=' flex items-center'>
                            <img src={hero} alt="hero-img" className='rounded-lg w-full ' loading="lazy" />
                        </div>
                    </div>
                </div>
            )}
            {/* Review Popup */}
            {isReviewPopupOpen && <ReviewPopup setReviewPopupOpen={setReviewPopupOpen} />}
        </div>
    );
};

export default Hero;
