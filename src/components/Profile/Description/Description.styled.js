import styled from "styled-components";

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  font-size: 24px;
  align-items: center;
  border-bottom: 2px solid black;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  border: 2px solid black;
  width: 200px;
`;

export const DescriptionText = styled.p`
    text-shadow: 0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5);
`;

export const Username = styled.p`
  font-size: 40px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 700;
`