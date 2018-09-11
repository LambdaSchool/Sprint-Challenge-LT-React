import React from 'react';
import{ HeaderWrapper,HeaderText,Date,Temp} from './Styles/HeaderStyles'
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderWrapper>
      <Date>September 7, 2018</Date>
      <HeaderText>Lambda Times</HeaderText>
      <Temp>98°</Temp>
    </HeaderWrapper>
  )
}

export default Header