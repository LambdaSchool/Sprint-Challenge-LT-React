import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(i => {
        return(
          <Card card={i} key={Math.random()}/>
        )
      })}
    </div>
  )
}
/* Using the cards prop, map over the list creating a
    new Card component for each passing the card as the only prop*/

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape(
      { headline: PropTypes.string,
        tab: PropTypes.string,
        img: PropTypes.string,
        author: PropTypes.string})
  )
};

export default Cards;
