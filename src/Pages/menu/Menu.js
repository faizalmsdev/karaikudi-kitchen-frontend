import React , {useState , useEffect} from 'react';
import Layout from "../../Layout/index";
import Card from '../../Components/CardsContainer/Card';

const Menu = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://karaikudi-kitchen-backend.onrender.com/api/v1/menu');
                const responseData = await response.json();
                const menuData = responseData.data.menu;

                setData(menuData);
                console.log(menuData ,"menu")
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className='bg-background'>
    <Layout activePage={"menu"}>
        <div className='py-[30px] px-[50px]'>
        <div className='w-full bg-primary h-[120px] rounded-md flex justify-center items-center'>
                <h1 className='text-[#f5f5f5] font-bold text-4xl text-center'>Our Primary Menu</h1>
            </div>
            <div className='md:m-8 m-3'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-4">
                    {data.map(item => (
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
    </Layout>
</div>


    )
}

export default Menu
