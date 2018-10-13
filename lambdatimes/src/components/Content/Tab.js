import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  return (
    <div
      className={props.selectedTab === props.tab ? 'tab active-tab' : 'tab'}
      onClick={() => props.selectTabHandler(props.tab)}>
      {props.tab.toUpperCase()}
    </div>
  );
}

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
};

export default Tab;
