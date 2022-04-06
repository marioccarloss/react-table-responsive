import React from 'react';
import styled from "styled-components";

const Layout = styled.button``;

interface PaginationButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const PaginationButton = ({
  label,
  onClick,
  disabled,
  className
}: PaginationButtonProps) => {
  return (
    <Layout disabled={disabled} onClick={onClick} className={className}>
      {label}
    </Layout>
  );
};

export default PaginationButton;
