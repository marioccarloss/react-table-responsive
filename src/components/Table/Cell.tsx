import styled from "styled-components";

import { theme } from "../../design";

const Cell = styled.td`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  padding: 20px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border: 1px solid red;

  &::before {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-weight: bold;
  }

  @media (min-width: ${theme.breakpoint.med}px) {
    display: table-cell;
    width: auto;
    height: 55px;
    padding: 0 20px;
    border-bottom: none;

    &::before {
      display: none;
    }
  }
`;

export default Cell;
