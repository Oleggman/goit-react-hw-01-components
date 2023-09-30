import PropTypes from 'prop-types';
import { Description } from "components/Profile/Description/Description";
import { Stats } from "components/Profile/Stats/Stats";
import { ProfileCard } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description username={username} tag={tag} location={location} avatar={avatar} />
      <Stats stats={stats} />
    </ProfileCard>
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