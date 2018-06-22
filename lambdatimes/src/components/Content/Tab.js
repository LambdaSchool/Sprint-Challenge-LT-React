import React from 'react';

const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  const selectedClass = 'tab'
  if (props.tab === props.selectedTab) {
    return  <div className='tab active-tab'>{props.tab}</div>
  } else {
    return <div className='tab'>{props.tab}</div>
  }

  return (
    <div
      className={selectedClass}
      onClick={() => {props.selectTabHandler}}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.

export default Tab;