import React from 'react'

import Tabs from './Tabs'
import Cards from './Cards'

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data'

export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    }
  }

  componentDidMount() {
    // Once the component has mounted, get the data and reflect that data on the state.
    this.setState({
      tabs: tabData,
      cards: cardData
    })
  }

  changeSelected = (e, tab) => {
    e.preventDefault()
    // this function should take in the tab and update the state with the new tab.
    this.setState({ selected: tab })
  }

  filterCards = () => {
    /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selcted
      
      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithim for the logic here is as follows: 
        - if the selected tab is 'all' it should return all 
          of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */
    // const cards = [...this.state.cards]

    return this.state.selected === 'all' ? cardData
      : this.state.cards.filter(card => card.tab.includes(this.state.selected))
  }

  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs
          tabs={this.state.tabs}
          selectedTab={this.state.selected}
          selectedTabHandler={this.changeSelected}
        />
        <Cards cards={this.filterCards()} />
      </div>
    )
  }
}
