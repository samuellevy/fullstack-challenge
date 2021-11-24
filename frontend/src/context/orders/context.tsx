import React, { createContext, Dispatch, useReducer } from 'react';
import { IOrder } from '../../dtos/IOrder';
import { ordersInitialState } from './constants/model';
import { ordersReducer } from './reducer';

interface IState {
  orders: IOrder[];
}
interface IModel {
  state: IState;
  dispatch: Dispatch<unknown>;
}

export const OrdersContext = createContext({} as IModel);

interface IOrdersProviderProps {
  children: React.ReactNode;
}

export const OrdersProvider = ({
  children,
}: IOrdersProviderProps): React.ReactElement => {
  const [state, dispatch] = useReducer(ordersReducer, ordersInitialState);

  return (
    <OrdersContext.Provider value={{ state, dispatch }}>
      {children}
    </OrdersContext.Provider>
  );
};
