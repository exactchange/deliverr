import styled from 'styled-components';

import { COLORS } from 'config/constants';

const { brand, white } = COLORS;

export const Tab = styled.li`
  border-radius: 100vw;
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  color: ${white};
  cursor: pointer;

  &.active {
    font-weight: 800;
    background: ${white};
    color: ${brand};
  }
`;
