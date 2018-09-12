import React from 'react';
import styled from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <Div1>
      <Div2>
        <Div3>
          <Span1>TOPICS</Span1><Span1>SEARCH</Span1>
        </Div3>
        <Div4>
          <Span2>GENERAL</Span2><Span2>BROWNBAG</Span2><Span2>RANDOM</Span2><Span2>MUSIC</Span2><Span2>ANNOUNCEMENTS</Span2>
        </Div4>
        <Div5>
          <Span3>LOG IN</Span3>
        </Div5>
      </Div2>
    </Div1>
  )
}

const Div1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`
const Div2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`
const Div3 = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`
const Div4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
  `
const Div5 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
  `
const Span1 = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`
const Span2 = styled.span`
  cursor: pointer;
  margin-right: 5%;
  :last-child {
    margin-right: 0;
  }
  :hover {
    text-decoration: underline;
  }
`
const Span3 = styled.span`
  cursor: pointer;
`

export default TopBar;