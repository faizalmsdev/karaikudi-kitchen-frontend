import React from 'react';
import Layout from "../../Layout/index"
import Container from '../../Layout/Container';
import wood from'../../images/wood.png';

const Contact = ({isSmallScreen}) => {
    return (
        <div>
            <Layout activePage={"contact"}>
                <Container>
                {isSmallScreen ? (
                    <div className='flex flex-col h-[90vh]'>
                        <div className="text-5xl text-center flex flex-col font-design font-semibold leading-snug pt-10">
                            <h1 className=''>Contact Us</h1> 
                            <div className="dots flex justify-center mt-2">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        </div>
                        <div className=' flex justify-between items-center flex-col h-[20rem] mb-20 mt-10 '>
                            <div className='flex flex-col items-left py-10 justify-between'>
                                <div className='leading-snug'>  
                                    <p className="mb-4 flex items-center justify-center md:justify-start leading-snug ">
                                        <svg
                                            viewBox="0 0 512 512"
                                            fill="currentColor"
                                            height="1em"
                                            width="5em">
                                            <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z" />
                                        </svg>
                                        1, 47, Rajiv Gandhi Salai, <br></br>Laxmi Nagar Extension, Elcot Sez, Karapakkam, <br></br>Chennai, Tamil Nadu 600097
                                    </p>
                                </div>
                                <div className='leading-snug'>       
                                    <p className="mb-4 flex items-center md:justify-center  leading-snug">
                                        <svg
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                            height="1em"
                                            width="5em">
                                            <path fillRule="evenodd"
                                            d="M1.885.511a1.745 1.745 0 012.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>
                                        +91 9876543210
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-4 flex items-center md:justify-center  leading-snug">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1em"
                                        width="5em">
                                        <path d="M4 8l8 5 8-5-8-5-8 5m18 0v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8c0-.73.39-1.36.97-1.71L12 .64l9.03 5.65c.58.35.97.98.97 1.71z" /></svg>
                                        Karaikudi@example.com
                                    </p>
                                </div>
                            </div>
                            <div className=''>
                                <iframe 
                                className='lg:w-96 w-60 lg:h-80 h-44 lg:float-right '
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.826827806424!2d80.22728547484446!3d12.918849216033122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d66d28e74a7%3A0xf7c2e1fd4d4c0d2c!2sTHE%20KARAIKUDI%20KITCHEN!5e0!3m2!1sen!2sin!4v1707546023177!5m2!1sen!2sin"
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex flex-col'>
                        <div className="text-5xl text-center flex flex-col font-design font-semibold leading-snug pt-10">
                            <h1>Contact Us</h1> 
                            <div className="dots flex justify-center mt-2">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        </div>
                        <div className=' flex justify-between  h-[20rem] mb-28 '>
                            <div className='flex flex-col py-10 justify-between'>
                                <div className='leading-snug'>
                                    <p className="mb-4 flex items-center justify-center md:justify-start leading-snug ">
                                        <svg
                                            viewBox="0 0 512 512"
                                            fill="currentColor"
                                            height="1em"
                                            width="5em">
                                            <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z" />
                                        </svg>
                                        1, 47, Rajiv Gandhi Salai, <br></br>Laxmi Nagar Extension, Elcot Sez, Karapakkam, <br></br>Chennai, Tamil Nadu 600097
                                    </p>
                                </div>
                                <div className='leading-snug'>       
                                    <p className="mb-4 flex items-center justify-center md:justify-start leading-snug">
                                        <svg
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                            height="1em"
                                            width="5em">
                                            <path fillRule="evenodd"
                                            d="M1.885.511a1.745 1.745 0 012.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>
                                        +91 9876543210
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-4 flex items-center justify-center md:justify-start leading-snug">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1em"
                                        width="5em">
                                        <path d="M4 8l8 5 8-5-8-5-8 5m18 0v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8c0-.73.39-1.36.97-1.71L12 .64l9.03 5.65c.58.35.97.98.97 1.71z" /></svg>
                                        Karaikudi@example.com
                                    </p>
                                </div>
                            </div>
                            <div className=''>
                                <iframe 
                                className='w-96 h-80 float-right '
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.826827806424!2d80.22728547484446!3d12.918849216033122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d66d28e74a7%3A0xf7c2e1fd4d4c0d2c!2sTHE%20KARAIKUDI%20KITCHEN!5e0!3m2!1sen!2sin!4v1707546023177!5m2!1sen!2sin"
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                ) }
                    
                </Container>
            </Layout>
        </div>
    )
}

export default Contact;
