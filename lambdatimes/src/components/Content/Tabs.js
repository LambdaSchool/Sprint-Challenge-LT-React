import React from 'react';
import Tab from './Tab'
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((tab, index) => <Tab key={index} selectedTab={props.selectedTab} tab={tab} Tab selectTabHandler={props.selectTabHandler} />)}
        </div>
      </div>
  )
}

Tabs.propTypes = {
  tabs: PropTypes.array
}

export default Tabs
