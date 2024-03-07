import React, { useEffect, useState } from 'react';
import Layout from '../../Layout/index';
import Hero from '../../Sections/Hero';
import Main from '../../Sections/Main';
import MyProducts from '../../Sections/MyProducts';

const Index = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsSmallScreen(true);
            } else {
                setIsSmallScreen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Layout activePage={"home"}>
            <div className='bg-white '>
                <Hero isSmallScreen={isSmallScreen} />
            </div>
            <div>
                <Main isSmallScreen={isSmallScreen} />
                <MyProducts isSmallScreen={isSmallScreen} />
            </div>
        </Layout>
    );
};

export default Index;
