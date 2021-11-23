import React, { createContext, useReducer } from 'react';
import { ordersInitialState, ordersModel } from './constants/model';
import { ordersReducer } from './reducer';

export const OrdersContext = createContext(ordersModel);

interface IOrdersProviderProps {
  children: React.ReactNode;
}

export const OrdersProvider = ({ children }: IOrdersProviderProps) => {
  const [state, dispatch] = useReducer(ordersReducer, ordersInitialState);

  return (
    <OrdersContext.Provider value={{ state, dispatch }}>
      {children}
    </OrdersContext.Provider>
  );
};
