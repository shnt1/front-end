import React, { Component, useState } from 'react'
import SelectorRow from './SaltSelectors/SelectorRow';
import ListContainer from './TopLists/ListContainer';
import styled from "styled-components";
import dummyData from './dummydata';
import { useEffect } from 'react';
import axiosWithAuth from './utils/axiosWithAuth';


const AppContainer = () => {
   
    const [data, setData] = useState([]);
    console.log("dummy data", data)
    useEffect(() => {
      axiosWithAuth().get("https://saltyhacker.herokuapp.com/api/trolls")
      .then(res => {
        console.log(res)
        setData(...data, res.data);
      })
      .catch(err => (console.log(err)))
    }, [...data])
   
    if (!data) {
      return (<h2>Loading data, please wait a moment...</h2>)
  }
      return (
        <Container>
          <SelectorRow />
          <ListContainer data={data}/>
        </Container>
      )
    
  }
  
  export default AppContainer


  const Container = styled.div`
    width: 80%;
    margin: 180px auto 0;
    position: relative;
  `