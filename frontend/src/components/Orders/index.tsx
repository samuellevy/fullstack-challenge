import React from 'react';

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
  return (
    <Container>
      <Button>Open new order</Button>
      <TableBox>
        <TableHeader>
          <TableHeaderItem>ID</TableHeaderItem>
          <TableHeaderItem>Category</TableHeaderItem>
          <TableHeaderItem>Agency</TableHeaderItem>
          <TableHeaderItem>Company</TableHeaderItem>
          <TableHeaderItem>Deadline</TableHeaderItem>
        </TableHeader>

        <TableBody>
          <TableBodyLine>
            <TableBodyLineItem>#1</TableBodyLineItem>
            <TableBodyLineItem>Category</TableBodyLineItem>
            <TableBodyLineItem>Agency</TableBodyLineItem>
            <TableBodyLineItem>Company</TableBodyLineItem>
            <TableBodyLineItem>Deadline</TableBodyLineItem>
          </TableBodyLine>

          <TableBodyLine>
            <TableBodyLineItem>#2</TableBodyLineItem>
            <TableBodyLineItem>Category</TableBodyLineItem>
            <TableBodyLineItem>Agency</TableBodyLineItem>
            <TableBodyLineItem>Company</TableBodyLineItem>
            <TableBodyLineItem>Deadline</TableBodyLineItem>
          </TableBodyLine>
        </TableBody>
      </TableBox>
    </Container>
  );
};

export default Orders;
