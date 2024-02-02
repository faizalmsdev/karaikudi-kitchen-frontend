import React from 'react'
import Header from '../Components/TB/Header';
import Footer from '../Components/TB/Footer';
import navLinks from '../Functions/navLinks';

const index = ({children ,activePage }) => {
    return (
        <div className=''>
            <Header navLinks= {navLinks} activePage={activePage} />
                {children }
            <Footer />
        </div>
    )
}

export default index
