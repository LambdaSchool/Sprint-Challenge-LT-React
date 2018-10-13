import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

class Cards extends Component {
  constructor(props) {
    super(props);
     this.state = {
      cards: props.cards
    }
  }
  
  render() {  
    return (
      <div className="cards-container">
        {this.props.cards.map((card, index) => <Card key = {index} card = {card} />)}
      </div>
    )
  }
}


// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
}


export default Cards;