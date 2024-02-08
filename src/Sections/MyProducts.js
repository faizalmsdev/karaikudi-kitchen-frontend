import React, { useState, useEffect } from 'react';
import Container from "../Layout/Container"
import CardsContainer from '../Components/CardsContainer/CardsContainer';

const MyProducts = () => {
    const [categories, setCategories] = useState([]);
    const [data , setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://karaikudi-kitchen-backend.onrender.com/api/v1/menu');
                const data = await response.json();
                setData(data.data.menu);
                // console.log(data.data.menu);
                setCategories(data.data.menu.map(item => item.category));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='bg-background'>
            <Container>
                <div className='my-24'>
                    <div>
                        <h1 className="text-center text-primary font-bold mt-8 text-3xl font-heading ">Our Menu</h1>
                        <p className='text-center text-text font-body font-medium text-xl mt-4'>It's All Starts From Here</p>
                    </div>
                    <div className='my-8'>
                        {categories.length > 0 && categories.map(category => (
                            <CardsContainer key={category} category={category} data={data} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default MyProducts;
