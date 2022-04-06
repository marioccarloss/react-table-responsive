import styled from "styled-components";

import { theme } from "../../design";

const Table = styled.table`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  border-collapse: collapse;

  @media (min-width: ${theme.breakpoint.med}px) {
    display: table;
  }
`;

export default Table;
