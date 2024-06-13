import css from './Profile.module.css';

const Profile = ({ user }) => {
  const {
    username,
    tag,
    avatar,
    location,
    stats: { followers, views, likes },
  } = user;
  return (
    <div className={css.containerWrap}>
      <div className={css.container}>
        <img className={css.userImg} src={avatar} alt="User avatar" />
        <p className={css.title}>{username}</p>{' '}
        <p className={css.subtitle}>@{tag}</p>{' '}
        <p className={css.subtitle}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
