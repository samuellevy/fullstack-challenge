/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react';
import api from './api';

export const useOrderService = (): any => {
  const getOrders = useCallback(async () => {
    const response = await api.get('http://localhost:3333/orders');
    return response.data;
  }, []);

  return {
    getOrders,
  };
};
