import React from 'react';
import Layout from "../../Layout/index"
import "./About.css";
import swiggyLogo from "../../images/swiggy.png";
import zomato from "../../images/zomato.png";

const About = () => {
    return (
        <div>
            <Layout activePage={"about"}>
                <div className="about">
                    <div className="abouthead">
                        <h1 class="text-5xl text-center font-design font-semibold leading-snug">About Us</h1>
                    </div>
                    <div className="container-size">

                        <div className="about-left">
                           <img src={require('../../images/about-pic.avif')} alt="" /> 
                        </div>

                        <div className="about-right">
                            <h4 class='leading-snug'>
                            Welcome to The KaraiKudi Kitchen, a culinary haven where tradition meets innovation. Inspired by the vibrant flavors of Tamil Nadu, our dishes are crafted with care and attention to detail. From our handpicked ingredients to our authentic recipes, each creation embodies the essence of South Indian cuisine. Step into our cozy ambiance, where friends and family gather to share laughter and create cherished memories. Come experience the magic of Kaarai Kudi Kitchen, where every bite tells a story of heritage and flavor.</h4>
                            <h1 class="text-4xl font-design font-semibold leading-snug text-center">Place Your Order Here </h1>
                            <div className="flex justify-around my-8">
                                <span className=''>
                                    <a href="https://www.swiggy.com/restaurants/the-karaikudi-kitchen-laxmi-nagar-extension-karapakkam-chennai-739890" target="_blank">
                                        <img src={swiggyLogo} width={70} className='ml-5 hover:scale-105 transition-transform duration-300' alt="" />
                                        <h2 className='text-[#E76B08]  mt-3'>Swiggy Delivery</h2>
                                    </a>
                                </span>
                                <span className=''>
                                    <a href="https://www.zomato.com/chennai/the-karaikudi-kitchen-karapakkam" target="_blank">
                                        <img  src={zomato} className='ml-5 hover:scale-105 transition-transform duration-300' width={70} alt="" />
                                        <h2 className='text-[#E23744] mt-3'>Zomato Delivery</h2>
                                    </a>
                                </span>
                            

                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default About
