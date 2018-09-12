import React from 'react';
import styled from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <Div1>
      <Span1>SMARCH 32, 2018</Span1>
      <H1>Lambda Times</H1>
      <Span2>98°</Span2>
    </Div1>
  )
}

const Div1 = styled.div`
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
const H1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`
const Span0 = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`
const Span1 = styled(Span0)`
  margin-left: 25px;
  flex: 1;
`
const Span2 = styled(Span0)`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`

export default Header
