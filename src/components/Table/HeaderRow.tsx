import styled from "styled-components";

import { theme } from "../../design";

const HeaderRow = styled.tr`
  display: none;
  width: 100%;
  border-bottom: 1px solid black;

  @media (min-width: ${theme.breakpoint.med}px) {
    display: table-row;
  }
`;

export default HeaderRow;
