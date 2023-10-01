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
