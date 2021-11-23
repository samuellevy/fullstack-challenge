import React, { useContext, useEffect, useState } from 'react';
import Orders from '../../components/Orders';

import logo from '../../assets/logo-2.png';

import { Container, Header } from './styles';
import api from '../../services/api';
import { OrdersContext } from '../../context/orders';

const Home: React.FC = () => {
  const ordersContext = useContext(OrdersContext);

  const getData = async () => {
    const response = await api.get('http://localhost:3333/orders');

    ordersContext.dispatch({
      type: 'SET_ORDERS',
      payload: response.data,
    });
  };

  useEffect(() => {
    getData();
  }, []);

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
