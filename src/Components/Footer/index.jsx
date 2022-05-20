import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Icon, Modal } from './Footer.style';

const Footer = () => {
  return (
    <Container>
      <Link
        to="/loginadmin"
        style={{ color: 'inherit', textDecoration: 'inherit' }}
      >
        <Icon />
      </Link>
    </Container>
  );
};

export default Footer;
