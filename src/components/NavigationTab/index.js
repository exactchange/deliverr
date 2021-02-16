import React from 'react';

import { Tab } from './styles';

const NavigationTab = ({ isActive, onClick, text }) => (
  <Tab className={isActive ? 'active' : ''} onClick={onClick}>
    {text}
  </Tab>
);

export default NavigationTab;
