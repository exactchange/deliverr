import React, { useState } from 'react';

import { TEXT } from 'config/constants';
import { NavigationTab } from 'components';

import { Heading, FlexTabNav, TabGroup } from './styles';

const Navigation = ({ stack, state }) => {
  const defaultView = Object.keys(stack)[0];
  const [view, setView] = useState(defaultView);

  const ActiveComponent = stack[view];

  return (
    <>
      <Heading>{TEXT[view].heading}</Heading>
      <FlexTabNav>
        <TabGroup role="navigation">
          {Object.keys(stack).map((tabView) => (
            <NavigationTab
              key={tabView}
              isActive={view === tabView}
              onClick={() => setView(tabView)}
              text={TEXT[tabView].tabHeading}
            />
          ))}
        </TabGroup>
      </FlexTabNav>
      <ActiveComponent {...state} setView={setView} />
    </>
  );
};

export default Navigation;
