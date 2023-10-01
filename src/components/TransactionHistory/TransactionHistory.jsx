import PropTypes from "prop-types";
import { HistoryTableHead } from "./HistoryTableHead/HistoryTableHead";
import { HistoryTableBody } from "./HistoryTableBody/HistoryTableBody";
import { HistoryTable } from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
  return (
    <HistoryTable>
      <HistoryTableHead />
      <HistoryTableBody items={items} />
    </HistoryTable>
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