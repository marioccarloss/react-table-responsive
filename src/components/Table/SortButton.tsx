import React from 'react';
import styled from "styled-components";

interface SortButtonProps {
  isSortedDesc?: boolean;
  className?: string;
}

const Layout = styled.button``;

const SortButton = ({ isSortedDesc, className }: SortButtonProps) => {
  return <Layout className={className}>{isSortedDesc ? "👇" : "👆"}</Layout>;
};

export default SortButton;
