import React from "react";
import styled from "styled-components";
import ListHeader from "./ListHeader";
import ListRow from "./ListRow";

export default function ListContainer(props) {
  
    const saltyObj = props.data;
    const saltyArray = Object.entries(saltyObj).map((e) => ( { [e[0]]: e[1]} ));
    console.log(saltyArray)
  return (
    <ListBox>
      <ListHeader />
      {saltyArray.map((data, key) => (
        <ListRow data={data[key]} key={key} />
      ))}
    </ListBox>
  );
}

const ListBox = styled.div`
  width: 100%;
  margin: 10px auto 90px;
  min-height: 50vh;
  background-image: linear-gradient(120deg, #f5f6ee, #e2e4d8);
  display: flex;
  flex-flow: column nowrap;
  padding: 20px;
  @media (max-width: 868px) {
    padding: 5px;
  }
  align-items: center;
  border-radius: 5px;
  border: 1px solid #fd6600;
`;
