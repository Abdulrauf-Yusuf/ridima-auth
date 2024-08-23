import React from 'react';
import './Transactions.css';

const Transactions = () => (
  <div className="transactions">
    <h2>Recent Transactions</h2>
    <ul>
      <li>
        <div className="transaction">
          <span>Amazon</span>
          <span>June 4, 2020</span>
          <span>$200</span>
          <span className="status rejected">Rejected</span>
        </div>
      </li>
      {/* More transactions */}
    </ul>
  </div>
);

export default Transactions;
