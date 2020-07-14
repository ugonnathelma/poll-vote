import styled from "styled-components";

export const Bar = styled.div<{ type: string | null; hide: boolean }>`
  background: ${({ type }) => (type === "success" ? "#cafacc" : "#faceca")};
  position: absolute;
  bottom: 0;
  width: 90%;
  border-radius: 4px 4px 0px 0px;
  display: flex;
  align-items: center;
  transition: min-height 0.3s, height 0.3s;
  min-height: 0;
  height: 0;
  overflow: hidden;

  ${({ hide }) =>
    !hide &&
    `min-height: 70px;
    height: auto`};

  span {
    padding: 1em;
  }
`;
