import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      // DONE: Set this to an initial value
      selected: 'All',
      tabs: [],
      cards: []
    }
  }

  componentDidMount(){
    // DONE: Once the component has mounted, get the data and reflect that data on the state
    this.setState({tabs: tabData})
    this.setState({cards: cardData})
  }

  changeSelected = (tab) => {
    return () => {
      // DONE: Finish this function, reflecting the new selected tab in the state
      this.setState({selected: tab})
    }
  }

  /* DONE: Complete this function, if the selected tab is 'all' it should return all 
     of the items from cardData. If it is something else, it shoudl only return 
     those cards whose 'tab' mached that which is selected. */
  filterCards = () => {
    if (this.state.selected === 'all') {
      return this.state.cards;  
    } else {
      return this.state.cards.filter(card => card.tab === this.state.selected)
    }
  }

  render(){
    return (
      <div className="content-container">
        {/* 
          DONE: Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs selectedTab={this.state.selected} selectTabHandler={this.changeSelected} tabs={this.state.tabs}/>
        <Cards cards={this.filterCards()}/>
      </div>
    )
  }
}