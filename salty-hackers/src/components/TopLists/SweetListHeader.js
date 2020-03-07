import React from 'react';
import styled from 'styled-components';


export default function SweetListHeader(props) {

    return (
        <ListHeaderBox>
            <RankCol>Rank</RankCol>
            <NameCol>Name</NameCol>
            <ScoreCol>Sweet Comments</ScoreCol>
            <TotalCol>Total Comments</TotalCol>
            <RatioCol>% of Sweet Comments</RatioCol>

        </ListHeaderBox>

    )
}

const ListHeaderBox = styled.div`
    width: 90%;
    min-height: 60px;
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
    width: 15%;
    height: 60px;
    display: flex;
    align-items: center;
    background: white;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15),
          0 2px 2px rgba(0, 0, 0, 0.05);
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ff3153;
    
`

const NameCol = styled.div`
    width: 30%;
    height: 60px;
    display: flex;
    align-items: center;
    background: white;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15),
          0 2px 2px rgba(0, 0, 0, 0.05);
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ff3153;
`

const ScoreCol = styled.div`
    width: 15%;
    height: 60px;
    display: flex;
    align-items: center;
    background: white;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15),
          0 2px 2px rgba(0, 0, 0, 0.05);
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ff3153;
`
const TotalCol = styled.div`
    width: 15%;
    height: 60px;
    display: flex;
    align-items: center;
    background: white;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15),
          0 2px 2px rgba(0, 0, 0, 0.05);
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ff3153;
`

const RatioCol = styled.div`
    width: 15%;
    height: 60px;
    display: flex;
    align-items: center;
    background: white;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15),
          0 2px 2px rgba(0, 0, 0, 0.05);
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ff3153;
`