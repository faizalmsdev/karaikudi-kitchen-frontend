import React, { useState, useEffect } from 'react';
import Card from './Card';
import "./template.css";

const CardsContainer = ({ category, data }) => {
    const [categoryData, setCategoryData] = useState([]);
    const baseURL = process.env.REACT_APP_URL;

    const fetchData = async () => {
        let url;
        switch (category) {
            case 'popular-choice':
                url = `${baseURL}/api/v1/menu/popular-choice/`;
                break;
            case 'people-favorite':
                url = `${baseURL}/api/v1/menu/people-favorite/`;
                break;
            case 'high-selling':
                url = `${baseURL}/api/v1/menu/high-selling/`;
                break;
            default:
                url = ''; // Default to empty string or handle error
        }
        try {
            const response = await fetch(url);
            if (response.ok) {
                const jsonData = await response.json();
                setCategoryData(jsonData.data.menu);
            } else {
                throw new Error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Fetch data whenever category changes

    let title = category.charAt(0).toUpperCase() + category.slice(1);

    return (
        <div className='h-full pb-7'>
            <h1 className="text-left font-highlight text-primary font-bold text-3xl mt-5">{title}</h1>
            <div className='md:mx-5 overflow-x-scroll overflow-y-hidden no-horizontal-scrollbar'>
                <div className="flex flex-nowrap gap-7 mt-4 overflow-x-scroll overflow-y-hidden" style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
                    {categoryData.map(item => (
                        <div key={item._id} className="mx-2 my-2">
                            <Card
                                dishName={item.dish_name}
                                price={item.price}
                                inStock={item.instock}
                                description={item.description}
                                images={item.images}
                                vgCategory={item.vg_category}
                                discountPrice={item.discount_price}
                                discountPriceAvailable={item.discount_price_available}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CardsContainer;
