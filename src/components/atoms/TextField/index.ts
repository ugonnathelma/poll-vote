import styled from "styled-components";

export default styled.input<{ fontSize?: string }>`
  ${({ width }) => width && `width: ${width}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}`};
  padding: 0px 1em;
  border: 1px solid lightgrey;
  border-radius: 3px;
  outline: 0;
  &:focus {
    outline: 1px solid ${({ theme: { colors } }) => colors.primary};
    outline-offset: -2px;
  }
`;
