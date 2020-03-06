import React from "react";
import styled from "styled-components";

const SaltySelector = () => {
  return (
    <Box>
      <p>Top Salty Hackers</p>
    </Box>
  );
};

export default SaltySelector;

const Box = styled.div`
  font-wieight: 300;
  font-size: 20px;
  background: #f5f6ee;
  padding: 10px 15px;
  border-radius: 5px;
  overflow: auto;
  &:hover {
    background: #ffceae;
    cursor: pointer;
  }
`;
