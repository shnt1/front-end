import React, { Component, useState } from 'react'
import SelectorRow from './SaltSelectors/SelectorRow';
import ListContainer from './TopLists/ListContainer';
import styled from "styled-components";
import dummyData from './dummydata';


const AppContainer = () => {
   
    const [ data ] = useState(dummyData);
    console.log("dummy data", data)
{/*
axios
.get("https://saltyhacker.herokuapp.com/api/trolls")
.then(response => {
    console.log(response)
})
.catch(error => {
    console.log(error)
})


*/}
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