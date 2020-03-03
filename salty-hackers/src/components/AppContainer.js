import React, { Component, useState } from 'react'
import SelectorRow from './SaltSelectors/SelectorRow';
import ListContainer from './TopLists/ListContainer';
import styled from "styled-components";
import dummyData from './dummydata';


const AppContainer = () => {
   
    const [ data ] = useState(dummyData);
    console.log("dummy data", data)
   
  
      return (
        <Container>
          <SelectorRow />
          <ListContainer data={data}/>
        </Container>
      )
    
  }
  
  export default AppContainer


  const Container = styled.div`
    width: 880px;
    margin: 0 auto;
  `