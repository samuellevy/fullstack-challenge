import React from 'react';

import {
  Container,
  OrderDetailsBox,
  DetailItemDescription,
  CloseButon,
  DetailItem,
} from './styles';

const OrderDetails: React.FC = () => {
  return (
    <Container>
      <OrderDetailsBox>
        <CloseButon>×</CloseButon>
        <DetailItem>
          <strong>Contact Name</strong>
          <span>Alcides</span>
        </DetailItem>
        <DetailItem>
          <strong>Contact Phone</strong>
          <span>Alcides</span>
        </DetailItem>
        <DetailItem>
          <strong>Real Estate Agency</strong>
          <span>Alcides</span>
        </DetailItem>

        <DetailItemDescription>
          <strong>Order Description</strong>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </span>
        </DetailItemDescription>

        <DetailItem>
          <strong>Real Estate Agency</strong>
          <span>Alcides</span>
        </DetailItem>

        <DetailItem>
          <strong>Real Estate Agency</strong>
          <span>Alcides</span>
        </DetailItem>

        <DetailItem>
          <strong>Real Estate Agency</strong>
          <span>Alcides</span>
        </DetailItem>
      </OrderDetailsBox>
    </Container>
  );
};

export default OrderDetails;
