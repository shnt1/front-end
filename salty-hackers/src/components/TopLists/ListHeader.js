import React from 'react';
import styled from 'styled-components';


export default function ListHeader(props) {

    return (
        <ListHeaderBox>
            <RankCol>Rank</RankCol>
            <NameCol>Name</NameCol>
            <ScoreCol>Score</ScoreCol>

        </ListHeaderBox>

    )
}

const ListHeaderBox = styled.div`
    width: 90%;
    min-height: 40px;
    height: auto;
    padding: 5px;
    margin: 10px 0;
    background: #F5F6EE;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    font-size: 16px;
    
`

const RankCol = styled.div`
    width: 30%;
    background: white;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #FD6600;
`

const NameCol = styled.div`
    width: 30%;
    background: white;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #FD6600;
`

const ScoreCol = styled.div`
    width: 30%;
    background: white;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #FD6600;
`

