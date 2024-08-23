import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import log from '../../assets/ridimaLogo.png';
import profile from '../../assets/placeholder.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faHistory, faWallet, faChartLine, faCog, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="sidebar">
      <div className="profile">
        <img src={log} alt="Profile" />
        <div className="profile-card">
          <div className="card-image">
            <img src={profile} alt="profile" />
          </div>
          <div className="card-content">
            <p>Hi, <strong>John</strong></p>
            <p>john@example.com</p>
          </div>
          <div className="card-icon">
            <Link to="#">
              <FontAwesomeIcon icon={faCaretDown} className="custom-icon" />
            </Link>
          </div>
        </div>
      </div>
      <nav>
        <ul>
          <li className={location.pathname === "/dashboard" ? "active" : ""}>
            <Link to="/dashboard">
              <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" fixedWidth /> Dashboard
            </Link>
          </li>
          <li className={location.pathname === "/history" ? "active" : ""}>
            <Link to="/history">
              <FontAwesomeIcon icon={faHistory} className="nav-icon" fixedWidth /> History
            </Link>
          </li>
          <li className={location.pathname === "/wallet" ? "active" : ""}>
            <Link to="/wallet">
              <FontAwesomeIcon icon={faWallet} className="nav-icon" fixedWidth /> Wallet
            </Link>
          </li>
          <li className={location.pathname === "/rates" ? "active" : ""}>
            <Link to="/rates">
              <FontAwesomeIcon icon={faChartLine} className="nav-icon" fixedWidth /> Rates
            </Link>
          </li>
          <li className={location.pathname === "/settings" ? "active" : ""}>
            <Link to="/settings">
              <FontAwesomeIcon icon={faCog} className="nav-icon" fixedWidth /> Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
















