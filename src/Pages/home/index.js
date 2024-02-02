import React from 'react';
import Layout from '../../Layout/index';
import Hero from '../../Sections/Hero';

const index = () => {
    return (

            <Layout activePage={"home"}>
                <div className='bg-white h-[30rem]'>
                    <Hero/>
                </div>
            </Layout>

        
    )
}

export default index
