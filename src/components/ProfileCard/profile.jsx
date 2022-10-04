import css from './profile.module.css';
import PropTypes from 'prop-types'


export const Profile = ({username, avatar, tag, location, stats}) => {
  return (
    <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.stats_item}>
      <span className={css.stat_item_name}>Followers</span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li className={css.stats_item}>
      <span className={css.stat_item_name}>Views</span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li className={css.stats_item}>
      <span className={css.stat_item_name}>Likes</span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>);
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}








