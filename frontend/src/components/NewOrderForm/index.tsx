import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useOrders } from '../../context/orders';
import { ICategory } from '../../dtos/ICategory';
import { IOrder } from '../../dtos/IOrder';
import api from '../../services/api';

import { useOrderService } from '../../services/orders';

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
  closeCallbackFunction: () => void;
}

const NewOrderForm: React.FC<INewOrderForm> = ({
  active,
  closeCallbackFunction,
}: INewOrderForm) => {
  const initialOrderForm: Partial<IOrder> = {
    contactName: '',
    contactPhone: '',
    agency: '',
    orderDescription: '',
    company: '',
    category: '',
    deadline: '',
  };
  const [orderForm, setOrderForm] = useState(initialOrderForm);

  const mask = (value: string) => {
    const maskedValue = value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{5})\d+?$/, '$1');

    return maskedValue;
  };

  const { setOrders, setCategories, categories } = useOrders();
  const { getOrders, getCategories } = useOrderService();

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setOrderForm({
      ...orderForm,
      [name]: name === 'contactPhone' ? mask(value) : value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await api.post('/orders', orderForm);
      closeCallbackFunction();
      toast('Order created!');
      getOrders().then(setOrders);
      setOrderForm(initialOrderForm);
    } catch (err) {
      toast('Error creating order');
    }
  };

  useEffect(() => {
    getCategories().then(setCategories);
  }, [getCategories, setCategories]);

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
          <input
            name="contactPhone"
            onChange={handleChange}
            value={orderForm.contactPhone}
          />
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
            {categories.map((category: ICategory) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
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
