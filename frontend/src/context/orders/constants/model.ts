import { IOrder } from '../../../dtos/IOrder';

export const ordersInitialState = {
  orders: [] as IOrder[],
};

export const ordersModel = {
  state: ordersInitialState,
  dispatch: (action: any) => {},
};
