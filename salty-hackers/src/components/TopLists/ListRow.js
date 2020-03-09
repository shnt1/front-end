import React from 'react';
import styled from 'styled-components';


export default function ListRow(props) {

  
    
    return (
        <RowBox>
            <RankCol>{props.data.rank}</RankCol>
            <NameCol><a target="_blank" rel="noopener noreferrer" href={`https://news.ycombinator.com/user?id=${props.data.user}`} >{props.data.user}</a></NameCol>
            <ScoreCol>{(Math.round(props.data.salt_score * 100) / 100).toFixed(3)}</ScoreCol>
            <CommentCol>{props.data.saltiest_comment}</CommentCol>
        </RowBox>
        
    )
}

const RowBox = styled.div`
    width: 95%;
    min-height: 40px;
    height: auto;
    padding: 5px;
    margin: 10px 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    font-size: 16px;
    @media (max-width: 868px) {
        width: 100%;
        font-size: 14px;
      }
      @media (max-width: 500px) {
        font-size: 11px;       
      }
`

const RankCol = styled.div`
    width: 10%;
    text-align: center;
    @media (max-width: 500px) {
        width: auto;
      }
    background: white;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15),
          0 2px 2px rgba(0, 0, 0, 0.05);
    padding: 10px;
    border-radius: 5px;
    border: 1px solid white;
`

const NameCol = styled.div`
    width: 14%;
    text-align: center;
    @media (max-width: 500px) {
        width: auto;
      }
    background: white;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15),
          0 2px 2px rgba(0, 0, 0, 0.05);
    padding: 10px;
    border-radius: 5px;
    border: 1px solid white;
    & a {
        text-decoration: none;
        color: #FD6600;
    }
`

const ScoreCol = styled.div`
    width: 10%;
    text-align: center;
    @media (max-width: 500px) {
        width: auto;
      }
    background: white;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15),
          0 2px 2px rgba(0, 0, 0, 0.05);
    padding: 10px;
    border-radius: 5px;
    border: 1px solid white;
`

const CommentCol = styled.div`
    width: 61%;
    @media (max-width: 500px) {
        width: auto;
      }
    background: white;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15),
          0 2px 2px rgba(0, 0, 0, 0.05);
    padding: 10px;
    border-radius: 5px;
    border: 1px solid white;
`

