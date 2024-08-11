// NotFound.js
import React from 'react';
import { Container, Typography } from '@mui/material';

function NotFound() {
  return (
    <Container>
      <Typography variant="h4">404 - Not Found</Typography>
      <Typography>The page you are looking for does not exist.</Typography>
    </Container>
  );
}

export default NotFound;
