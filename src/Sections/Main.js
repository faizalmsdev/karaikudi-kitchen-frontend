import React from 'react'
import Container from '../Layout/Container';
import OfferPrice from "../Components/DiscountRate/OfferPrice";
import img2 from "../images/main-img-2.jpg"

const Main = ({isSmallScreen}) => {
    return (
        <>
            {
                isSmallScreen 
                ? 
                <div className='bg-[#d8ecee] '>
                            <div className='md:mx-12 md:py-10 mx-5 py-5'>
                                <h1 className='text-4xl text-center font-design font-semibold leading-snug'>Welcome To <span className='text-primary'>The Karaikudi Kitchen</span> </h1>
                                <h1 className='mt-6 text-md font-body leading-loose font-base text-justify'><span className='ml-12'></span>The concept of The Karaikudi Kitchen was inspired by Ahlan Foodpreneurs, aiming to craft an authentic North & South Non-Veg dining experience with a specialization in Chettinad style. 
                                Our unique attractions include Tamil Muslim wedding Biriyani and South Indian seafood dishes, showcasing the diverse and rich flavors of the region. At The Karaikudi Kitchen, we prioritize quality, service, and hygiene.  Join us on a culinary journey where each dish is crafted with passion and tradition, promising a dining experience like no other.</h1>
                            </div>
                        <div className='w-[95vw] ml-[2.5%]'>
                            <OfferPrice isSmallScreen={isSmallScreen} />
                        </div>
                        
                </div>
                : 
                <div className='bg-[#d8ecee] '>
                    <Container>
                        <div className='flex ml-12 '>
                            <div className='w-[200%] mt-20'>
                                <img src={img2} width={240} className='rounded-md shadow-lg' />
                            </div>
                            <div className='mx-12 my-10 '>
                                <h1 className='lg:text-4xl xl:text-5xl font-design font-semibold leading-snug'>Welcome To <span className='text-primary'>The Karaikudi Kitchen</span> </h1>
                                <h1 className='mt-6 text-md font-body leading-loose font-medium'><span className='ml-12'></span>The concept of The Karaikudi Kitchen was inspired by Ahlan Foodpreneurs, aiming to craft an authentic North & South Non-Veg dining experience with a specialization in Chettinad style. 
                                Our unique attractions include Tamil Muslim wedding Biriyani and South Indian seafood dishes, showcasing the diverse and rich flavors of the region. At The Karaikudi Kitchen, we prioritize quality, service, and hygiene.  Join us on a culinary journey where each dish is crafted with passion and tradition, promising a dining experience like no other.</h1>
                            </div>
                        </div>
                        <div className='w-[90%] mx-auto '>
                            <OfferPrice />
                        </div>
                        
                    </Container>
                </div>
            }
        </>
        
    )
}

export default Main
