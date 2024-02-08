    // Review.js
    import React, { useState } from 'react';
    import './review.css'; // Make sure to import your CSS file
    import { XCircle , Star } from '@phosphor-icons/react'; // Import the icon library you are using

    const Review = ({setReviewPopupOpen}) => {
    const [activeStars, setActiveStars] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [showFeedbackBox, setShowFeedbackBox] = useState(false);
    const [displayThanks , setDisplayThanks] = useState(false) ; 

    const handleStarClick = (index) => {
        setActiveStars(index + 1);

        // Show feedback box if rating is less than 3 stars
        if (index < 3) {
        setShowFeedbackBox(true);
        } else {
        setShowFeedbackBox(false);
        }

        // Redirect to google.com if rating is 4 or 5 stars
        if (index > 2) {
        window.location.href = 'https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LC4qqUivMDQzYLRSNagwTjQ1Mk0xM0sxskg1N0k0tzKoSDNPNko1TEsxSTFJNkgxSvYSLclIVchOLErMzC5NyVTIzixJzkjNAwBxKBgL&q=the+karaikudi+kitchen&oq=the&gs_lcrp=EgZjaHJvbWUqFQgBEC4YJxivARjHARiABBiKBRiOBTIPCAAQIxgnGOMCGIAEGIoFMhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBggCEEUYQDIGCAMQRRhBMgYIBBBFGD0yBggFEEUYPTIGCAYQRRhBMgYIBxBFGDzSAQgxODYyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x3a525d66d28e74a7:0xf7c2e1fd4d4c0d2c,3,,,,';
        }
    };

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };

    const handleSubmit = async () => {
        // Check if stars are selected and feedback is provided
        if (activeStars === 0) {
            alert('Please select stars before submitting.');
            return;
        }
    
        if (activeStars < 3 && feedback.trim() === '') {
            alert('Please provide feedback for ratings less than 3 stars.');
            return;
        }
    
        try {
            // Prepare the review data payload
            const reviewData = {
                ratings: activeStars,
                feedback: feedback.trim()
            };
    
            // Make a POST request to the backend API
            const response = await fetch('https://karaikudi-kitchen-backend.onrender.com/api/v1/review', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reviewData)
            });
    
            // Check if the request was successful
            if (!response.ok) {
                throw new Error('Failed to submit review');
            }
    
            // If all conditions are met, proceed with submission
            // console.log('Feedback:', feedback);
    
            // Hide all elements, including X, and display thanks message
            setFeedback('');
            setShowFeedbackBox(false);
            setActiveStars(0);
            setDisplayThanks(true);
    
            // Set a timeout to hide the thanks message after 2 seconds
            setTimeout(() => {
                setDisplayThanks(false);
                // You can also close the component here if needed
                setReviewPopupOpen(false);
            }, 2000);
        } catch (error) {
            console.error('Error submitting review:', error.message);
            // You can handle error display or retry logic here
        }
    };
    

    

    return (
        <div className="rating-box bg-white w-[450px] flex-col ml-10 shadow-lg  border-solid">
            {displayThanks ? (
                <div>Thanks For Your Feedback !</div>
            ) : (
                <>
                    <div className="close-icon float-right mb-5 hover:cursor-pointer" onClick={() => setReviewPopupOpen(false)}>
                        <XCircle fill='#252525' icon="x" size={24} />
                    </div>

                    <h3 className='mt-8 text-primary'>How was your experience?</h3>
                    <div className="stars ml-7">
                        {[...Array(5).keys()].map((index) => (
                            <Star
                                key={index}
                                size={32}
                                weight={index < activeStars ? 'fill' : 'regular'}
                                className="hover:cursor-pointer"
                                onClick={() => handleStarClick(index)}
                            />
                        ))}
                    </div>
                    {showFeedbackBox && (
                        <div className="feedback-box border-none mt-8  ml-6 flex gap-7">
                            <textarea
                                placeholder="Share your feedback..."
                                value={feedback}
                                onChange={handleFeedbackChange}
                                className='w-[220px] block p-2.5 shadow-lg  text-sm text-text bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-text dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            ></textarea>
                            <div className='mt-3'>
                                <button onClick={handleSubmit} className='py-2 font-medium px-2 rounded-lg shadow-xl bg-primary hover:shadow-inner text-white'>Submit</button>
                            </div>
                        </div>
                    )}
                </>
            )
            }
            
        </div>
    );
    };

    export default Review;
