import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Counter from './Counter';
import Reg from './Reg';
import Home from './Home';





const Routerss = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/registration" element={<Reg />} />
      <Route path="/" element={<Home />} />
      
    </Routes>
  );
};

export default Routerss;
