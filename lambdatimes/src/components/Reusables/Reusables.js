import styled from 'styled-components'

// Top Bar Styles

export const TheTopBar = styled.div` 
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    position: fixed;
    height: 44px;
    background-color: #AD0101;
  `
  
  export const Container = styled.div`
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

  `;
  
  export const ContainerLeft = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
  `
  
  export const ContainerLeftSpan = styled.span`
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
  `
  
  export const ContainerCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;
  `

  export const ContainerCenterSpan = styled.span`
    cursor: pointer;
    margin-right: 5%;

    :last-child {
        margin-right: 0;
      }

    :hover {
    text-decoration: underline;
    }

  `

  export const ContainerRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold;
    `
 
  export const ContainerRightSpan = styled.span`
    cursor: pointer;
  `

  // Header Styles

  export const TheHeader = styled.div `
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

  export const HeaderH1 = styled.h1`
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
  `
  
  export const Date = styled.span`
    margin-left: 25px;
    flex: 1;
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
  `

  export const Temp = styled.span`
    text-align: right;
    margin-right: 25px;
    flex: 1;
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
  `
  