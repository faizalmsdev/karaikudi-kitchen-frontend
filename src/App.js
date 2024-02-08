import './App.css';
import { Navigate, Route, Routes } from "react-router";
import Home from './Pages/home/index';
import Contact from './Pages/contactus/Contact';
import About from './Pages/about/About';
import Menu from './Pages/menu/Menu';

function App() {
  return (
    <>
      <Routes>
        <Route path='*' element={<Navigate to={"/"} /> } />
        <Route path="/" element={<Home />} />
        <Route path='/Contact-us' element={ <Contact /> } />
        <Route path='/About' element={ <About /> } />
        <Route path='/Menu' element={<Menu />} />
      </Routes>
      
    </>
  );
}

export default App;
