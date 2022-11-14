import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import ThreadsList from './components/ThreadsList';
import ThreadPage from './components/ThreadPage';
import CreateNewFeedbackPage from './pages/CreateNewFeedbackPage';

import { Routes, Route } from "react-router-dom";
import DashboardPage from './pages/DashboardPage';

const App = () => {
  return (

    <Routes>
      <Route path='/' element={<DashboardPage />} />
      <Route path='/add-feedback' element={<CreateNewFeedbackPage />} />

    </Routes>
  );
}

export default App;




