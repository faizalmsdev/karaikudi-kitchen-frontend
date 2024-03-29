import React from 'react';
import Container from "../../Layout/Container";
import logo from "../../utils/logo.png";
import { useState } from 'react';
import Button from '../Buttons/Button';

const Header = ({ navLinks , activePage }) => {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };


    return (
            <header class="bg-background  border-b-[1px] border-b-text   ">
                <nav class="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8 " aria-label="Global">
                    <div class="flex lg:flex-1">
                    <a href="#" class="-m-1.5 p-1.5 gap-5 ">
                    <img class="h-10 w-auto " src={logo} alt="" />
                        {/* <span class=" font-highlight text-heading text-primary font-semibold">The Karaikudi Kitchen</span> */}
                    </a>
                    </div>
                    <div class="flex lg:hidden">
                    <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={toggleMenu}>
                        <span class="sr-only">Open main menu</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    </div>
                    <div class="hidden lg:flex lg:gap-x-12 navs">
                        <a href="/" className={`text-sm font-semibold leading-6 text-gray-900 hover:text-primary ${activePage === 'home' ? 'active-nav' : ''}`}>Home</a>

                        <a href="/Menu" className={`text-sm font-semibold leading-6 text-gray-900 hover:text-primary ${activePage === 'menu' ? 'active-nav' : ''}`}>Menu</a>
                        <a href="/About" className={`text-sm font-semibold leading-6 text-gray-900 hover:text-primary ${activePage === 'about' ? 'active-nav' : ''}`}>About</a>
                        <a href="/Contact-us" className={`text-sm font-semibold leading-6 text-gray-900 hover:text-primary ${activePage === 'contact' ? 'active-nav' : ''}`}>Contact</a>
                    </div>
                    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                    
                        <Button />
                    
                    </div>
                </nav>
                {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
                {isMenuOpen && (
                    <div class="lg:hidden" role="dialog" aria-modal="true">
                        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
                        <div class="fixed inset-0 z-10"></div>
                        <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6    py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div class="flex items-center justify-between">
                            <a href="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">Your Company</span>
                            <img class="h-8 w-auto" src={logo} width={64} alt="" />
                            </a>
                            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={toggleMenu}>
                            <span class="sr-only">Close menu</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            </button>
                        </div>
                        <div class="mt-6 flow-root">
                            <div class="my-6 divide-y divide-gray-500/10">
                            <div class="space-y-2 py-6">
                                
                                <a href="/" class={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-primary ${activePage === 'home' ? 'active-nav' : ''}`}>Home</a>
                                <a href="/Menu" class={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-primary ${activePage === 'menu' ? 'active-nav' : ''}`}>Menu</a>
                                <a href="/About" class={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-primary ${activePage === 'about' ? 'active-nav' : ''}`}>About</a>
                                <a href="/Contact-us" class={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-primary ${activePage === 'contact' ? 'active-nav' : ''}`}>Contact</a>
                            </div>
                            <div class="py-6">
                                <a href="/log-in" class={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-primary`}>Log in</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
            </header>
            
        
    );
};

export default Header;
