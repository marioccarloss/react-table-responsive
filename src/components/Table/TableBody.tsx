import styled from "styled-components";

import { theme } from "../../design";

const TableBody = styled.tbody`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;

  @media (min-width: ${theme.breakpoint.med}px) {
    display: table-row-group;
  }
`;

export default TableBody;
