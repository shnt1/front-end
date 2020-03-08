import React from 'react';
import styled from 'styled-components';

//Export default component
export default function Footer() {
  return (
    <SDFooter>
      <div>
        Created by  &copy; 2020
      </div>
    </SDFooter>
  );
}

//Styled components
const SDFooter = styled.footer`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
  font-size: 0.7rem;
  height: 70px;
  width: 100vw;
  padding-bottom: 10px;
  padding-top: 20px;
`;