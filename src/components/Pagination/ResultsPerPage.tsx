import React from 'react';
import styled from "styled-components";

const Layout = styled.div``;

const Select = styled.select``;

interface ResultsPerPageProps {
  pageSize: string;
  onChange: (e: any) => void;
  options?: number[];
  label?: string;
  className?: string;
}

const ResultsPerPage = ({
  pageSize,
  onChange,
  options = [1, 2, 3, 4, 5],
  label = "Per Page",
  className
}: ResultsPerPageProps) => {
  return (
    <Layout className={className}>
      <Select value={pageSize} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option} {label}
          </option>
        ))}
      </Select>
    </Layout>
  );
};

export default ResultsPerPage;
