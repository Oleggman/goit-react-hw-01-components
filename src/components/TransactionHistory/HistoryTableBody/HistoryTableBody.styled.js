import styled from "styled-components";

export const HistoryTBodyRow = styled.tr`
  background-color: white;
  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  &:not(:last-child) {
    border-bottom: 2px solid rgba(0, 43, 54, .2);
  }
  &:last-of-type {
    border-bottom: 5px solid #009879;
  }
`;

export const HistoryTBodyData = styled.td`
  padding: 10px 8px;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;