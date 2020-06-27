import React from 'react';
import styled from 'styled-components';

export default ({ toggle, setToggle }) => (
  <Hamburger toggle={toggle} onClick={() => setToggle(!toggle)}>
    <div />
  </Hamburger>
);

const Hamburger = styled.div`
  grid-column: 1;
  justify-self: end;
  cursor: pointer;
  width: 30px;
  &::after,
  &::before,
  div {
    background-color: black;
    border-radius: 5px;
    content: '';
    display: block;
    height: 3px;
    margin: 3px 0;
    transition: all 0.2s ease-in-out;
  }

  &::before {
    transform: ${props => (props.toggle ? `translateY(6px) rotate(45deg)` : `none`)};
  }

  &::after {
    transform: ${props => (props.toggle ? `translateY(-6px) rotate(-45deg)` : `none`)};
  }
  div {
    transform: ${props => (props.toggle ? `translateX(-50px) scaleX(0) scaleY(3)` : `none`)};
  }
  &:hover::after,
  &:hover::before,
  &:hover div {
    background-color: var(--coral);
  }

  @media only screen and (min-width: 990px) {
    display: none;
  }
`;
