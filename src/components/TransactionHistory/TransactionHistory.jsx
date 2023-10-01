import PropTypes from "prop-types";
import { HistoryTableHead } from "./HistoryTableHead/HistoryTableHead";
import { HistoryTableBody } from "./HistoryTableBody/HistoryTableBody";

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <HistoryTableHead />
      <HistoryTableBody items={items} />
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(
      ["deposit", "withdrawal", "payment", "invoice"]).isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }))
}