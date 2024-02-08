import './App.css';
import { Navigate, Route, Routes } from "react-router";
import Home from './Pages/home/index';
import Contact from './Pages/contactus/Contact';
import About from './Pages/about/About';
import Menu from './Pages/menu/Menu';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path='*' element={<Navigate to={"/"} /> } />
        <Route path="/" element={<Home />} />
        <Route path='/Contact-us' element={ <Contact /> } />
        <Route path='/About' element={ <About /> } />
        <Route path='/Menu' element={<Menu />} />
      </Routes>
      
    </ChakraProvider>
  );
}

export default App;
