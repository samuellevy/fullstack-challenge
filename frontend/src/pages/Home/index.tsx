import React, { useEffect } from 'react';
import Orders from '../../components/Orders';

import logo from '../../assets/logo-2.png';

import { Container, Header } from './styles';
import { useOrders } from '../../context/orders';
import { useOrderService } from '../../services/orders';

const Home: React.FC = () => {
  const { setOrders } = useOrders();
  const { getOrders } = useOrderService();

  useEffect(() => {
    getOrders().then(setOrders);
  }, [getOrders, setOrders]);

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
