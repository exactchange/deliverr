import React, { useEffect, useState } from 'react';

import { POINT_OF_SALE, ORDERS } from 'config/constants';
import { Navigation, PointOfSale, Orders } from 'components';
import cache from 'files/data.json';

import { ApplicationFrame } from './styles';

// Formats a number as "$00.00"
export const toDollar = (number) => `$${number.toFixed(2)}`;

const App = () => {
  // App state
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [menu, setMenu] = useState([]);

  // Restore state from cache on mount
  useEffect(() => {
    setInventory(cache.inventory);
    setMenu(cache.menu);
  }, []);

  // Main nav stack
  const NavigationStack = {
    [POINT_OF_SALE]: PointOfSale,
    [ORDERS]: Orders
  };

  return (
    <ApplicationFrame>
      <Navigation
        stack={NavigationStack}
        state={{
          inventory,
          menu,
          cart,
          orders,
          setInventory,
          setMenu,
          setCart,
          setOrders
        }}
      />
    </ApplicationFrame>
  );
};

export default App;
