import React, { useEffect, useState } from "react";
import SelectorRow from "./SaltSelectors/SelectorRow";
import SweetListContainer from "./TopLists/SweetListContainer";
import styled from "styled-components";
import axiosWithAuth from "./utils/axiosWithAuth";

const SweetContainer = () => {
  const [data, setData] = useState([]);
  console.log("dummy data", data);
  useEffect(() => {
    axiosWithAuth()
      .get("https://saltyhacker.herokuapp.com/api/trolls")
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
      <SweetListContainer data={data} />
    </Container>
  );
};

export default SweetContainer;

const Container = styled.div`
  width: 80%;
  margin: 180px auto 0;
  position: relative;
  @media (max-width: 768px) {
    width: 95%;
  }
`;
