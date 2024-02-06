import React from 'react';
import img1 from '../../images/chicken_chettinad.jpg';

const CardsContainer = () => {
    return (
        <div className=''>
            <h1 className="text-left font-heading text-primary font-bold text-3xl mt-5">Category :</h1>
            <div class="container my-10 d-flex justify-content-around align-items 
            flex-wrap mx-10">
                <div class="bg-[#252525] w-[350px] h-[255px] flex-col gap-6 p-4" >
                    <img src={img1} class=" m-4" width={222} alt="Food Category"/>
                    <div class="card-body">
                        <h5 class="card-title text-center fs-4 fw-bold">Food & Drink</h5>
                        <a href="#" class="btn btn-primary w-75 mx-auto mb-3">View More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsContainer
