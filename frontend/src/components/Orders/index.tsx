import React, { useEffect, useState } from 'react';
import { IOrder } from '../../dtos/IOrder';
import OrderDetails from '../OrderDetails';

import {
  Container,
  TableBox,
  TableHeader,
  TableHeaderItem,
  TableBody,
  TableBodyLine,
  TableBodyLineItem,
  Button,
} from './styles';

const Orders: React.FC = () => {
  const [isOrderDetailsActive, setIsOrderDetailsActive] = useState(false);
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [orderSelected, setOrderSelected] = useState<IOrder>({} as IOrder);

  useEffect(() => {
    setOrders([
      {
        id: 1,
        contactName: 'João',
        contactPhone: '99999999',
        agency: 'Agencia 1',
        orderDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        category: 'cat 1',
        company: 'string',
        deadline: '22/12/2021',
      },
      {
        id: 2,
        contactName: 'João',
        contactPhone: '99999999',
        agency: 'Agencia 1',
        orderDescription: 'Descrição do pedido',
        category: 'cat 1',
        company: 'string',
        deadline: '22/12/2021',
      },
    ]);
  }, []);

  const handleOrderDetails = (order: IOrder) => {
    setOrderSelected(order);
    setIsOrderDetailsActive(true);
  };

  const handleCloseOrderDetails = () => {
    setIsOrderDetailsActive(false);
  };

  return (
    <>
      <Container>
        <Button>Open new order</Button>
        <TableBox>
          <TableHeader>
            <tr>
              <TableHeaderItem>ID</TableHeaderItem>
              <TableHeaderItem>Category</TableHeaderItem>
              <TableHeaderItem>Agency</TableHeaderItem>
              <TableHeaderItem>Company</TableHeaderItem>
              <TableHeaderItem>Deadline</TableHeaderItem>
            </tr>
          </TableHeader>

          <TableBody>
            {orders.map(order => (
              <TableBodyLine
                key={order.id}
                onClick={() => handleOrderDetails(order)}
              >
                <TableBodyLineItem>#{order.id}</TableBodyLineItem>
                <TableBodyLineItem>{order.category}</TableBodyLineItem>
                <TableBodyLineItem>{order.agency}</TableBodyLineItem>
                <TableBodyLineItem>{order.company}</TableBodyLineItem>
                <TableBodyLineItem>{order.deadline}</TableBodyLineItem>
              </TableBodyLine>
            ))}
          </TableBody>
        </TableBox>
      </Container>
      <OrderDetails
        active={isOrderDetailsActive}
        data={orderSelected}
        closeCallbackFunction={() => handleCloseOrderDetails()}
      />
      {/* <NewOrderForm /> */}
    </>
  );
};

export default Orders;
