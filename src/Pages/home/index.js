import React from 'react';
import Layout from '../../Layout/index';
import Hero from '../../Sections/Hero';
import Main from '../../Sections/Main';
import MyProducts from '../../Sections/MyProducts';

const index = () => {
    return (

            <Layout activePage={"home"}>
                <div className='bg-white '>
                    <Hero/>
                </div>
                <div>
                    <Main />
                    <MyProducts />
                </div>
            </Layout>

        
    )
}

export default index
