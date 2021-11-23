import React from 'react';
import Orders from '../../components/Orders';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Home</h1>

      <Orders />
    </Container>
  );
};

export default Home;
