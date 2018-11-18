import React from "react";
import Card from "./Card";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

const Cards = props => {
  return (
    <CardsContainer>
      {props.cards.map((card, i) => {
        return (
          <Card
            key={i}
            headline={card.headline}
            author={card.author}
            img={card.img}
          />
        );
      })}
    </CardsContainer>
  );
};

export default Cards;
