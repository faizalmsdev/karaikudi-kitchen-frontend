import React from 'react';
import Layout from "../../Layout/index"
import Container from '../../Layout/Container';

const Contact = () => {
    return (
        <div>
            <Layout activePage={"contact"}>
                <Container>
                    <div className='flex flex-col  '>
                        <h1 className='text-center my-14'>Feel Free To Contact Us</h1>

                        <div className='flex justify-around bg-secondary py-10 h-[20rem] mb-28'>
                            <div className='flex flex-col justify-between'>

                                <div>
                                    <span>
                                        icon
                                    </span>
                                    <span>
                                        address
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        telephone
                                    </span>
                                    <span>
                                        number
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        email
                                    </span>
                                    <span>
                                        mail id
                                    </span>
                                </div>

                            </div>

                            <div>
                                map
                            </div>
                        </div>
                    </div>
                </Container>
            </Layout>
        </div>
    )
}

export default Contact
