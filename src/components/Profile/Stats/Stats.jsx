import PropTypes from 'prop-types';
import { StatsBox, StatsItem, StatsText } from './Stats.styled';

export const Stats = ({ stats }) => {
  return (
    <StatsBox>
      <StatsItem>
        <StatsText>Followers</StatsText>
        <StatsText>{stats.followers}</StatsText>
      </StatsItem>
      <StatsItem>
        <StatsText>Views</StatsText>
        <StatsText>{stats.views}</StatsText>
      </StatsItem>
      <StatsItem>
        <StatsText>Likes</StatsText>
        <StatsText>{stats.likes}</StatsText>
      </StatsItem>
    </StatsBox>
  );
}

Stats.propTypes = {
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
  })
}