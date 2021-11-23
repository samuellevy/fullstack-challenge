import React, { useEffect, useState } from 'react';

import {
  Container,
  NewOrderBox,
  DetailItemDescription,
  CloseButon,
  DetailItem,
  SubmitBox,
  SubmitButton,
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
  const [orderForm, setOrderForm] = useState({
    contactName: '',
    contactPhone: '',
    agency: '',
    orderDescription: '',
    company: '',
    category: '',
    deadline: '',
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setOrderForm({ ...orderForm, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(orderForm);
  };

  useEffect(() => {
    console.log(orderForm);
  }, [orderForm]);

  return (
    <Container active={active}>
      <NewOrderBox onSubmit={handleSubmit}>
        <CloseButon onClick={() => closeCallbackFunction()} type="button">
          ×
        </CloseButon>
        <DetailItem>
          <strong>Contact Name</strong>
          <input name="contactName" onChange={handleChange} />
        </DetailItem>
        <DetailItem>
          <strong>Contact Phone</strong>
          <input name="contactPhone" onChange={handleChange} />
        </DetailItem>
        <DetailItem>
          <strong>Real Estate Agency</strong>
          <input name="agency" onChange={handleChange} />
        </DetailItem>

        <DetailItemDescription>
          <strong>Order Description</strong>
          <textarea name="orderDescription" onChange={handleChange} />
        </DetailItemDescription>

        <DetailItem>
          <strong>Company</strong>
          <input name="company" onChange={handleChange} />
        </DetailItem>

        <DetailItem>
          <strong>Select the order category</strong>
          <select name="category" onChange={handleChange}>
            <option>Select</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </DetailItem>

        <DetailItem>
          <strong>Deadline</strong>
          <input type="date" name="deadline" onChange={handleChange} />
        </DetailItem>

        <SubmitBox>
          <SubmitButton type="submit">Submit</SubmitButton>
        </SubmitBox>
      </NewOrderBox>
    </Container>
  );
};

export default NewOrderForm;
