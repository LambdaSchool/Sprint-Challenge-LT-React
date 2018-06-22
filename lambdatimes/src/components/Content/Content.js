import React, { Component } from 'react';
import styled from 'styled-components';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      // Set this to an initial value
      selected: 'all',
      tabs: [],
      cards: []
    }
  }

  componentDidMount(){
    // Once the component has mounted, get the data and reflect that data on the state
    let tabs = tabData;
    let cards = cardData;
    this.setState({tabs, cards});
  }

  changeSelected = (tab) => {
      // Finish this function, reflecting the new selected tab in the state
      this.setState({selected: tab})
  }

  /* Complete this function, if the selected tab is 'all' it should return all 
     of the items from cardData. If it is something else, it shoudl only return 
     those cards whose 'tab' mached that which is selected. */
  filterCards = () => {
    if (this.state.selected === 'all'){
      return cardData;
    }
    return this.state.cards.filter(card => {
      console.log(`comparing ${card.tab} to ${this.state.selected}`)
      return card.tab === this.state.selected;
    })
  }

  render(){
    return (
      <ContentContainer>
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs selectedTab={this.state.selected} selectTabHandler={this.changeSelected} tabs={this.state.tabs}/>
        <Cards cards={this.filterCards()}/>
      </ContentContainer>
    )
  }
}

const ContentContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;
`