import React from 'react'
import Container from '../../Layout/Container';
import logo from "../../utils/logo.png"

const Footer = () => {
    return (
        <div className='w-100%  bg-slate-300 h-10'>
            <Container >
                <div className=" ">
                    <img src={logo} alt="foooter_logo"  width={32}/>
                </div>
            </Container>
        </div>
    )
}

export default Footer
