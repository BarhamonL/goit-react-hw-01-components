import React from 'react';
import Profile from './profile/Profile';
import user from './profile/user.json';
import FriendList from './friendList/FriendList';
import friends from './friendList/friends.json';
import Statistics from './statistics/Statistics';
import statisticalData from './statistics/statisticalData.json';
import TransactionHistory from './transactionHistory/TransactionHistory';
import transactions from './transactionHistory/transactions.json';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.container}>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
