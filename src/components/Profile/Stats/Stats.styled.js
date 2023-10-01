import styled from "styled-components";

export const StatsBox = styled.ul`
  display: flex;
  list-style: none;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 20px;
  width: calc(100% / 3);
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    border-right: 2px solid black;
  }
`;

export const StatsText = styled.span`
  font-size: 24px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;
