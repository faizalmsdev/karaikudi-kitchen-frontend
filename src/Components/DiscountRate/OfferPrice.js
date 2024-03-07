    import React, { useState } from 'react';
    import ReviewPopup from '../Review/ReviewPopup'; // Update the path based on your actual file structure

    const OfferPrice = ({isSmallScreen}) => {
    const [isReviewPopupOpen, setReviewPopupOpen] = useState(false);

    const openReviewPopup = () => {
        setReviewPopupOpen(true);
    };

    //   const closeReviewPopup = () => {
    //     setReviewPopupOpen(false);
    //   };

    return (
        <>
            {
                isSmallScreen 
                    ? 
                    <div className="w-full md:h-[150px] h-[110px]  bg-gradient-to-r from-accent to-secondary rounded-lg">
                        <h1 className="text-[#252525] md:text-3xl text-2xl text-center py-2 font-design font-bold">
                            <span className="">Grab</span> a discount of <span className="">3 - 5%</span>
                        </h1>
                        <h3 className="text-center text-[#ffffff] hover:text-primary md:text-2xl text-lg font-medium font-body md:mt-3">
                            <a href="#" onClick={openReviewPopup}>
                            Click to provide your genuine feedback and receive your discount.
                            </a>
                        </h3>

                        {/* Review Popup */}
                        {isReviewPopupOpen && <ReviewPopup setReviewPopupOpen={setReviewPopupOpen}  />}
                    </div>
                    :  
                    <div className="w-full h-[150px]  bg-gradient-to-r from-accent to-secondary rounded-lg">
                        <h1 className="text-[#252525] text-3xl text-center py-2 font-design font-bold">
                            <span className="">Grab</span> a discount of <span className="">3 - 5%</span>
                        </h1>
                        <h3 className="text-center text-[#ffffff] hover:text-primary text-2xl font-medium font-body mt-3">
                            <a href="#" onClick={openReviewPopup}>
                            Click to provide your genuine feedback and receive your discount.
                            </a>
                        </h3>

                        {/* Review Popup */}
                        {isReviewPopupOpen && <ReviewPopup setReviewPopupOpen={setReviewPopupOpen}  />}
                    </div>
            }
        </>
        
    );
    };

    export default OfferPrice;
