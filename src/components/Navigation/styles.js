import styled from 'styled-components';

import { COLORS } from 'config/constants';

const { brand, white } = COLORS;

export const Heading = styled.h2`
  background: ${brand};
  color: ${white};
  text-align: center;
  margin: 0;
  height: 4rem;
  line-height: 4rem;
`;

export const TabGroup = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  background: ${brand};
  margin: 1rem 0;
  padding: 0;
  border-radius: 100vw;
`;

export const FlexTabNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;
