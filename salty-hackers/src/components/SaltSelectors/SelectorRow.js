import React from 'react'
import styled from "styled-components";
import SaltySelector from './SaltySelector';
import SweetSelector from './SweetSelector';
import { NavLink } from "react-router-dom";
import './selectorStyles.css';

const SelectorRow = () => {

    return (
        <SelectRow>
            <NavLink exact to="/app"
            activeClassName="active"
            > <SaltySelector /></NavLink>
            
            <NavLink exact to="/sweet"
            activeClassName="active"
            ><SweetSelector /> </NavLink>
            
        </SelectRow>
    )
}

export default SelectorRow;

const SelectRow = styled.div`
    display: flex;
    margin: auto 30px 40px;
    flex-flow: row nowrap;
    justify-content: center;
    
    & a {
        text-decoration: none;
        color: black;
    }
    & div {
        
    }
`;
