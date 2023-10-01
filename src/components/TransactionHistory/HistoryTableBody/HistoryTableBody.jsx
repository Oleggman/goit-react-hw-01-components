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