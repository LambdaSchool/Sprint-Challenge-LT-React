import React from 'react';
import propType from 'prop-types';

const Tab = props => {
  const { tab, selectedTab, selectTabHandler } = props;
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={tab === selectedTab ? 'tab active-tab' : 'tab'}
      onClick={() => selectTabHandler(tab)}>
      {tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propType = {
  selectTabHandler: propType.func.isRequired,
  tab: propType.object.isRequired,
  selectedTab: propType.string.isRequired
};

export default Tab;
