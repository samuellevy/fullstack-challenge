import { IOrder } from '../../dtos/IOrder';
import { ORDERS_ACTIONS } from './constants/actions';
import { ordersInitialState } from './constants/model';

export const ordersReducer = (state = ordersInitialState, action: any): any => {
  switch (action.type) {
    case ORDERS_ACTIONS.SET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};
