import React, { useState } from "react";
import SelectorRow from "./SaltSelectors/SelectorRow";
import ListContainer from "./TopLists/ListContainer";
import styled from "styled-components";
import { useEffect } from "react";

import axios from "axios";

const AppContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://salty-shnt1.herokuapp.com/showjson_salty")
      .then(res => {
        console.log(res);
        setData(...data, res.data);
      })
      .catch(err => console.log(err));
  }, []);

  

  if (!data) {
    return <h2>Loading data, please wait a moment...</h2>;
  }
  return (
    <Container>
      <SelectorRow />
      <ListContainer data={data} />
    </Container>
  );
};

export default AppContainer;

const Container = styled.div`
  width: 80%;
  margin: 180px auto 0;
  position: relative;
  @media (max-width: 768px) {
    width: 95%;
  }
`;
