import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Choice = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  padding: 1em;

  & > span:first-child {
    flex: 3;
    font-size: 20px;
    min-width: 175px;
    font-weight: bold;
  }

  & > span:nth-child(2) {
    flex: 1;
    min-width: 120px;
  }
  & > span:nth-child(3) {
    flex: 1;
    min-width: 75px;
    font-weight: bold;
    color: ${({ theme: { colors } }) => colors.secondary};
  }

  @media screen and (max-width: 735px) {
    flex-direction: column;
    align-items: flex-start;
    span {
      margin-bottom: 0.5em;
    }
  }
`;
