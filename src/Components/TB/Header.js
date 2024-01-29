import React from 'react';
import Container from "../../Layout/Container";
import logo from "../../utils/logo.png";

const Header = ({ navLinks }) => {
    return (
        <div className='bg-slate-300'>
            <Container>
                <header className="flex flex-wrap justify-between items-center">
                    <div className='navlinks'>
                        <ul className="flex">
                            {navLinks.map((item, index) => (
                                <li key={index} className="mr-4 relative">
                                    <a
                                        href={item.to}
                                        className="hover:text-gray-800 text-lg font-semibold relative"
                                    >
                                        {item.name}
                                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 origin-bottom transition-transform"></div>
                                    </a>
                                    {item.options && (
                                        <ul className="absolute left-0 mt-2 bg-gray-100 border border-gray-200 rounded-lg p-2 hidden">
                                            {item.options.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <a href={subItem.to}>{subItem.name}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex gap-[32px]'>
                        <h1 className="font-body mt-4 font-bold text-2xl text-black">Karaikudi</h1>
                        <img src={logo} width={72} height={62} alt='logo' className="" />
                        <h1 className="font-body mt-4 font-bold text-2xl text-gold-500">Kitchen</h1>
                    </div>

                    <div>
                        <button className='bg-lime-100 p-1 font-design rounded-md'>Enquire</button>
                        <button className='bg-orange-600 p-1 font-design rounded-md ml-8 text-white'>Order Now</button>
                    </div>
                </header>
            </Container>
        </div>
    );
};

export default Header;
