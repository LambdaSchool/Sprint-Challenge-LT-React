import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.cardData.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.cardData.img} alt={props.cardData.img} />
        </div>
        <span>By {props.cardData.author}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardData: PropTypes.object.isRequired,
};

export default Card;
