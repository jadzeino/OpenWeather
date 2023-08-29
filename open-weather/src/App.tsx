import React from 'react';
import Weather from './components/Weather';
import { Container } from '@mui/material';

const App: React.FC = () => {
  return (
    <Container>
      <Weather />
    </Container>
  );
}

export default App;
