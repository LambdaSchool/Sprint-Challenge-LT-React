import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    // Once the component has mounted, get the data and reflect that data on the state.
    const allTabs = this.state.tabs;
    allTabs.push(...tabData);
    const allCards = this.state.cards;
    allCards.push(...cardData)
    this.setState({
      tabs: allTabs,
      cards: allCards,
    })
    // console.log(this.state.tabs)
    // console.log(this.state.cards)
  }

  // changeSelected = tab => {
  //   // this function should take in the tab and update the state with the new tab.
  //   console.log(tab.target.innerHTML);
  //   let selectedTab = this.state.tabs.map(item => {
  //     return (
  //       item.includes(tab.target.innerHTML)
  //     )
  //   })
  //   this.setState({
  //     tabs: selectedTab,
  //   })
  // };

  filterCards = (event) => {
   
    if (event.target.innerHTML === 'ALL'){
      const displayedCards = [];
      displayedCards.push(...cardData)
      this.setState({
        cards: displayedCards,
      })
    } 
    else {
      let filteredCards = cardData.filter((card) => {
        // console.log(card.tab.toLowerCase());
        return (
          card.tab === event.target.innerHTML.toLowerCase()
        )
      })
      this.setState({
        cards: filteredCards,
      })
    }
    console.log(event.target.innerHTML);
    console.log(this.state);
    // return this.state.cards;
  };

  render() {
    return (
      <div className="content-container">
        <Tabs tabs={this.state.tabs} onClick={this.filterCards} />
        <Cards cards={this.state.cards} />
      </div>
    );
  }
}
