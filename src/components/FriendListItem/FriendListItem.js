import React from 'react';
import PropTypes from 'prop-types';
import styles from '../friendList/FriendList.module.css';

const FriendListItem = function ({ friend }) {
  const { avatar, name, isOnline } = friend;
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.onLine : styles.offLine}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  friend: PropTypes.exact({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
export default FriendListItem;
