import PropTypes from "prop-types";

export const HistoryTableBody = ({ items }) => {
  return (
    <tbody>
      {items.map(({ id, type, amount, currency }) => 
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      )}
    </tbody>
  );
}

HistoryTableBody.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(
      ["deposit", "withdrawal", "payment", "invoice"]).isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }))
}