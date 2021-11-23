import React from 'react';
import { IOrder } from '../../dtos/IOrder';

import {
  Container,
  OrderDetailsBox,
  DetailItemDescription,
  CloseButon,
  DetailItem,
} from './styles';

interface IOrderDetails {
  active: boolean;
  data: IOrder;
  closeCallbackFunction: () => void;
}

const OrderDetails: React.FC<IOrderDetails> = ({
  active,
  data,
  closeCallbackFunction,
}: IOrderDetails) => {
  return (
    <Container active={active}>
      <OrderDetailsBox>
        <CloseButon onClick={() => closeCallbackFunction()}>×</CloseButon>
        <DetailItem>
          <strong>Contact Name</strong>
          <span>{data.contactName}</span>
        </DetailItem>
        <DetailItem>
          <strong>Contact Phone</strong>
          <span>{data.contactPhone}</span>
        </DetailItem>
        <DetailItem>
          <strong>Real Estate Agency</strong>
          <span>{data.agency}</span>
        </DetailItem>

        <DetailItemDescription>
          <strong>Order Description</strong>
          <span>{data.orderDescription}</span>
        </DetailItemDescription>

        <DetailItem>
          <strong>Company</strong>
          <span>{data.company}</span>
        </DetailItem>

        <DetailItem>
          <strong>Category</strong>
          <span>{data.category}</span>
        </DetailItem>

        <DetailItem>
          <strong>Deadline</strong>
          <span>{data.deadline}</span>
        </DetailItem>
      </OrderDetailsBox>
    </Container>
  );
};

export default OrderDetails;
