import React from 'react'
import styled from "styled-components";

const AstringentSelector = () => {

    return (
        <Box>
            <p>Top 50 Astringent Hackers</p>
        </Box>
        
    )
}

export default AstringentSelector;

const Box = styled.div`
    font-wieight: 400;
    font-size: 16px;
    background: #F5F6EE;
    padding: 10px;
    min-width: 197px;
    border: 1px solid white;
    border-radius: 5px;
    &:hover {
        background: #ffceae;
        border: 1px solid #FD6600;
        cursor: pointer;
    }
`