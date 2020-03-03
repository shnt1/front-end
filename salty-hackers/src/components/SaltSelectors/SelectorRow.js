import React from 'react'
import styled from "styled-components";
import AstringentSelector from './AstringentSelector';
import SavorySelector from './SavorySelector';
import SaltySelector from './SaltySelector';
import SweetSelector from './SweetSelector';



const SelectorRow = () => {

    return (
        <SelectRow>
            <SaltySelector />
            <AstringentSelector />
            <SweetSelector />
            <SavorySelector />
        </SelectRow>
    )
}

export default SelectorRow;

const SelectRow = styled.div`
    display: flex;
    margin-bottom: 40px;
    flex-flow: row nowrap;
    justify-content: space-between;
`;