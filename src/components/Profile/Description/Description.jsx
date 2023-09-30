import PropTypes from 'prop-types';
import { DescriptionBox, ProfileImage, DescriptionText, Username } from './Description.styled';

export const Description = ({ username, tag, location, avatar, stats }) => {
  return (
    <DescriptionBox>
      <ProfileImage src={avatar} alt={username} />
      <Username >{username}</Username>
      <DescriptionText >@{tag}</DescriptionText>
      <DescriptionText >{location}</DescriptionText>
    </DescriptionBox>
  );
}

Description.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
}