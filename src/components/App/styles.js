import styled from 'styled-components';

import { COLORS } from 'config/constants';

const { black, white, gray } = COLORS;

export const ApplicationFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${white};
  color: ${black};
  overflow: inherit;
`;

// Reusable Component Library

export const Viewport = styled.section`
  display: flex;
  flex-direction: row-reverse;
  flex: 1;
  overflow: inherit;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  background: ${white};
  border-radius: 0.2rem;
  padding: 0.5rem;
  margin: 0.25rem;
  cursor: pointer;
  box-shadow: 0 0.1rem 0.3rem ${gray};
  transition: all 0.2s ease;
  opacity: ${(props) => (props.disabled ? 0.25 : 1)};

  &:hover {
    box-shadow: 0 0.2rem 0.5rem ${gray};
    transform: translate3d(0, -0.25rem, 0);
  }

  &.disabled {
    opacity: 0.25;
  }

  @media (max-width: 900px) {
    display: block;
    width: calc(100% - 4rem);
    height: 12rem;
    margin: 1rem;
  }
`;
