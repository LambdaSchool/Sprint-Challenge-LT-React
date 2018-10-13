import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((card, index) => <Card card={card} key={index} />)}
    </div>
  );
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string,
    })
  ).isRequired,
};

export default Cards;
