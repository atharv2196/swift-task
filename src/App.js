import React, { useState } from 'react';
import './App.css';

// Importing all necessary icons from react-icons
import {
  FaHome, FaTasks, FaWallet, FaLayerGroup, FaTools, FaCog, FaSignOutAlt, FaGasPump,
  FaFileAlt, FaLock, FaDiscord, FaDownload, FaUser, FaCalendar, FaReceipt, FaTimesCircle,
  FaEthereum, FaFilter, FaSearch, FaClock, FaPlus, FaArrowRight
} from 'react-icons/fa';
import { SiSolana } from 'react-icons/si';


// --- IMAGE IMPORTS ---
// Make sure you have these images in your src folder
import logo from './logo.png';
import mekaverse from './mekaverse.png';
import doodles from './doodles.png';
import mekaverse_avatar from './mekaverse_avatar.png'; // Assuming a separate avatar image
import doodles_avatar from './doodles_avatar.png';   // Assuming a separate avatar image

// --- SIDEBAR ---
function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FaHome size={20} /> },
    { id: 'tasks', label: 'Tasks', icon: <FaTasks size={20} /> },
    { id: 'wallets', label: 'Wallets', icon: <FaWallet size={20} /> },
    { id: 'bulk-actions', label: 'Bulk Actions', icon: <FaLayerGroup size={20} /> },
    { id: 'tools', label: 'Tools', icon: <FaTools size={20} /> },
    { id: 'settings', label: 'Settings', icon: <FaCog size={20} /> }
  ];

  return (
    <div className="sidebar">
      <div>
        <div className="sidebar-header">
          <img src={logo} alt="Swift Logo" style={{ width: 48, height: 48 }} />
          <div className="logo-text">SWIFT</div>
        </div>
        <nav className="nav-menu">
          {menuItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <span>{item.label}</span>
              {item.icon}
            </button>
          ))}
        </nav>
        <SocialsCard />
        <GasTracker />
      </div>
      <UserProfile />
    </div>
  );
}

function SocialsCard() {
    return (
        <div className="socials-card">
            <button><FaFileAlt /></button>
            <button><FaLock /></button>
            <button><FaDiscord /></button>
            <button><FaDownload /></button>
        </div>
    );
}

function GasTracker() {
  return (
    <div className="card-container gas-tracker">
        <div className="card-header">
            <h4>Gas Tracker</h4>
            <FaGasPump />
        </div>
        <div className="gas-prices">
            <div className="gas-price-item">
                <div className="label">Rapid Price:</div>
                <div className="value">2341.1 <span>GWEI</span></div>
            </div>
            <div className="gas-price-item">
                <div className="label">Base Fee:</div>
                <div className="value">2341.1 <span>GWEI</span></div>
            </div>
        </div>
        <div className="last-block">
            <span className="dot"></span>
            Last Block: 12 seconds ago
        </div>
    </div>
  );
}

function UserProfile() {
    return (
        <div className="user-profile">
            <div className="user-avatar-square">B</div>
            <div className="user-info">
                <div className="user-name">Boss-1#8087</div>
                <div className="user-status">Authenticated</div>
            </div>
            <button className="icon-button"><FaSignOutAlt /></button>
        </div>
    );
}


// --- MAIN DASHBOARD CONTENT (COLUMN 2) ---

// --- In App.js, replace the existing Dashboard, UserInfoCard, and Stats functions ---

function Dashboard() {
  return (
    <div className="main-dashboard">
      <div className="welcome-header">
        <div>
          <h1><span className="welcome-underline">Welcome</span> back to SWIFT !</h1>
          <p>Hey <span className="highlight-text">Boss-1!</span> Check your dashboard for your latest statistics</p>
        </div>
        <div className="header-avatar">B</div>
      </div>
      <div className="dashboard-grid">
        <UserInfoCard />
        <Stats />
      </div>
      <UpcomingReleases /> {/* This component can remain as it was before */}
    </div>
  )
}

function UserInfoCard() {
  return (
    <div className="card-container user-info-card">
      <div className="stats-tabs">
        <button className="active">User Information</button>
        <button>Chart Statistic</button>
      </div>
      <div className="user-details-header">
          <div className="user-avatar-square">B</div>
          <div className="user-info">
              <div className="user-name">Boss-1#8087</div>
              <div className="status-text">NFT verified <span className="verified-dot"></span></div>
          </div>
          <button className="icon-button arrow-btn"><FaArrowRight /></button>
      </div>
      <div className="user-details-row">
        <div>
          <span className="label">User Since</span>
          <p>12-03-2022</p>
        </div>
        <div>
          <span className="label">Membership Type</span>
          <p>Monthly</p>
        </div>
      </div>
      <div className="renewal-card">
        <div className="renewal-icon"><FaCalendar /></div>
        <div className="renewal-info">
          <span className="renewal-days">21</span>
          <span className="renewal-text">Days<br />till next renew</span>
        </div>
        <div className="price-pill">
          <FaEthereum /> 0.2 <span className="price-pill-subtext">per month</span>
        </div>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className="stats-grid">
      <div className="stat-card large-stat gradient-purple">
        <div className="stat-icon-wrapper"><FaLock /></div>
        <div className="stat-text">
          <p>Included Transactions</p>
          <span className="stat-value">21</span>
        </div>
      </div>
      <div className="stat-card large-stat dark-bg">
        <div className="stat-icon-wrapper red"><FaTimesCircle /></div>
         <div className="stat-text">
          <p>Reverted Transactions</p>
          <span className="stat-value">21</span>
        </div>
      </div>
      <div className="stat-card small-stat">
        <p>Total SOL</p>
        <div className="stat-value-small">
          <SiSolana /> 12.211
        </div>
      </div>
      <div className="stat-card small-stat">
        <p>Total ETH</p>
        <div className="stat-value-small">
          <FaEthereum /> 12.211
        </div>
      </div>
    </div>
  )
}

function UpcomingReleases() {
    const releases = [
      { name: 'MekaVerse Collection', date: 'March 12, 2022', time: '11:00 AM EST', price: '3 SOL', image: mekaverse, marketplace: 'MagicEden' },
      { name: 'Doodles Collection', date: 'March 12, 2022', time: '11:00 AM EST', price: '3 SOL', image: doodles, marketplace: 'MagicEden' }
    ];

    return(
        <div className="upcoming-releases">
            <div className="card-header">
                <h2>Upcoming Releases</h2>
                <div className="controls">
                    <div className="search-wrapper">
                        <FaSearch />
                        <input type="text" placeholder="Search Release or Date" />
                    </div>
                    <div className="release-toggle">
                        <button className="active">SOL</button>
                        <button>ETH</button>
                    </div>
                </div>
            </div>
            <div className="releases-grid">
                {releases.map(release => (
                    <div className="release-card" key={release.name}>
                        <img src={release.image} alt={release.name} className="release-bg" />
                        <div className="release-overlay">
                            <div className="release-avatar-wrapper">
                                <img src={release.image === mekaverse ? mekaverse_avatar : doodles_avatar} alt={`${release.name} avatar`} className="release-avatar" />
                            </div>
                            <div className="release-card-info">
                                <h3>{release.name} <span className="marketplace-tag">{release.marketplace} MΣ</span></h3>
                                <p><FaClock /> {release.date} <br/> {release.time}</p>
                            </div>
                            <div className="release-card-actions">
                                <div className="price-pill dark">{release.price}</div>
                                <button className="create-task-btn"><FaPlus/> Create Tasks</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// --- RECENT ACTIVITY (COLUMN 3) ---
function RecentActivity() {
  const activities = [
    { title: 'Mekaverse #1234', profit: '+12.5 ETH', price: '($72,121.22)', date: '11th March', time: '11:23:11 AM', status: 'Successfully Sold Item!', type: 'success', avatar: mekaverse_avatar },
    { title: 'Mekaverse #1234', profit: '--', price: '(0)', date: '11th March', time: '11:23:11 AM', status: 'Transaction Failed!', type: 'failed', avatar: mekaverse_avatar },
    { title: 'Mekaverse #1234', profit: '+12.5 ETH', price: '($72,121.22)', date: '11th March', time: '11:23:11 AM', status: 'Successfully Minted Item!', type: 'minted', avatar: doodles_avatar },
    { title: 'Mekaverse #1234', profit: '0.34 ETH', price: '($72,121.22)', date: '11th March', time: '11:23:11 AM', status: 'Item Listed on OpenSea', type: 'listed', avatar: doodles_avatar },
  ];

  return (
    <div className="recent-activity-feed">
      <div className="card-header">
        <div>
            <h2>Recent Activity</h2>
            <p>Check your latest activities</p>
        </div>
        <button className="icon-button filter-btn"><FaFilter /></button>
      </div>
      <a href="#" className="search-link">Search Activity or Date</a>
      
      <div className="activity-list">
        {activities.map((activity, index) => (
          <div key={index} className="activity-item">
            <img src={activity.avatar} alt="Avatar" className="activity-avatar"/>
            <div className="activity-info">
              <div className="activity-row">
                <span className="activity-title">{activity.title}</span>
                <div className="activity-profit">
                  <span className={`profit-pill ${activity.type}`}>{activity.profit}</span>
                  <span className="price">{activity.price}</span>
                </div>
              </div>
              <div className="activity-row">
                <span className="activity-date">{activity.date} {activity.time}</span>
                <div className={`activity-status ${activity.type}`}>{activity.status}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


// --- MAIN APP COMPONENT ---
function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  return (
    <div className="app">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        {activeTab === 'dashboard' ? (
          <Dashboard />
        ) : (
          <div className="card-container">
            <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
            <p>Functionality coming soon...</p>
          </div>
        )}
      </main>
      <RecentActivity />
    </div>
  );
}

export default App;

