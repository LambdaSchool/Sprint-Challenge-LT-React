import React, { Component } from 'react';
import Card from './Card';
import PropTypes from "prop-types";

const Cards = props => {
  console.log(props)
  return (
    <div className="cards-container">
      {props.cards.map(card => <Card card={card} />)}
    </div>
  )
}

Cards.propTypes = {
  card: PropTypes.object
}

export default Cards;