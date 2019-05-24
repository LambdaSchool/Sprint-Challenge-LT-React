import React from 'react';
import styled from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Headerr = styled.div `
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
`

const Date = styled.span`
margin-left: 25px;
flex: 1;
`

const HOne = styled.h1`
font-size: 60px;
font-family: Didot, serif;
font-weight: bold;
flex: 8;
text-align: center;
color: #000;
`

const Temp = styled.span`
text-align: right;
margin-right: 25px;
flex: 1;
`





const Header = () => {
  return (
    <Headerr>
      <Date>MAY 24, 2019</Date>
      <HOne>Lambda Times</HOne>
      <Temp>98°</Temp>
    </Headerr>
  )
}

export default Header