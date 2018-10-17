import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import styled from 'styled-components';

const EntireApp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif;
`;

const App = () => {
  return (
    <EntireApp>
      <TopBar />
      <Header />
      <Content />
    </EntireApp>
  );
}

export default App;
