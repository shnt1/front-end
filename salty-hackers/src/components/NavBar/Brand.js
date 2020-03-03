import React from 'react'
import styled from "styled-components";

import logo from "../Styles/salt-food-color.svg";

const Brand = () => {
  return (
    <Box>
    <Image src={logo} alt="Salt Logo" />
    <Name>Salty Hackers</Name>

    </Box>
  )
}

export default Brand

const Image = styled.img`
  height: 85%;
  margin: auto 0;
`;

const Name = styled.p`
  font-size: 20px;
  
`
const Box = styled.div`
  display: flex;
  felx-flow: row nowrap;
  align-items: center;
`