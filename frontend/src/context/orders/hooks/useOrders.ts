import { useCallback, useContext } from 'react';
import { OrdersContext } from '../context';
import { ORDERS_ACTIONS } from '../constants/actions';
import { IOrder } from '../../../dtos/IOrder';
import { ICategory } from '../../../dtos/ICategory';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useOrders = (): any => {
  const { state, dispatch } = useContext(OrdersContext);

  const setOrders = useCallback(
    (orders: IOrder[]) => {
      dispatch({
        type: ORDERS_ACTIONS.SET_ORDERS,
        payload: orders,
      });
    },
    [dispatch],
  );

  const setCategories = useCallback(
    (categories: ICategory[]) => {
      dispatch({
        type: ORDERS_ACTIONS.SET_CATEGORIES,
        payload: categories,
      });
    },
    [dispatch],
  );

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
    setCategories,
    ...state,
  };
};
