import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  label {
    font-size: 20px;
    margin-bottom: 1em;
    font-weight: bold;
    color: ${({ theme: { colors } }) => colors.primary};
  }

  input {
    margin-bottom: 2em;
  }
`;
