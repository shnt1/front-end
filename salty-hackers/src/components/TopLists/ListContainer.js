import React from 'react';
import styled from 'styled-components';
import ListHeader from './ListHeader';

export default function ListContainer(props) {

    console.log(props);
    return (
        <ListBox>
            <ListHeader />
        </ListBox>

    )
}

const ListBox = styled.div`
    
    width: 100%;
    margin: 10px auto;
    min-height: 50vh;
    background: #F5F6EE;
    display: flex;
    flex-flow: column nowrap;
    padding: 20px;
    position: relative;
    top: 250px;
    align-items: center;
    border-radius: 5px;
`