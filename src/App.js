import React from 'react';
import CreateNewFeedbackPage from './pages/CreateNewFeedbackPage';

import { Routes, Route } from "react-router-dom";
import DashboardPage from './pages/DashboardPage';
import SingleThreadPage from './pages/SingleThreadPage';
import EditFeedbackPage from './pages/EditFeedbackPage';

const App = () => {
  return (

    <Routes>

      <Route path='/' element={<DashboardPage />}>
      </Route>
      <Route path='/feedback' element={<SingleThreadPage />} />
      <Route path='/add-feedback' element={<CreateNewFeedbackPage />} />
      <Route path='/edit' element={<EditFeedbackPage />} />



    </Routes>
  );
}

export default App;




