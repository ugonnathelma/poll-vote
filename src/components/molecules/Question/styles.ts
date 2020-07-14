import styled from "styled-components";

export const Card = styled.div`
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  min-width: 175px;
  width: 310px;
  transition: box-shadow 0.3s;
  margin: 1em;
  cursor: pointer;
  &:hover {
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.5);
  }

  h4 {
    padding: 1em;
    margin: 0;
    background-color: ${({ theme: { colors } }) => colors.primary};
    color: white;
  }
`;

export const Info = styled.div`
  padding: 1em;

  & > div {
    margin: 0.5em 0em;
  }

  & > div span {
    color: ${({ theme: { colors } }) => colors.secondary};
  }
`;
