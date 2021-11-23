import { useContext } from 'react';
import { OrdersContext } from '../context';
import { ORDERS_ACTIONS } from '../constants/actions';
import { IOrder } from '../../../dtos/IOrder';

export const useOrders = (): any => {
  const { dispatch } = useContext(OrdersContext);

  const setOrders = (orders: IOrder[]) => {
    dispatch({
      type: ORDERS_ACTIONS.SET_ORDERS,
      payload: orders,
    });
  };

  const addOrder = (order: IOrder) => {
    dispatch({
      type: ORDERS_ACTIONS.ADD_ORDER,
      payload: order,
    });
  };

  const deleteOrder = (id: string) => {
    dispatch({
      type: ORDERS_ACTIONS.DELETE_ORDER,
      payload: id,
    });
  };

  const updateOrder = (order: IOrder) => {
    dispatch({
      type: ORDERS_ACTIONS.UPDATE_ORDER,
      payload: order,
    });
  };

  return {
    setOrders,
    addOrder,
    deleteOrder,
    updateOrder,
  };
};
