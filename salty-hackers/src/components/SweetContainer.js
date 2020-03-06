import React, { Component, useState } from 'react'
import SelectorRow from './SaltSelectors/SelectorRow';
import ListContainer from './TopLists/ListContainer';
import styled from "styled-components";
import dummyData2 from './dummydata2';


const SweetContainer = () => {
   
    const [ data ] = useState(dummyData2);
    console.log("sweet data", data)
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
  
  export default SweetContainer


  const Container = styled.div`
    width: 80%;
    margin: 180px auto 0;
    position: relative;
  `