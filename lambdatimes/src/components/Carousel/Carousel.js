import React, { Component } from "react";
import { carouselData } from "../../data";
import styled, { css } from "styled-components";

const CarouselSlider = styled.div`
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
`;

const CarouselButton = styled.div`
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
  line-height: 3.1rem;

  &:hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }

  ${props =>
    props.left &&
    css`
      top: 50%;
      left: 25px;
      transform: translate(0, -50%);
    `};

  ${props =>
    props.right &&
    css`
      top: 50%;
      right: 25px;
      transform: translate(0, -50%);
    `}
`;

const CarouselImg = styled.img`
  width: 100%;
  display: none;
`;

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: [],
      selectedImageIndex: 0
    };
  }
  componentDidMount() {
    this.setState({
      slider: carouselData
    });
  }

  leftClick = () => {
    this.setState({
      selectedImageIndex:
        this.state.selectedImageIndex === 0
          ? this.state.slider.length - 1
          : this.state.selectedImageIndex - 1
    });
  };

  rightClick = () => {
    this.setState({
      selectedImageIndex:
        this.state.selectedImageIndex === this.state.slider.length - 1
          ? 0
          : this.state.selectedImageIndex + 1
    });
  };

  selectedImageIndex = () => {
    return (
      <CarouselImg
        src={this.state.slider[this.state.selectedImageIndex]}
        style={{ display: "block" }}
      />
    );
  };

  render() {
    return (
      <CarouselSlider>
        <CarouselButton left onClick={this.leftClick}>
          {"<"}
        </CarouselButton>
        {this.selectedImageIndex()}
        <CarouselButton right onClick={this.rightClick}>
          {">"}
        </CarouselButton>
      </CarouselSlider>
    );
  }
}
