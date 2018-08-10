import React from "react";
import PropTypes from 'prop-types';
const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      //template literal + ternary operator
      className={`tab ${props.selectedTab} ? 'active-tab' : null`}
      onClick={() => {
        props.selectTabhandler(props.tab);
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tabs: PropTypes.array,
  selectedTab: PropTypes.string,
  selectTabhandler: PropTypes.function,
  tab: PropTypes.object
};

export default Tab;
