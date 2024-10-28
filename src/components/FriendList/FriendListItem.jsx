import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

export default function FriendListItem ({ avatar, name, isOnline }) {
    return (
        <div className={styles.friend}>
          <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
          <p className={styles.name}>{name}</p>
          <p className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}>
            {isOnline ? 'Online' : 'Offline'}
          </p>
        </div>
      );
    };

    FriendListItem.propTypes = {
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    };
    
    export {FriendListItem};

