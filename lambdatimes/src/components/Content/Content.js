import React, { Component } from "react";
import styled from "styled-components";
import Tabs from "./Tabs";
import Cards from "./Cards";
import Carousel from "../Carousel/Carousel";
import { tabData, cardData, carouselData } from "../../data";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "all",
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    });
  }

  changeSelected = tab => {
    this.setState({ selected: tab });
  };

  filterCards = () => {
    let cardsArr = [...this.state.cards];
    if (this.state.selected === "all") {
      return this.state.cards;
    } else {
      return cardsArr.filter(card => card.tab === this.state.selected);
    }
  };

  render() {
    return (
      <ContentContainer>
        <Tabs
          tabs={this.state.tabs}
          selectedTab={this.state.selected}
          selectedTabHandler={this.changeSelected}
        />
        <Carousel carouselData={carouselData} />
        <Cards
          cards={this.filterCards()}
          selectedTabState={this.state.selected}
        />
      </ContentContainer>
    );
  }
}
