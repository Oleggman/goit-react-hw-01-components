import styled from "styled-components";

export const StatisticsList = styled.ul`
  display: flex;
  list-style: none;
  border-top: 2px solid black;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  background-color: ${({color}) => color};
  padding: 16px 24px;
  &:not(:last-child) {
    border-right: 2px solid black;
  }
  flex-grow: 1;
`; 

export const Label = styled.span`
  font-size: 18px;
  text-shadow: 0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5);
  font-family: Verdana;
`;

export const Percentage = styled.span`
  font-size: 24px;
  text-shadow: 0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5);
  font-family: Verdana;
`;
