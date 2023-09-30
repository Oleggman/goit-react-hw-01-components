import PropTypes from 'prop-types';
import { Description } from "components/Description/Description";
import { Stats } from "components/Stats/Stats";

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <Description username={username} tag={tag} location={location} avatar={avatar} />
      <Stats stats={stats} />
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  })
}