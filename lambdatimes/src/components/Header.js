import React from "react";
import styled, { css } from "styled-components";

const HeaderDiv = styled.header`
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
  max-width: 1280px;
`;

const Span = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  ${props =>
    props.date
      ? css`
          margin-left: 25px;
          flex: 1;
        `
      : null}

  ${props =>
    props.temp
      ? css`
          text-align: right;
          margin-right: 25px;
          flex: 1;
        `
      : null}
`;

const H1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;
const Header = () => {
  return (
    <HeaderDiv>
      <Span date>SMARCH 32, 2018</Span>
      <H1>Lambda Times</H1>
      <Span temp>98°</Span>
    </HeaderDiv>
  );
};

export default Header;
