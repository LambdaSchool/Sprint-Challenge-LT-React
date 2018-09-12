import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Tab from './Tab'

const Tabs = props => {
  return (
    <Div1>
      <Div2>
        <Span>TRENDING TOPICS:</Span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
          {
            props.tabs.map(tab => {
              return <Tab
                key={tab}
                tab={tab}
                selectedTab={props.selectedTab}
                selectedTabHandler={props.selectedTabHandler}          
              />
            })
          }
      </Div2>
    </Div1>
  )
}

const Div1 = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`
const Div2 = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`
const Span = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectedTab: PropTypes.string.isRequired,
  selectedTabHandler: PropTypes.func.isRequired,
}

export default Tabs
