import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from './NavBar.style';

const NavBar = () => {
  return (
    <Container>
      <NavLink to="/">Home</NavLink>
      <NavLink to="table">Settings</NavLink>
    </Container>
  );
};

export default NavBar;
