import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <SDFooter>
      <div>
        Created by Jay Maas, Serina Grill, Keith Giddings, Vince Emma, Jonathan
        Troop, Denise Chaloupka, Brian Leonard, J Wylie, and Benjamin Whitman
        &copy; 2020
      </div>
    </SDFooter>
  );
}

const SDFooter = styled.footer`
  box-sizing: border-box;
  background: #180c03;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dfc1aa;
  font-size: 12px;
  height: 50px;
  width: 100vw;
  padding-bottom: 10px;
  padding-top: 15px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
