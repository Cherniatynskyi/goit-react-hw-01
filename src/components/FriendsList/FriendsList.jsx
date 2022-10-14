import css from './FriendsList.module.css';
import PropTypes from 'prop-types'

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friend_list}>
            {friends.map(friends => (
            <li key={friends.id} className={css.item}>
                <span className={`${css.status} ${css[friends.isOnline]}`}>{friends.isOnline}</span>
                <img className={css.avatar} src={friends.avatar} alt="User avatar" width="68" />
                <p className={css.name}>{friends.name}</p>
            </li>
        ))}
    </ul>
    );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  
}
