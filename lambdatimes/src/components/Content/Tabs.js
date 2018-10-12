import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Tab from './Tab';

const TabsWrapper = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const Topics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const Title = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Tabs = props => {
  return (
    <TabsWrapper>
      <Topics>
        <Title>TRENDING TOPICS:</Title>
        {props.tabs.map((tab, index) => (
          <Tab
            key={index}
            selectTabHandler={props.selectTabHandler}
            selectedTab={props.selectedTab}
            tab={tab}
          />
        ))}
      </Topics>
    </TabsWrapper>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
};

export default Tabs;
