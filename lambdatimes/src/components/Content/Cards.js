import React, { Component } from 'react';
import Card from './Card';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const StyledCards = styled.div `
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
`
const Cards = props => {
  return (
    <StyledCards>
      {props.cards.map(card => <Card key={card.headline} card={card}/>)
/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </StyledCards>
  )
}

// Make sure you include prop types for all of your incoming props
Card.propTypes = {
    key: PropTypes.string,
    card: PropTypes.shape({
      headline: PropTypes.string.isRequired,
      tab: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })}

export default Cards;