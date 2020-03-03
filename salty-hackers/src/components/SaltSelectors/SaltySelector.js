import React from 'react'
import styled from "styled-components";

const SaltySelector = () => {

    return (
        <Box>
            <p>Top 50 Salty Hackers</p>
        </Box>
        
    )
}

export default SaltySelector;

const Box = styled.div`
    font-wieight: 400;
    font-size: 16px;
    background: #F5F6EE;
    padding: 10px;
    min-width: 197px;
    border: 1px solid white;
    border-radius: 5px;
    border: 1px solid #FD6600;
    &:hover {
        background: #ffceae;
        
        cursor: pointer;
    }
`