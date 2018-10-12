import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TabWrapper = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: ${props => (props.tab === props.selectedTab ? '#333' : '#fff')};
  background-color: ${props => (props.tab === props.selectedTab ? '#fff' : '#333')};
  border: ${props => (props.tab === props.selectedTab ? '2px solid #333' : 'none')};
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const Tab = props => {
  return (
    <TabWrapper
      tab={props.tab}
      selectedTab={props.selectedTab}
      onClick={() => {
        props.selectTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </TabWrapper>
  );
};

Tab.propTypes = {
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
  tab: PropTypes.string
};

export default Tab;
