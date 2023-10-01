import { HistoryTHead, HistoryTHeadRow } from "./HistoryTableHead.styled";

export const HistoryTableHead = () => {
  return (
    <HistoryTHead>
      <tr>
        <HistoryTHeadRow>Type</HistoryTHeadRow>
        <HistoryTHeadRow>Amount</HistoryTHeadRow>
        <HistoryTHeadRow>Currency</HistoryTHeadRow>
      </tr>
    </HistoryTHead>
  );
}