import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Post = styled.div`
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

const PostHeadline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;

const PostAuthorContainer = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
`;

const PostImgContainer = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`;

const PostImg = styled.img`
  width: 40px;
`;

const PostAuthorSpan = styled.div`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Card = props => {
  return (
    <Post>
      <PostHeadline>{props.headline}</PostHeadline>
      <PostAuthorContainer>
        <PostImgContainer>
          <PostImg src={props.img} alt="post" />
        </PostImgContainer>
        <PostAuthorSpan>By {props.author}</PostAuthorSpan>
      </PostAuthorContainer>
    </Post>
  );
};

Card.propTypes = {
  cards: PropTypes.shape({
    author: PropTypes.string,
    headline: PropTypes.string,
    img: PropTypes.string
  })
};

export default Card;
