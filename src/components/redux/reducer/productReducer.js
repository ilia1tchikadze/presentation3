import { ActionTypes } from '../contants/actionTypes';

const initialState = {
  products: [],

};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODDUCT:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECT_PRODDUCT:
      return { ...state, products: payload };

    default:
      return state;
  }
};
