export const FILTER_ORDER_STATUS = 'FILTER_ORDER_STATUS';
export const FILTER_ORDER_TYPE = 'FILTER_ORDER_TYPE';
export const FILTER_PAYMENT = 'FILTER_PAYMENT';
export const FILTER_DATE = 'FILTER_DATE';

export const filterOrderStatus = (order_status) => {
    return {
        type: FILTER_ORDER_STATUS,
        order_status
    };
}

export const filterOrderType = (order_type) => {
    return {
        type: FILTER_ORDER_TYPE,
        order_type
    };
}

export const filterPayment = (payment) => {
    return {
        type: FILTER_PAYMENT,
        payment
    };
}
export const filterDate = (date) => {
    return {
        type: FILTER_DATE,
        date
    };
}