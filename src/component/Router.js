import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Counter from './Counter';
import Reg from './Reg';
import Home from './Home';
import AboutUs from './AboutUs';
import Contact from './Contact';





const Routerss = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/registration" element={<Reg />} />
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      
    </Routes>
  );
};

export default Routerss;
