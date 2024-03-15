import './App.css';
import { Navigate, Route, Routes } from "react-router";
import Home from './Pages/home/index';
import Contact from './Pages/contactus/Contact';
import About from './Pages/about/About';
import Menu from './Pages/menu/Menu';
import { ChakraProvider } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';


function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsSmallScreen(true);
            } else {
                setIsSmallScreen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
    <ChakraProvider>
      <Routes>
        <Route path='*' element={<Navigate to={"/"} /> } />
        <Route path="/" element={<Home isSmallScreen={isSmallScreen}/>} />
        <Route path='/Contact-us' element={ <Contact  isSmallScreen={isSmallScreen}/> } />
        <Route path='/About' element={ <About /> } />
        <Route path='/Menu' element={<Menu />} />
      </Routes>
      
    </ChakraProvider>
  );
}

export default App;
