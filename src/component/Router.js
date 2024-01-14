import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Counter from './Counter';


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/counter" element={<Counter />} />
      
    </Routes>
  );
};

export default Router;
