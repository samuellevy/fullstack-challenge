import React, { useEffect, useState } from 'react';
import NewOrderForm from '../../components/NewOrderForm';
import OrderDetails from '../../components/OrderDetails';
import Orders from '../../components/Orders';
import { IOrder } from '../../dtos/IOrder';

import { Container } from './styles';

const Home: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <Container>
      <h1>Home</h1>
      <Orders />
    </Container>
  );
};

export default Home;
