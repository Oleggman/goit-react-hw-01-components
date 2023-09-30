import styled from "styled-components";

export const StatsBox = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const StatsText = styled.span`
  font-size: 24px;
`;
