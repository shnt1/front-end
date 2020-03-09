import React from "react";
import styled from "styled-components";
import SweetListHeader from "./SweetListHeader";
import SweetListRow from "./SweetListRow";

export default function SweetListContainer(props) {
  const top100 = props.data.slice(0, 100);
  console.log("top100", top100);
  return (
    <ListBox>
      <SweetListHeader />
      {top100.map(data => (
        <SweetListRow data={data} />
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
  border: 1px solid #ff3153;
`;
