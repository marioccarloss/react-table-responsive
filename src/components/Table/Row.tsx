import styled from "styled-components";

import { theme } from "../../design";

const Row = styled.tr`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  width: 100%;

  @media (min-width: ${theme.breakpoint.med}px) {
    display: table-row;
  }

  &:nth-child(odd) {
    background: #fafafa;
  }
`;

export default Row;
