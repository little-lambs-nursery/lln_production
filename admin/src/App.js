import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CommonRoutes from './CommonRoutes';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function App() {

  return (
          <Router>
            <Routes>
              <Route path="/*" element={<CommonRoutes />} />
            </Routes>
          </Router>
  );
}

export default App
