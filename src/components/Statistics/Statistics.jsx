import PropTypes from 'prop-types';
import { StatList } from "./StatList/StatList";
  
export const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <StatList stats={stats} />
    </section>
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