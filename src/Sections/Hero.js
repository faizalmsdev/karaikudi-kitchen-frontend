import React from 'react';
import Container from "../Layout/Container"
import './Hero.css';
import hero from "../images/hero-bg.jpg"
import { CookingPot , Percent } from '@phosphor-icons/react';

const Hero = () => {
    return (
        <div className=' hero'>
            <Container >
                <div className='flex mt-10'>
                    <div className='mx-8 my-8  '>
                        <h1 className='text-[#000000] text-6xl font-heading text-left leading-tight'>Flavors of <span className='text-primary font-design'>Karaikudi</span> , <span className='text-accent font-design'>Delight</span>  of Chennai</h1>
                        <p className="  font-highlight text-2xl  font-medium mt-6 leading-snug">From the heart of Karaikudi to the soul of Chennai – discover the magic of KTCJen</p>
                        <div className='flex gap-5'>
                            <button className='flex leading-snug text-background gap-2 shadow-lg hover:shadow-inner bg-primary px-4 py-2 rounded-md font-body mt-6'>
                                Visit Us <CookingPot size={22} />
                            </button>
                            <button className='flex  gap-2 bg-accent shadow-lg hover:shadow-inner px-4 py-2 rounded-md font-body mt-6'>
                                Get Discount <Percent  size={22} />
                            </button>
                        </div>
                        
                    </div>
                    <div className='mt-2 rounded-md'>
                        <img src={hero} alt="hero-img" className='rounded-md'  />
                    </div>
                </div>
                
            </Container>
        </div>
    )
}

export default Hero
