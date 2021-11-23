import React, { useEffect, useState } from 'react';
import NewOrderForm from '../../components/NewOrderForm';
import OrderDetails from '../../components/OrderDetails';
import Orders from '../../components/Orders';
import { IOrder } from '../../dtos/IOrder';

import logo from '../../assets/logo-2.png';

import { Container, Header } from './styles';

const Home: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <Container>
      <Header>
        <img src={logo} alt="Logo" />
      </Header>
      <Orders />
    </Container>
  );
};

export default Home;
