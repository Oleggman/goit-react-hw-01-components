import PropTypes from 'prop-types';
import { Friend, Status, Avatar, Username } from './FriendListItem.styled';

export const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <Friend>
      <Status $isOnline={isOnline} />
      <Avatar src={avatar} alt="User avatar"/>
      <Username>{name}</Username>
    </Friend>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
}