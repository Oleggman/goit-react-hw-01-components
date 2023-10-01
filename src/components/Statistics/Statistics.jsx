import PropTypes from 'prop-types';
import { StatList } from "./StatList/StatList";
import { StatisticsBox, StatTitle } from './Statistics.styled';
  
export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsBox>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList stats={stats} />
    </StatisticsBox>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number
  })).isRequired
}