  
import React from 'react';
import styled from 'styled-components';

//Export default component
export default function ListRow(props) {

    
    return (
        <RowBox>
            <RankCol>{props.data.index}</RankCol>
            <NameCol>{props.data.name}</NameCol>
            <ScoreCol>{props.data.score}</ScoreCol>
        </RowBox>
    )
}

const RowBox = styled.div`
    width: 90%;
    min-height: 40px;
    height: auto;
    padding: 5px;
    margin: 10px 0;
    
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    font-size: 16px;
    
`

const RankCol = styled.div`
    width: 30%;
    background: white;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15),
          0 2px 2px rgba(0, 0, 0, 0.05);
    padding: 10px;
    border-radius: 5px;
    border: 1px solid white;
`

const NameCol = styled.div`
    width: 30%;
    background: white;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15),
          0 2px 2px rgba(0, 0, 0, 0.05);
    padding: 10px;
    border-radius: 5px;
    border: 1px solid white;
`

const ScoreCol = styled.div`
    width: 30%;
    background: white;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15),
          0 2px 2px rgba(0, 0, 0, 0.05);
    padding: 10px;
    border-radius: 5px;
    border: 1px solid white;
`