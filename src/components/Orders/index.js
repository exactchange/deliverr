import React from 'react';

import { TEXT } from 'config/constants';
import { toDollar } from 'components/App';
import { Viewport } from 'components/App/styles';

import {
  OrderList,
  OrderCard,
  OrderCardHeader,
  OrderItems,
  OrderItem
} from './styles';

const Orders = ({ orders, setOrders }) => {
  // Handle clicking an order
  const onClickOrder = (id) => {
    const order = orders.find((order) => order.id === id);

    if (!order) {
      console.error(TEXT.ERRORS.notFoundOrder);

      return alert(TEXT.ERRORS.notFoundOrder);
    }

    const updatedOrders = orders.slice();

    updatedOrders.splice(orders.indexOf(order), 1, {
      ...order,

      isPickedUp: !order.isPickedUp
    });

    setOrders(updatedOrders);
  };

  return (
    <Viewport>
      <OrderList>
        {orders.map(({ id, cart, cartTotal, isPickedUp }) => (
          <OrderCard
            key={id}
            isPickedUp={isPickedUp}
            onClick={() => onClickOrder(id)}
          >
            <OrderCardHeader>
              <strong>Order #{id}</strong>
              {isPickedUp ? (
                <strong>{TEXT.ORDER.pickedUp}</strong>
              ) : (
                <em>{TEXT.ORDER.open}</em>
              )}
            </OrderCardHeader>
            <OrderItems>
              {cart.map(({ name }, index) => (
                <OrderItem key={`${name}-${index}`}>{name}</OrderItem>
              ))}
              <OrderItem>Total: {toDollar(cartTotal)}</OrderItem>
            </OrderItems>
          </OrderCard>
        ))}
      </OrderList>
    </Viewport>
  );
};

export default Orders;
