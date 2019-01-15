import React from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((tab, index) => {
          return <Tab 
            tab={tab} 
            key={index}
            selectedTab={props.selectedTab}
            selectedTabHandler={props.selectedTabHandler}
          />
        })}
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string)
}

export default Tabs;
