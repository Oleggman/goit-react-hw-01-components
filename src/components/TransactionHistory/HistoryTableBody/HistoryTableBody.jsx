import PropTypes from "prop-types";
import { HistoryTBodyRow, HistoryTBodyData } from "./HistoryTableBody.styled";

export const HistoryTableBody = ({ items }) => {
  return (
    <tbody>
      {items.map(({ id, type, amount, currency }) => 
        <HistoryTBodyRow key={id}>
          <HistoryTBodyData>{type}</HistoryTBodyData>
          <HistoryTBodyData>{amount}</HistoryTBodyData>
          <HistoryTBodyData>{currency}</HistoryTBodyData>
        </HistoryTBodyRow>
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