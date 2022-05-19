import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Task from '../pages/Task';

function Router() {
  return (
    <Routes>
      <Route path='/' element={ <Navigate to='/tasks' /> } />
      <Route path='/tasks' element={ <Task /> } />
    </Routes>
  );
}

export default Router;
