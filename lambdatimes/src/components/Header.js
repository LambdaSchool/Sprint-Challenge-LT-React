import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
  @media (min-width: 1280px) {
      width: 1280px;
  }
`
const LambdaSpan = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  flex: 1;
  margin-left: ${props => props.date? '25px': null};
  text-align: ${props=> props.temp ? 'right': null};
  margin-right: ${props => props.temp ? '25px': null};
`

const Heading = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <LambdaSpan date>SMARCH 32, 2018</LambdaSpan>
      <Heading>Lambda Times</Heading>
      <LambdaSpan temp>98°</LambdaSpan>
    </HeaderWrapper>
  )
}

export default Header