import styled from 'styled-components';

import { COLORS } from 'config/constants';
import { Card } from 'components/App/styles';

const { silver, gray } = COLORS;

export const OrderList = styled.ul`
  background: ${silver};
  flex: 1;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  overflow-y: auto;
`;

export const OrderCard = styled(Card)`
  flex-direction: column;
  margin: 0.5rem 1rem;
  padding: 1rem;
  opacity: ${({ isPickedUp }) => (isPickedUp ? '0.5' : '1')};
`;

export const OrderCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${gray};
  margin: 0 0 0.5rem;
  padding: 0 0 0.5rem;

  > em,
  strong {
    flex: 1;

    &:nth-child(2) {
      text-align: right;
    }
  }
`;

export const OrderItems = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100%;
  padding: 0;
`;

export const OrderItem = styled.li`
  flex: 1;
`;
