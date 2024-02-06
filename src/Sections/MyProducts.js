import React from 'react';
import Container from "../Layout/Container"
import CardsContainer from '../Components/CardsContainer/CardsContainer';

const MyProducts = () => {
    return (
        <div className='bg-background '>
            <Container>
                <div className='my-24 mx-12'>
                    <div>
                        <h1 className="text-center text-accent font-bold mt-8 text-3xl font-heading ">Our Menu</h1>
                        <p className='text-center text-text font-body font-medium text-xl mt-4'>It's All Starts From Here</p>
                    </div>
                    <div className='mx-8 my-8'>
                        <CardsContainer />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default MyProducts
