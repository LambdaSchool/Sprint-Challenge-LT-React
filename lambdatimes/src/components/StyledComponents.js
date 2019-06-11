import React from 'react'
import styled from 'styled-components'

export const TopBarStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    position: fixed;
    height: 44px;
    background-color: #333;
`

export const TopBarContainerStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;
`

export const TopBarContainerLeftStyle = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
`

export const TopBarContainerLeftSpanStyle = styled.span`
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
`

export const TopBarContainerCenterStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;
`

export const TopBarContainerCenterSpanStyle = styled.span`
    cursor: pointer;
    margin-right: 5%;
    &:last-child {margin-right: 0;}
    &:hover {text-decoration: underline;}
`

export const TopBarContainerRightStyle = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold;
`

export const TopBarContainerRightSpanStyle = styled.span`
    cursor: pointer;
`

export const HeaderStyle = styled.div`
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

export const HeaderH1Style = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`

export const HeaderDateStyle = styled.span`
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;    
    margin-left: 25px;
    flex: 1;
`
 export const HeaderTempStyle = styled.span`
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
    text-align: right;
    margin-right: 25px;
    flex: 1;
`