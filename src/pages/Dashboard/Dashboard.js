import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCoins, faCircleExclamation, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import btn from '../../assets/btn.png';
import bitCoin from '../../assets/bitcoin.png';
import airtime from '../../assets/airtime.png';
import amazon from '../../assets/amazon.png';
import amazonCard from '../../assets/amazonCard.png';
import Stream from '../../assets/Bitmap.png';
import access from '../../assets/access.png';
import apple from '../../assets/apple.png';
import Vanilla from '../../assets/visa.png';


import Cards from '../../components/Cards/Cards';
import RateCard from '../../components/RateCard/RateCard';
import TransactionTable from '../../components/TransactionTable/TransactionTable';
import './Dashboard.css';

const Dashboard = () => (
  <div className="dashboard">
    <div className="header">
      <div className="title">
        <h2>Dashboard</h2>
      </div>
      <div className="notification">
        <div>
          <p>BITCOIN RATE: ₦460/$1</p>
        </div>
        <div className="bell-container">
          <Link to="/">
            <FontAwesomeIcon icon={faBell} className="bell-icon" fixedWidth />
          </Link>
        </div>
      </div>
    </div>

    <div className="main-content">
      <div className="payment">
        <div className="payment-balance">
          <div>
            <FontAwesomeIcon
              icon={faBitcoin}
              className="bitcoin-icon"
            />
            <h3>824 BTC</h3>
            <p className="wallet-balance">Bitcoin Wallet Balance</p>
            <span>+0.8% than last week</span>
          </div>
          <div>
            <Link>
              <img src={btn} className="change-button" alt="change button" />
            </Link>
          </div>
        </div>
        <div className="payment-notification">
          <div className="coin">
            <FontAwesomeIcon icon={faCoins} className="coin-icon" />
          </div>
          <div className="coin-text">
            <h2>Payment made easy</h2>
            <p>
              You can now pay your bills, buy airtimes and <br />
              pay for utility bills.
            </p>
            <Link to="/" className="learn-more-link">
              Learn more
            </Link>
            <span className="learn-more-arrow">&gt;</span>
          </div>
        </div>
      </div>
      <div className="trade-card-container">
        <Cards title="Sell Bitcoin" bgColor="#298d6c" image={bitCoin} />
        <Cards title="Receive Bitcoin" bgColor="#298d6c" image={bitCoin} />
        <Cards title="Sell Giftcard" bgColor="#2bc5e4" image={amazon} />
        <Cards title="Refill" bgColor="#6d61e0" image={airtime} />
      </div>

      <div className="rate-card-container">
        <div className="rate-left">
          <h2>Quick Withdrawals</h2>
          <div className="bank-details">
            <div className="bank-info">
              <div className="bank-logo">
                <img src={access} alt="access logo" />
              </div>
              <div className="bank-name">
                <div className="bank-text">
                  <h3>Access Bank</h3>
                  <p>0123456789</p>
                </div>
                <div className="checked-icon">
                  <FontAwesomeIcon icon={faCircleCheck} className="check-icon" />
                </div>
              </div>
            </div>
            <form className="withdrawal-form">
              <div className="amount">
                <input type="number" placeholder="Enter Amount" name="amount" />
                <span className="max" style={{marginRight: "5px"}}>Max</span>
              </div>
              <button type="submit" name="withdraw">
                Withdraw Now
              </button>
              <div className="balance-info">
                <span>Your Balance</span>
                <span>₦ 456,345.62</span>
              </div>
            </form>
          </div>
        </div>
        <div className="rate-right">
          <h4>
            Top cards with high rates
            <FontAwesomeIcon icon={faCircleExclamation} className="info-icon" />
          </h4>
          <div className="rate-card">
            <RateCard title="Apple iTunes" price="27,000" image={apple} />
            <RateCard title="Stream" price="27,000" image={Stream} />
            <RateCard title="Amazon" price="27,000" image={amazonCard} />
            <RateCard title="Vanilla" price="27,000" image={Vanilla} />
          </div>
        </div>
      </div>
      <div className="transactions-table-container">
        <TransactionTable />
      </div>
    </div>
  </div>
);

export default Dashboard;

















