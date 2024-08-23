

import React from 'react'
import TransactionRow from '../TansactionRows/TransactionRows'
import transactions from '../TransactionData/TransactionData'

import './TransactionTable.css'
export default function TransactionTable() {
  return (
    <div className="transaction-table">
      <div className="transaction-tabs">
        <div className="tab">Successful</div>
        <div className="tab">Pending</div>
        <div className="tab active">Rejected</div>
      </div>
      <div className="transaction-header">
        <div>Recent Transactions</div>
      </div>
      <div className="transaction-rows">
        {transactions.map((transaction, index) => (
          <TransactionRow key={index} {...transaction} />
        ))}
      </div>
    </div>
  )
}
