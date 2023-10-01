import styled from "styled-components";

export const Friend = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  background-color: #fff;
  border-radius: 2px;
  padding: 12px 20px;
  box-shadow: -6px 8px 10px -3px rgba(0,0,0,0.93);
`;

export const Status = styled.span`
  width: 12px;
  height: 12px;
  background-color: ${({ isOnline }) =>
    isOnline ? "rgb(34, 158, 34)" : "rgb(174, 45, 45)"};
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 48px;
  border-radius: 3px;
`;

export const Username = styled.p`
  font-size: 28px;
  font-family: Georgia, 'Times New Roman', Times, serif;
`;