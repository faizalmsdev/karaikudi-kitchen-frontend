import React from 'react'
import Header from '../Components/TB/Header';
import Footer from '../Components/TB/Footer';
import navLinks from '../Functions/navLinks';

const index = ({Children}) => {
    return (
        <div className=''>
            <Header navLinks= {navLinks} />
                {Children}
            <Footer />
        </div>
    )
}

export default index
