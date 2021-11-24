/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ORDERS_ACTIONS } from './constants/actions';
import { ordersInitialState } from './constants/model';

export const ordersReducer = (state = ordersInitialState, action: any): any => {
  switch (action.type) {
    case ORDERS_ACTIONS.SET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case ORDERS_ACTIONS.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
