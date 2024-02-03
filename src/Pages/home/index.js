import React from 'react';
import Layout from '../../Layout/index';
import Hero from '../../Sections/Hero';
import Main from '../../Sections/Main';

const index = () => {
    return (

            <Layout activePage={"home"}>
                <div className='bg-white '>
                    <Hero/>
                </div>
                <Main/>
            </Layout>

        
    )
}

export default index
