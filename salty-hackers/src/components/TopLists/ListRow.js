  
import React from 'react';
import styled from 'styled-components';

//Export default component
export default function ListRow(props) {

    function percentage(num1, num2) {
        return ((num1/num2) * 100).toFixed(2);
    }
    
    return (
        <RowBox>
            <RankCol>{props.data.salty_rank}</RankCol>
            <NameCol>{props.data.name}</NameCol>
            <CommentCol>{props.data.salty_comments}</CommentCol>
            <TotalCol>{props.data.comments_total}</TotalCol>
            <RatioCol>{percentage(props.data.salty_comments, props.data.comments_total)}</RatioCol>
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
    width: 15%;
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

const CommentCol = styled.div`
    width: 15%;
    background: white;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15),
          0 2px 2px rgba(0, 0, 0, 0.05);
    padding: 10px;
    border-radius: 5px;
    border: 1px solid white;
`

const TotalCol = styled.div`
    width: 15%;
    background: white;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15),
          0 2px 2px rgba(0, 0, 0, 0.05);
    padding: 10px;
    border-radius: 5px;
    border: 1px solid white;
`

const RatioCol = styled.div`
    width: 15%;
    background: white;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15),
          0 2px 2px rgba(0, 0, 0, 0.05);
    padding: 10px;
    border-radius: 5px;
    border: 1px solid white;
`