import React from 'react';
import CreateNewFeedbackPage from './pages/CreateNewFeedbackPage';

import { Routes, Route } from "react-router-dom";
import DashboardPage from './pages/DashboardPage';
import SingleThreadPage from './pages/SingleThreadPage';
import EditFeedbackPage from './pages/EditFeedbackPage';
import RoadmapPage from './pages/RoadmapPage';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const App = () => {
  return (

    <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />



      <Route path='/' element={<DashboardPage />}>
      </Route>
      <Route path='/roadmap' element={<RoadmapPage />} />

      <Route path='/feedback/:id' element={<SingleThreadPage />} />
      <Route path='/add-feedback' element={<CreateNewFeedbackPage />} />
      <Route path='/update/:id' element={<EditFeedbackPage />} />

    </Routes>
  );
}

export default App;




