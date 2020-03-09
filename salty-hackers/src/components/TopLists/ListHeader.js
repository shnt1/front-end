import React from "react";
import styled from "styled-components";

export default function ListHeader(props) {
  return (
    <ListHeaderBox>
      <RankCol>Rank</RankCol>
      <NameCol>Name</NameCol>
      <ScoreCol>Salt Score</ScoreCol>
      <Comment>Saltiest Comment</Comment>
    </ListHeaderBox>
  );
}

const ListHeaderBox = styled.div`
  width: 95%;
  @media (max-width: 868px) {
    width: 100%;
  }
  min-height: 60px;
  height: auto;
  padding: 5px;
  margin: 10px 0;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  font-size: 16px;
`;

const RankCol = styled.div`
  width: 10%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.05);
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #fd6600;
  @media (max-width: 868px) {
    font-size: 14px;
  }
  @media (max-width: 552px) {
    font-size: 13px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
  @media (max-width: 500px) {
    font-size: 11px;
    word-wrap:break-word;
    width: auto;
  }
`;

const NameCol = styled.div`
  width: 14%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.05);
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #fd6600;
  @media (max-width: 868px) {
    font-size: 14px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
  @media (max-width: 500px) {
    font-size: 11px;
    word-wrap:break-word;
    width: auto;
  }
`;

const ScoreCol = styled.div`
  width: 10%;
  height: 60px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: white;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.05);
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #fd6600;
  @media (max-width: 868px) {
    font-size: 14px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
  @media (max-width: 500px) {
    font-size: 11px;
    word-wrap:break-word;
    width: auto;
  }
`;
const Comment = styled.div`
  width: 61%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.05);
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #fd6600;
  @media (max-width: 868px) {
    font-size: 14px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
  @media (max-width: 500px) {
    font-size: 11px;
    word-wrap:break-word;
    width: auto;
  }
`;


