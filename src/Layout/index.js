import React from 'react'
import Header from '../Components/TB/Header';
import Footer from '../Components/TB/Footer';
import navLinks from '../Functions/navLinks';

const index = ({children }) => {
    return (
        <div className=''>
            <Header navLinks= {navLinks} />
                {children }
            <Footer />
        </div>
    )
}

export default index
