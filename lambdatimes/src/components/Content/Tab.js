import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* DONE: Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  let selectedClass = 'tab'

  if (props.selectedTab === props.tab) {
    console.log('1st')
    selectedClass = "tab active-tab"
  } else {
    console.log('2nd')
    selectedClass = "tab"
  }
  
  return (
    <div
      className={selectedClass}
      onClick={props.selectTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  selectedTab: PropTypes.string,
  tab: PropTypes.string
};

export default Tab;