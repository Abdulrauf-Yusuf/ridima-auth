import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import History from './pages/History/History';
import Wallet from './pages/Wallet/Wallet';
import Rates from './pages/Rates/Rates';
import Settings from './pages/Settings/Settings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/history" element={<History />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Dashboard />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
