import React from "react";
import styled from "styled-components";

const SweetSelector = () => {
  return (
    <Box>
      <p>Top Sweet Hackers</p>
    </Box>
  );
};

export default SweetSelector;

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
