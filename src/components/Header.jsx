import React from 'react';
import Container from '@mui/material/Container';

import './Header.scss';

const Header = () => {

  return (
    <Container maxWidth="sm">
      <h1 className="header-title">diggit</h1>
    </Container>
  );
}

export default Header;