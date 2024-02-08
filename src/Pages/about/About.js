import React from 'react';
import Layout from "../../Layout/index"
import "./About.css"

const About = () => {
    return (
        <div>
            <Layout activePage={"about"}>
                <div className="about">
                    <div className="abouthead">
                        <h1 class="text-5xl font-design font-semibold leading-snug">About Us</h1>
                    </div>
                    <div className="container-size">

                        <div className="about-left">
                           <img src={require('../../images/about-pic.avif')} alt="" /> 
                        </div>

                        <div className="about-right">
                            <h4 class='leading-snug'>
                            Welcome to Kaarai Kudi Kitchen, a culinary haven where tradition meets innovation. Inspired by the vibrant flavors of Tamil Nadu, our dishes are crafted with care and attention to detail. From our handpicked ingredients to our authentic recipes, each creation embodies the essence of South Indian cuisine. Step into our cozy ambiance, where friends and family gather to share laughter and create cherished memories. Come experience the magic of Kaarai Kudi Kitchen, where every bite tells a story of heritage and flavor.</h4>
                            <h1 class="text-4xl font-design font-semibold leading-snug">Reach to Us</h1>
                            <div className="thirdpartyorders">
                            <img src={require('../../images/swiggy.png')} alt="" /> 
                            <img src={require('../../images/zomato.png')} alt="" /> 

                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default About
