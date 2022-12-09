import { configureStore } from '@reduxjs/toolkit';
import { FILTER_ORDER_STATUS, FILTER_ORDER_TYPE, FILTER_PAYMENT } from './actions';
import orders from '../data/orders.json';

const initialFilters = {
  order_status: [],
  order_type: [],
  payment: []
}
const filtersReducer = (state = initialFilters, action) => {
  switch (action.type){
    case FILTER_ORDER_STATUS:
      console.log(Object.assign({}, state, {order_status: state.order_status.includes(action.order_status) ? state.order_status.filter((item) => item !== action.order_status) : state.order_status.concat(action.order_status)}));
      return Object.assign({}, state, {order_status: state.order_status.includes(action.order_status) ? state.order_status.filter((item) => item !== action.order_status) : state.order_status.concat(action.order_status)});
    case FILTER_ORDER_TYPE:
      console.log(Object.assign({}, state, {order_type: state.order_type.includes(action.order_type) ? state.order_type.filter((item) => item !== action.order_type) : state.order_type.concat(action.order_type)}));
      return Object.assign({}, state, {order_type: state.order_type.includes(action.order_type) ? state.order_type.filter((item) => item !== action.order_type) : state.order_type.concat(action.order_type)});
    case FILTER_PAYMENT:
      console.log(Object.assign({}, state, {payment: state.payment.includes(action.payment) ? state.payment.filter((item) => item !== action.payment) : state.payment.concat(action.payment)}));
      return Object.assign({}, state, {payment: state.payment.includes(action.payment) ? state.payment.filter((item) => item !== action.payment) : state.payment.concat(action.payment)});
    default:
      return state;
  }
}

const initailOrders = orders;

const ordersReducer = (state = initailOrders, action) => {
  switch (action.type){
    default:
      return state;
  }
}

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    orders: ordersReducer,
  },
});
