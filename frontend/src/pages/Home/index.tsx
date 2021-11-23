import React from 'react';
import OrderDetails from '../../components/OrderDetails';
import Orders from '../../components/Orders';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Orders />
      <OrderDetails />
    </Container>
  );
};

export default Home;
