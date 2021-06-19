import { ActionTypes } from '../contants/actionTypes';

export const setProduct = (products) => ({
  type: ActionTypes.SET_PRODDUCT,
  payload: products,
});

export const selectProduct = (products) => ({
  type: ActionTypes.SELECT_PRODDUCT,
  payload: products,
});
