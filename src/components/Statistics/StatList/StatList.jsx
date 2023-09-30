import PropTypes from 'prop-types';

export const StatList = ({ stats }) => {
  return (
    <ul>
      {stats.map(stat => 
        <li key={stat.id}>
          <span>{stat.label}</span>
          <span>{stat.percentage}</span>
        </li>
        )}
    </ul>
  );
}

StatList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    percentage: PropTypes.number
    })).isRequired
}