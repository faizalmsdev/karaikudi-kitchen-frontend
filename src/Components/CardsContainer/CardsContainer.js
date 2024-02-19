import React, { useState, useEffect } from 'react';
import Card from './Card';
import "./template.css";

const CardsContainer = ({ category, data }) => {
    const [categoryData, setCategoryData] = useState([]);
    const baseURL = process.env.REACT_APP_URL;
    // console.log(baseURL , "base")
    const fetchData = async () => {
        let url;
        switch (category) {
            case 'popular-choice':
                url = `${baseURL}/api/v1/menu/popular-choice/`;
                console.log(url);
                break;
            case 'people-favorite':
                url = `${baseURL}/api/v1/menu/people-favorite/`;
                console.log(url);
                break;
            case 'high-selling':
                url = `${baseURL}/api/v1/menu/high-selling/`;
                console.log(url);
                break;
            default:
                url = ''; // Default to empty string or handle error
        }
        try {
            const response = await fetch(url);
            if (response.ok) {
                const jsonData = await response.json();
                console.log('Fetched data:', jsonData.data.menu); // Check its structure
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
        console.log('fetching data');
    }, []); // Fetch data whenever category changes



    let title = category.charAt(0).toUpperCase() + category.slice(1);

    return (
        <div className=''>
            <h1 className="text-left font-highlight text-primary font-bold text-3xl mt-5">{title}</h1>
                <div className='mx-5 flex-row overflow-x-scroll overflow-y-hidden no-horizontal-scrollbar'>
                    {categoryData.map(item => {
                        console.log('Rendering Card component for:', item); // Log the item being rendered
                        return (
                            <div key={item._id} className="my-10 flex gap-2 align-items">
                            {console.log('am inside:', item.dish_name)}
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
                        );
                    })}
                </div>
                

        </div>
    );
}

export default CardsContainer;
