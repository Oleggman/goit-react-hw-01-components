import PropTypes from 'prop-types';
import { StatisticsList, StatItem, Label, Percentage } from './StatList.styled';
import getRandomColor from 'utils/random-color';

export const StatList = ({ stats }) => {
  return (
    <StatisticsList>
      {stats.map(stat => 
        <StatItem key={stat.id} color={getRandomColor()}>
          <Label>{stat.label}</Label>
          <Percentage>{stat.percentage}%</Percentage>
        </StatItem>
        )}
    </StatisticsList>
  );
}

StatList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number
    })).isRequired
}