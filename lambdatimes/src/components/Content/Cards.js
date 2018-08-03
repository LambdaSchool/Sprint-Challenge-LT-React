import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';


const Cards = props => {
  return (
    <div className="cards-container">
    {props.cards.map((cardItem, index) => <Card key={index} card={cardItem} />)}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.array
};

export default Cards;
