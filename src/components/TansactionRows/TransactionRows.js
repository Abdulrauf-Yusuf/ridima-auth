import React from 'react';
import './TransactionRows.css';

const TransactionRow = ({ icon, vendor, date, time, amount, status }) => (
  <div className="transaction-row">
    <div className="transaction-icon">
      <img src={icon} alt={vendor} />
    </div>
    <div className="transaction-vendor">{vendor}</div>
    <div className="transaction-date">{date}</div>
    <div className="transaction-time">{time}</div>
    <div className="transaction-amount">{amount}</div>
    <div className={`transaction-status ${status.toLowerCase()}`}>{status}</div>
  </div>
);

export default TransactionRow;







