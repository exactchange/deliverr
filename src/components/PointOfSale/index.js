import React, { useEffect, useState } from 'react';

import { ORDERS, TEXT } from 'config/constants';
import { toDollar } from 'components/App';
import { Card, Viewport } from 'components/App/styles';

import {
  Menu,
  MenuItemHeading,
  MenuItemSubheading,
  Image,
  LinkButton,
  LinkButtonMobile,
  ExpandButton,
  Ticket,
  TicketHeading,
  TicketOrder,
  TicketOrderItem,
  TicketOrderButton
} from './styles';

const PointOfSale = ({
  inventory,
  menu,
  cart,
  orders,
  setInventory,
  setCart,
  setOrders,
  setView
}) => {
  const [updatedInventory, setUpdatedInventory] = useState({});
  const [cartTotal, setCartTotal] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  // Observe changes to inventory
  useEffect(() => {
    setUpdatedInventory(inventory);

    return () => {
      setCart([]);
    };
  }, [inventory, setCart]);

  // Handle clicking expand (mobile only)
  const onClickExpand = () => setIsExpanded(!isExpanded);

  // Handle clicking an item in the grid
  const onClickItem = ({ ingredients, name, price }) => {
    // Update inventory
    Object.keys(ingredients).forEach((ingredient) => {
      const quantity = parseInt(
        updatedInventory[ingredient] - ingredients[ingredient],
        10
      );

      if (quantity < 0) {
        console.error(TEXT.ERRORS.unexpectedInventory);

        return alert(TEXT.ERRORS.unexpectedInventory);
      }

      setUpdatedInventory({
        ...updatedInventory,

        [ingredient]: quantity
      });
    });

    // Update cart
    setCart([...cart, { name, price }]);
    setCartTotal(cartTotal + price);
  };

  // Handle clicking a "Remove" link next to an item
  const onClickRemoveItem = (name) => {
    // Cancel inventory changes
    const { ingredients, price } = menu.find(
      (menuItem) => menuItem.name === name
    );

    Object.keys(ingredients).forEach((ingredient) => {
      const quantity = parseInt(
        updatedInventory[ingredient] + ingredients[ingredient],
        10
      );

      setUpdatedInventory({
        ...updatedInventory,

        [ingredient]: quantity
      });
    });

    // Update cart
    const updatedCart = cart.slice();
    const item = updatedCart.find((item) => item.name === name);

    if (!item) {
      console.error(TEXT.ERRORS.notFoundItem);

      return alert(TEXT.ERRORS.notFoundItem);
    }

    updatedCart.splice(updatedCart.indexOf(item), 1);

    setCart(updatedCart);
    setCartTotal(Math.max(0, cartTotal - price));
  };

  // Handle clicking the "Checkout" button
  const onClickCheckout = () => {
    setOrders([
      ...orders,

      {
        id: orders.length,
        cart,
        cartTotal,
        isPickedUp: false
      }
    ]);

    setInventory(updatedInventory);
    setUpdatedInventory(inventory);
    setCart([]);
    setIsExpanded(false);
    setView(ORDERS);
  };

  return (
    <Viewport>
      <Ticket isExpanded={isExpanded}>
        <TicketHeading>Current Order</TicketHeading>
        <TicketOrder>
          {cart.map(({ name, price }, index) => {
            const quantity = cart.filter((item) => item.name === name).length;

            const isAdded =
              cart.indexOf(cart.find((item) => item.name === name)) !== index;

            // Early escape render if there are multiple
            if (quantity > 1 && isAdded) {
              // Skip rendering additional lines
              // eslint-disable-next-line
              return;
            }

            const priceMultiple = price * quantity;

            return (
              <TicketOrderItem key={`${name}-${index}`}>
                <div>
                  {name} x{quantity}
                </div>
                <div>{toDollar(priceMultiple)}</div>
                <LinkButton onClick={() => onClickRemoveItem(name)}>
                  Remove
                </LinkButton>
              </TicketOrderItem>
            );
          })}
        </TicketOrder>
        <TicketOrderButton disabled={!cart.length} onClick={onClickCheckout}>
          Checkout {toDollar(cartTotal)}
        </TicketOrderButton>
        <LinkButtonMobile onClick={onClickExpand}>Close</LinkButtonMobile>
      </Ticket>
      <Menu>
        {menu.map(({ ingredients, name, price }) => {
          const isOutOfStock = Object.keys(ingredients)
            .map(
              (ingredient) =>
                updatedInventory[ingredient] >= ingredients[ingredient]
            )
            .includes(false);

          return (
            <Card
              key={name}
              disabled={isOutOfStock}
              {...(isOutOfStock
                ? {}
                : {
                    onClick: () => onClickItem({ ingredients, name, price })
                  })}
            >
              <MenuItemHeading>{name}</MenuItemHeading>
              <MenuItemSubheading>{toDollar(price)}</MenuItemSubheading>
              <Image />
            </Card>
          );
        })}
        <ExpandButton disabled={!cart.length} onClick={onClickExpand}>
          Show Cart ({cart.length})
        </ExpandButton>
      </Menu>
    </Viewport>
  );
};

export default PointOfSale;
