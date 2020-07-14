import styled from "styled-components";

export const Body = styled.div`
  padding: 2em;

  * {
    box-sizing: border-box;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${({ theme: { colors } }) => colors.secondary};
  }

  @media screen and (max-width: 735px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;
