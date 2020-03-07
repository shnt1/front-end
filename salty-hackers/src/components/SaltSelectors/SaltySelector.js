import React from "react";
import styled from "styled-components";

const SaltySelector = () => {
  return (
    <Box>
      <p>Saltiest 100 Hackers</p>
    </Box>
  );
};

export default SaltySelector;

const Box = styled.div`
  font-wieight: 300;
  font-size: 20px;
  background-image: linear-gradient(180deg, #F5F6EE, #e2e4d8);
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.09),
          0 2px 2px rgba(0, 0, 0, 0.03);
  padding: 10px 15px;
  border-radius: 5px;
  overflow: auto;
  margin-right: 30px;
  &:hover {
    background-image: linear-gradient(0deg, #fcc5a1, #f8dac5);
    cursor: pointer;
  }
`;
