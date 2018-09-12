import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <Div
      active={props.tab === props.selectedTab}
      onClick={(e) => props.selectedTabHandler(e, props.tab)}
    >
      {props.tab.toUpperCase()}
    </Div>
  )
}

const Div = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  :hover {
    text-decoration: underline;
  }
  ${({ active }) => active && `
    background-color: #fff;
    color: #333;
    border: 2px solid #333;
  `}
`

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectedTabHandler: PropTypes.func.isRequired,
}

export default Tab
