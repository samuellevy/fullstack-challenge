import React, { useCallback, useEffect } from 'react';
import Orders from '../../components/Orders';

import logo from '../../assets/logo-2.png';

import { Container, Header } from './styles';
import api from '../../services/api';
import { useOrders } from '../../context/orders';

const Home: React.FC = () => {
  const { setOrders } = useOrders();

  const getData = useCallback(async () => {
    const response = await api.get('http://localhost:3333/orders');
    return response.data;
  }, []);

  useEffect(() => {
    getData().then(setOrders);
  }, [getData, setOrders]);

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
