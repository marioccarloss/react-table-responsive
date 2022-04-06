import React from 'react';
import styled from "styled-components";
import { usePagination, useTable, useSortBy } from "react-table";

import {
  Cell,
  HeaderCell,
  HeaderRow,
  Pagination,
  PaginationButton,
  ResultsPerPage,
  Row,
  SortButton,
  Table,
  TableBody,
  TableHead
} from "./components";

const StyledCell = styled(Cell)`
  &:nth-of-type(1):before {
    content: "Name";
  }

  &:nth-of-type(2):before {
    content: "Role";
  }

  &:nth-of-type(3):before {
    content: "Job Title";
  }

  &:nth-of-type(4):before {
    content: "Status";
  }
`;

// Sortable + Paginated Table Demo w/ styled-components
const TableDemo = ({ columns, data, options }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }
    },
    useSortBy,
    usePagination
  );

  return (
    <>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <HeaderRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <HeaderCell
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  {column.isSorted ? (
                    <SortButton isSortedDesc={column.isSortedDesc} />
                  ) : (
                    ""
                  )}
                </HeaderCell>
              ))}
            </HeaderRow>
          ))}
        </TableHead>

        <TableBody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <Row {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <StyledCell {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </StyledCell>
                  );
                })}
              </Row>
            );
          })}
        </TableBody>
      </Table>

      <Pagination>
        <ResultsPerPage
          pageSize={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
          options={options}
          label="Per Page"
        />

        <PaginationButton
          label="<<"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        />

        <PaginationButton
          label="<"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        />

        <PaginationButton
          label=">"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        />

        <PaginationButton
          label=">>"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        />

        <span>
          Page
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>

        {/* <span>
          | Go to page:
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span> */}
      </Pagination>
    </>
  );
};

export default TableDemo;
