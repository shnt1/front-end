import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { Link } from "react-router-dom";
import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
      <FlexContainer>
          <Brand />
          
          <NavLinks style={linkAnimation}>
          <Link to={'/about'}>About</Link>
            <Link to={'/'}>Sign-In</Link>
            <Link to={'/register'}>Register</Link>
            <Link to={'/app'}>App</Link>
            
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState} 
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu 
        navbarState={props.navbarState} 
        handleNavbar={props.handleNavbar}
      />
   </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-image: linear-gradient(-100deg, #F5F6EE, #e2e4d8);
  z-index: 100;
  font-size: 1.4rem;
  font-weight: 200;
  border-bottom: 1px solid #FD6600;
`;

const FlexContainer = styled.div`
  max-width: 180rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

// const BrandContainer = styled.div`
//   max-width: 120rem;
//   display: flex;
//   margin: auto;
//   padding: 0 2rem;;
//   justify-content: flex-start;
//   height: 5rem;
// `;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #FD6600;
    font-weight: 300;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      
      border-bottom: 1px solid #FD6600;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;
