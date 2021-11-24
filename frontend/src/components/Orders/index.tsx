import React, { useState } from 'react';
import { useOrders } from '../../context/orders';
import { IOrder } from '../../dtos/IOrder';
import NewOrderForm from '../NewOrderForm';
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
  const [isNewOrderFormActive, setIsNewOrderFormActive] = useState(false);
  const [orderSelected, setOrderSelected] = useState<IOrder>({} as IOrder);
  const { orders } = useOrders();

  const handleOrderDetails = (order: IOrder) => {
    setOrderSelected(order);
    setIsOrderDetailsActive(true);
  };

  const handleCloseOrderDetails = () => {
    setIsOrderDetailsActive(false);
  };

  const handleNewOrderForm = () => {
    setIsNewOrderFormActive(true);
  };

  const handleCloseNewOrderForm = () => {
    setIsNewOrderFormActive(false);
  };

  return (
    <>
      <Container>
        <Button onClick={() => handleNewOrderForm()}>Open new order</Button>
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
            {orders.map((order: IOrder) => (
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
      <NewOrderForm
        active={isNewOrderFormActive}
        closeCallbackFunction={() => handleCloseNewOrderForm()}
      />
    </>
  );
};

export default Orders;
