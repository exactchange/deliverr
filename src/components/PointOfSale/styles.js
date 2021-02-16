import styled from 'styled-components';

import { COLORS } from 'config/constants';

const { brand, gray, white, silver } = COLORS;

export const Ticket = styled.aside`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: ${white};
  border: 1px solid ${silver};
  border-radius: 0.2rem;
  margin: 0 0.5rem 1rem;
  padding: 1rem;
  max-height: 100%;
  max-width: 20rem;

  @media (max-width: 900px) {
    position: absolute;
    width: 100%;
    top: 0;
    right: ${({ isExpanded }) => (isExpanded ? '0' : '100%')};
    bottom: 0;
    margin: 0;
    z-index: 100;
  }
`;

export const TicketHeading = styled.h2`
  margin: 0 0 1rem;
  font-size: 1.3em;
`;

export const TicketOrder = styled.ul`
  list-style: none;
  padding: 0;
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
`;

export const TicketOrderItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 1.1.em;
  line-height: 2em;

  > div {
    flex: 1;

    &:last-of-type {
      text-align: right;
    }
  }
`;

export const TicketOrderButton = styled.button`
  -webkit-appearance: none;
  border: none;
  border-radius: 0.2rem;
  background: ${brand};
  color: ${white};
  height: 3rem;
  line-height: 3rem;
  font-size: 1.1em;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  outline: none;
`;

export const Menu = styled.ul`
  flex: 1;
  display: grid;
  list-style: none;
  border: 1px solid ${gray};
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: repeat(4, 25%);
  border-radius: 0.2rem;
  background: ${silver};
  margin: 0 0.5rem 1rem;
  padding: 1rem;
  max-height: 100%;

  @media (max-width: 900px) {
    display: block;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-y: auto;
  }
`;

export const MenuItemHeading = styled.h3`
  margin: 0.25rem 0;
`;

export const MenuItemSubheading = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${brand};
  color: ${white};
  border-radius: 100vw;
  margin: 0;
  padding: 0 0.75em;
  font-size: 0.9em;

  @media (max-width: 900px) {
    width: 3em;
  }
`;

export const Image = styled.div`
  background: ${silver};
  border-radius: 0.2rem;
  width: 100%;
  height: 100%;
  margin: 0 0 1rem;

  @media (max-width: 900px) {
    height: calc(100% - 5rem);
    margin: 1rem 0 0;
  }
`;

export const ExpandButton = styled(TicketOrderButton)`
  display: none;
  position: fixed;
  bottom: 0;
  border-radius: 0;
  width: 100%;
  z-index: 90;

  @media (max-width: 900px) {
    display: block;
  }
`;

export const LinkButton = styled.button`
  -webkit-appearance: none;
  border: none;
  background: transparent;
  color: ${brand};
  outline: none;
  cursor: pointer;
`;

export const LinkButtonMobile = styled(LinkButton)`
  margin: 1rem 0 0;
  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`;
