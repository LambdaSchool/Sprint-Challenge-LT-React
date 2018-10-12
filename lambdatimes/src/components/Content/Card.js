import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardWrapper = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`;

const Headline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;

const Author = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
`;

const ImgContainer = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`;

const Img = styled.img`
  width: 40px;
`;

const AuthorSpan = styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Card = ({ card }) => {
  return (
    <CardWrapper>
      <Headline>{card.headline}</Headline>
      <Author>
        <ImgContainer>
          <Img src={card.img} alt={card.headline} />
        </ImgContainer>
        <AuthorSpan>By {card.author}</AuthorSpan>
      </Author>
    </CardWrapper>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    headlines: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
};

export default Card;
