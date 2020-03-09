import React from "react";
import styled from "styled-components";

export default function SweetListHeader(props) {
  return (
    <ListHeaderBox>
      <RankCol>Rank</RankCol>
      <NameCol>Name</NameCol>
      <ScoreCol>Sweet Comments</ScoreCol>
      <TotalCol>Total Comments</TotalCol>
      <RatioCol>% of Sweet Comments</RatioCol>
    </ListHeaderBox>
  );
}

const ListHeaderBox = styled.div`
  width: 90%;
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
  width: 15%;
  height: 60px;
  display: flex;
  align-items: center;
  background: white;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.05);
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ff3153;
  @media (max-width: 868px) {
    font-size: 14px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
  @media (max-width: 500px) {
    font-size: 11px;
    word-wrap:break-word;
    height: auto;
    width: auto;
  }
`;

const NameCol = styled.div`
  width: 30%;
  height: 60px;
  display: flex;
  align-items: center;
  background: white;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.05);
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ff3153;
  @media (max-width: 868px) {
    font-size: 14px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
  @media (max-width: 500px) {
    font-size: 11px;
    word-wrap:break-word;
    height: auto;
    width: auto;
  }
`;

const ScoreCol = styled.div`
  width: 15%;
  height: 60px;
  display: flex;
  align-items: center;
  background: white;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.05);
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ff3153;
  @media (max-width: 868px) {
    font-size: 14px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
  @media (max-width: 500px) {
    font-size: 11px;
    word-wrap:break-word;
    height: auto;
    width: auto;
  }
`;
const TotalCol = styled.div`
  width: 15%;
  height: 60px;
  display: flex;
  align-items: center;
  background: white;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.05);
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ff3153;
  @media (max-width: 868px) {
    font-size: 14px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
  @media (max-width: 500px) {
    font-size: 11px;
    word-wrap:break-word;
    height: auto;
    width: auto;
  }
`;

const RatioCol = styled.div`
  width: 16%;
  height: 60px;
  display: flex;
  align-items: center;
  background: white;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.05);
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ff3153;
  @media (max-width: 868px) {
    font-size: 14px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
    word-wrap:break-word;
  }
  @media (max-width: 500px) {
    font-size: 11px;
    word-wrap:break-word;
    height: auto;
    width: auto;
  }
`;