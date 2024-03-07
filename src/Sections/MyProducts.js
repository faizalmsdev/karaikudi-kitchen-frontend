import React, { useState, useEffect } from 'react';
import CardsContainer from '../Components/CardsContainer/CardsContainer';

const MyProducts = ({isSmallScreen}) => {
    const [categories, setCategories] = useState([]);
    const [data, setData] = useState([]);
    // console.log(categories,"jjj")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://karaikudi-kitchen-backend.onrender.com/api/v1/menu');
                const responseData = await response.json();
                const menuData = responseData.data.menu;

                setData(menuData);

                // Extract unique categories using Set
                const uniqueCategories = new Set(menuData.map(item => item.category));
                setCategories(Array.from(uniqueCategories)); // Convert Set back to array
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className='bg-background  py-1'>
                <div className=''>
                    <div>
                        <h1 className="text-center text-primary font-bold mt-8 text-3xl font-heading ">Our Menu</h1>
                        <p className='text-center text-text font-body font-medium text-xl mt-4'>It's All Starts From Here</p>
                    </div>
                    <div className='md:m-8 m-3'>
                        {categories.length > 0 && categories.map(category => (
                            <CardsContainer key={category} category={category} data={data} />
                        ))}
                    </div>
                </div>
        </div>
    )
}

export default MyProducts;
