import React from 'react';
import img1 from '../../images/chicken_chettinad.jpg';
import Card from './Card';

const CardsContainer = () => {
    return (
        <div className=''>
            <h1 className="text-left font-heading text-primary font-bold text-3xl mt-5">Today's Special</h1>
            <div class="container my-10 d-flex justify-content-around align-items 
            flex-wrap mx-10">
                <Card />
            </div>
        </div>

        
        
    );
}

export default CardsContainer
