import React from 'react';
import styled from 'styled-components';
import ListHeader from './ListHeader';
import ListRow from './ListRow';

export default function ListContainer(props) {

    
    return (
        <ListBox>
            <ListHeader />
            {props.data.map((data) => (
                <ListRow data={data} />
            ))}
        </ListBox>

    )
}


const ListBox = styled.div`
    
    width: 100%;
    margin: 10px auto;
    min-height: 50vh;
    background-image: linear-gradient(120deg, #F5F6EE, #e2e4d8);
    display: flex;
    flex-flow: column nowrap;
    padding: 20px;
    // position: relative;
    // top: 260px;
    align-items: center;
    border-radius: 5px;
    border: 1px solid #FD6600;
`