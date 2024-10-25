import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.wraperProfile}>
      <div className={css.wraper}>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.text}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.wraperStats}>
        <li className={css.wraperItem}>
          <span>Followers </span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.wraperItem}>
          <span>Views </span>
          <span>{stats.views}</span>
        </li>
        <li className={css.wraperItem}>
          <span>Likes </span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
