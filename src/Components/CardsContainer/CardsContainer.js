import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../images/chicken_chettinad.jpg';
import Card from './Card';
import "./template.css"

const CardsContainer = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.95, // Display 2.5 cards in the first frame
        slidesToScroll: 1, // Scroll one card at a time
        swipeToSlide: true, // Allow swiping to slide
        focusOnSelect: true, // Focus on the selected card
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.5, // Adjust for smaller screens
                },
            },
        ],
    };

    return (
        <div>
            <h1 className="text-left font-heading text-primary font-bold text-3xl mt-5">Today's Special</h1>
            <Slider {...settings}>
                <div className=" my-10 flex gap-2 align-items ">
                    <Card />
                </div>
                <div className=" my-10 flex gap-2 align-items ">
                    <Card />
                </div>
                <div className=" my-10 flex gap-2 align-items ">
                    <Card />
                </div>
                <div className=" my-10 flex gap-2 align-items ">
                    <Card />
                </div>
                <div className=" my-10 flex gap-2 align-items ">
                    <Card />
                </div>
            </Slider>
        </div>
    );
}

export default CardsContainer;
