import React, { useEffect, useState } from 'react';
import Layout from '../../Layout/index';
import Hero from '../../Sections/Hero';
import Main from '../../Sections/Main';
import MyProducts from '../../Sections/MyProducts';
import Testimonials from '../../Sections/Testimonials';

const Index = ({isSmallScreen}) => {
    
    return (
        <Layout activePage={"home"}>
            <div className='bg-white '>
                <Hero isSmallScreen={isSmallScreen} />
            </div>
            <div>
                <Main isSmallScreen={isSmallScreen} />
                <MyProducts isSmallScreen={isSmallScreen} />
            </div>
            <div className=''>
                <Testimonials />
            </div>
        </Layout>
    );
};

export default Index;
