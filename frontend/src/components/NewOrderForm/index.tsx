import React from 'react';

import {
  Container,
  NewOrderBox,
  DetailItemDescription,
  CloseButon,
  DetailItem,
} from './styles';

interface INewOrderForm {
  active: boolean;
  // data: IOrder;
  closeCallbackFunction: () => void;
}

const NewOrderForm: React.FC<INewOrderForm> = ({
  active,
  closeCallbackFunction,
}: INewOrderForm) => {
  return (
    <Container active={active}>
      <NewOrderBox>
        <CloseButon onClick={() => closeCallbackFunction()} type="button">
          ×
        </CloseButon>
        <DetailItem>
          <strong>Contact Name</strong>
          <input />
        </DetailItem>
        <DetailItem>
          <strong>Contact Phone</strong>
          <input />
        </DetailItem>
        <DetailItem>
          <strong>Real Estate Agency</strong>
          <input />
        </DetailItem>

        <DetailItemDescription>
          <strong>Order Description</strong>
          <textarea />
        </DetailItemDescription>

        <DetailItem>
          <strong>Company</strong>
          <input />
        </DetailItem>

        <DetailItem>
          <strong>Select the order category</strong>
          <select>
            <option>Select</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </DetailItem>

        <DetailItem>
          <strong>Deadline</strong>
          <input type="date" />
        </DetailItem>
      </NewOrderBox>
    </Container>
  );
};

export default NewOrderForm;
