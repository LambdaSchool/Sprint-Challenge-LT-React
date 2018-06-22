import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  return (
    <div
      className={props.selectedTab === props.tab ? 'tab active-tab' : 'tab'}
      onClick={() => { props.selectTabHandler(props.tab) }}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

Tab.propTypes = {
  tab: PropTypes.string
}

export default Tab;