// Keys
export const POINT_OF_SALE = 'POINT_OF_SALE';
export const ORDERS = 'ORDERS';
export const ORDER = 'ORDER';
export const ERRORS = 'ERRORS';

// Strings
const ERROR_MESSAGE_PREFIX = '[Error]: ';

export const TEXT = {
  [POINT_OF_SALE]: {
    heading: 'New Order',
    tabHeading: 'Create'
  },
  [ORDERS]: {
    heading: 'All Orders',
    tabHeading: 'View'
  },
  [ORDER]: {
    open: 'Open',
    pickedUp: 'Picked up'
  },
  [ERRORS]: {
    notFoundItem: `${ERROR_MESSAGE_PREFIX}Item not found.`,
    notFoundOrder: `${ERROR_MESSAGE_PREFIX}Order not found.`,
    unexpectedInventory: `${ERROR_MESSAGE_PREFIX}Insufficient inventory.`
  }
};

// Colors
export const COLORS = {
  brand: '#ff4949',
  urgent: '#fc0',
  success: '#00e673',
  black: '#101010',
  white: '#fefefe',
  gray: '#dedede',
  silver: '#efefef'
};
