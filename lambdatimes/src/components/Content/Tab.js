import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TabDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: ${props => props.activeColor || "#fff"};
  background-color: ${props => props.activeBg || "#333"};
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  border: ${props => props.activeBorder || null};

  &:hover {
    text-decoration: underline;
  }
`;

class Tab extends Component {
  render() {
    return (
      <TabDiv
        activeColor={this.props.tab === this.props.selectedTab ? "#333" : null}
        activeBg={this.props.tab === this.props.selectedTab ? "#fff" : null}
        activeBorder={
          this.props.tab === this.props.selectedTab ? "2px solid #333" : null
        }
        onClick={e => this.props.selectedTabHandler(this.props.tab)}
      >
        {this.props.tab.toUpperCase()}
      </TabDiv>
    );
  }
}

Tab.propTypes = {
  props: PropTypes.shape({
    selectTabHandler: PropTypes.func,
    selectedTab: PropTypes.func,
    tab: PropTypes.string
  })
};

export default Tab;
