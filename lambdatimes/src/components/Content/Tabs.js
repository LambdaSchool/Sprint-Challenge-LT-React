import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";
import styled from "styled-components";

const TabsContainer = styled.div`
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

const TabsTopics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const TabsTitle = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Tabs = props => {
  return (
    <TabsContainer>
      <TabsTopics>
        <TabsTitle>TRENDING TOPICS:</TabsTitle>
        {props.tabs.map((tab, i) => {
          return (
            <Tab
              selectedTab={props.selectedTab}
              selectedTabHandler={props.selectedTabHandler}
              tab={tab}
              key={i}
            />
          );
        })}
      </TabsTopics>
    </TabsContainer>
  );
};

Tabs.propTypes = {
  props: PropTypes.shape({
    selectTabHandler: PropTypes.func,
    selectedTab: PropTypes.func,
    tab: PropTypes.string
  })
};

export default Tabs;
