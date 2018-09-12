import React, { Component } from 'react';
import styled from 'styled-components'
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount(){

  }

  leftClick = () => {

  }

  rightClick = () => {

  }

  selectedImage = () => {
    return <Img src={} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <Div1>
        <Div2 onClick={this.leftClick}>{"<"}</Div2>
        <Div3 onClick={this.rightClick}>{">"}</Div3>
      </Div1>
    )
  }
}

const Div1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;
  @media (min-width: 1200px) {
    width: 1200px;
  }
`
const Div2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  :hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
  top: 50%;
  left: 25px;
  transform: translate(0, -50%);
`
const Div3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  :hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
  top: 50%;
  left: 25px;
  transform: translate(0, -50%);
`
const Img = styled.img`
  width: 100%;
  display: none;
`