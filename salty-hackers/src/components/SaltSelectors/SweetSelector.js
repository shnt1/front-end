import React from "react";
import styled from "styled-components";

const SweetSelector = () => {
  return (
    <Box>
      <p>Sweetest 100 Hackers</p>
    </Box>
  );
};

export default SweetSelector;

const Box = styled.div`
  font-wieight: 300;
  font-size: 20px;
  background-image: linear-gradient(180deg, #f5f6ee, #e2e4d8);
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.09), 0 2px 2px rgba(0, 0, 0, 0.03);
  padding: 10px 15px;
  border-radius: 5px;
  overflow: auto;
  margin-left: 30px;
  &:hover {
    background-image: linear-gradient(0deg, #ffc0cb, #f8d5db);
    cursor: pointer;
  }
  @media (max-width: 650px) {
    font-size: 17px;
  }
`;
