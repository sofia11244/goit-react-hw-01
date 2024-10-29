// src/App.jsx
import './App.css';
import userData from './data/userData.json';
import friendsData from './data/friendsData.json';
import transaction from './data/transaction.json';

import React from 'react';
import ReactDOM from 'react-dom/client';

import Profile from './components/ProfileFile/Profile.jsx';
import FriendList from './components/FriendListFile/FriendList.jsx';
import TransactionHistory from './components/TransactionHistoryFile/TransactionHistory.jsx';

const App = () => {
  const user = userData[0];
  return (
    <> 
      {/* Profile Section */}
      <div id="profile-section"> 
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>

      {/* Friends Section */}
      <div id="friends-section">
        <FriendList friends={friendsData} />
      </div>

      {/* Transactions Section */}
      <div id="history-section">
        <TransactionHistory items={transaction} />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
