    // ReviewPopup.js
    import React from 'react';
    import Review from './review'; // Update the path based on your actual file structure

    const ReviewPopup = ({setReviewPopupOpen}) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center" >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className=" z-10">
            <Review setReviewPopupOpen={setReviewPopupOpen} />
        </div>
        </div>
    );
    };

    export default ReviewPopup;
