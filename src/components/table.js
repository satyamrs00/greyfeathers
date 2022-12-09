import { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap';
import './table.css';

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.handleOrderStatusChange = this.handleOrderStatusChange.bind(this);
        this.handleOrderTypeChange = this.handleOrderTypeChange.bind(this);
        this.handlePaymentChange = this.handlePaymentChange.bind(this);
    }

    handleOrderStatusChange = (event) => {
        this.props.filterOrderStatus(event.target.value);
    }
    handleOrderTypeChange = (event) => {
        this.props.filterOrderType(event.target.value);
    }
    handlePaymentChange = (event) => {
        this.props.filterPayment(event.target.value);
    }

    render() {
        let orders = this.props.orders.filter((order) => {
            if (this.props.filters.order_status.length > 0) {
                return this.props.filters.order_status.includes(order.order_status);
            }
            return true;
        })
        orders = orders.filter((order) => {
            if (this.props.filters.order_type.length > 0) {
                return this.props.filters.order_type.includes(order.order_type);
            }
            return true;
        })
        orders = orders.filter((order) => {
            if (this.props.filters.payment.length > 0) {
                return this.props.filters.payment.includes(order.payment);
            }
            return true;
        })
        return (
            <div id="tablediv" className="my-3 p-3">
                <h4 className="fw-bold">Order Details</h4>
                <div id="tabletop" className="d-flex justify-content-between my-3">
                    <input type="text" className="w-75" />
                    <div className="dropdown">
                        <button className=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Filters
                        </button>
                        <div className="dropdown-menu p-3">
                            <div>
                                <div>Order Status</div>
                                <div>
                                    <input className="form-check-input" type="checkbox" value="New Order" id="main-new-order" onChange={this.handleOrderStatusChange} />
                                    <label className="form-check-label ps-1" htmlFor="main-new-order">New Order</label>
                                </div>
                                <div>
                                    <input className="form-check-input" type="checkbox" value="Order Updated" id="main-order-updated" onChange={this.handleOrderStatusChange} />
                                    <label className="form-check-label ps-1" htmlFor="main-order-updated">Order Updated</label>
                                </div>
                            </div>
                            <div>
                                <div>Payment</div>
                                <div>
                                    <input className="form-check-input" type="checkbox" value="Paid" id="main-paid" onChange={this.handlePaymentChange} />
                                    <label className="form-check-label ms-1" htmlFor="main-paid">Paid</label>
                                </div>
                                <div>
                                    <input className="form-check-input" type="checkbox" value="Un-Paid" id="main-un-paid" onChange={this.handlePaymentChange} />
                                    <label className="form-check-label ms-1" htmlFor="main-un-paid">Un-Paid</label>
                                </div>
                            </div>
                            <div>
                                <div>Order Type</div>
                                <div>
                                    <input className="form-check-input" type="checkbox" value="Dine In" id="main-dine-in" onChange={this.handleOrderTypeChange} />
                                    <label className="form-check-label ms-1" htmlFor="main-dine-in">Dine In</label>
                                </div>
                                <div>
                                    <input className="form-check-input" type="checkbox" value="Take Away" id="main-take-away" onChange={this.handleOrderTypeChange} />
                                    <label className="form-check-label ms-1" htmlFor="main-take-away">Take Away</label>
                                </div>
                                <div>
                                    <input className="form-check-input" type="checkbox" value="Delivery" id="main-delivery" onChange={this.handleOrderTypeChange} />
                                    <label className="form-check-label ms-1" htmlFor="main-delivery">Delivery</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="">Today</button>
                </div>
                <div className="p-2" id="table-wrapper">
                    <table className="w-100">
                        <thead className="">
                            <tr className="">
                                <th className="">Order ID</th>
                                <th>Table no</th>
                                <th>Customer Name</th>
                                <th>
                                    <div className="dropdown">
                                        <button className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            Order Type
                                        </button>
                                        <div className="dropdown-menu p-3">
                                            <div>
                                                <input className="form-check-input" type="checkbox" value="Dine In" id="order-type-dine-in" onChange={this.handleOrderTypeChange} />
                                                <label className="form-check-label ms-1 Dine In" htmlFor="order-type-dine-in">Dine In</label>
                                            </div>
                                            <div>
                                                <input className="form-check-input" type="checkbox" value="Take Away" id="order-type-take-away" onChange={this.handleOrderTypeChange} />
                                                <label className="form-check-label ms-1 Take Away" htmlFor="order-type-take-away">Take Away</label>
                                            </div>
                                            <div>
                                                <input className="form-check-input" type="checkbox" value="Delivery" id="order-type-delivery" onChange={this.handleOrderTypeChange} />
                                                <label className="form-check-label ms-1 Delivery" htmlFor="order-type-delivery">Delivery</label>
                                            </div>
                                        </div>
                                    </div>
                                </th>
                                <th id="order-status">
                                    <div className="dropdown">
                                        <button className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            Order Status
                                        </button>
                                        <div className="dropdown-menu p-3">
                                            <div className="d-flex align-items-center">
                                                <input className="form-check-input m-0" type="checkbox" value="New Order" id="order-status-new-order" onChange={this.handleOrderStatusChange} />
                                                <label className="form-check-label ms-1 mb-1 New Order" htmlFor="order-status-new-order">New Order</label>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <input className="form-check-input m-0" type="checkbox" value="Order Updated" id="order-status-order-updated" onChange={this.handleOrderStatusChange} />
                                                <label className="form-check-label ms-1 Order Updated" htmlFor="order-status-order-updated">Order Updated</label>
                                            </div>
                                        </div>
                                    </div>
                                </th>
                                <th id="payment">
                                    <div className="dropdown">
                                        <button className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            Payment
                                        </button>
                                        <div className="dropdown-menu p-3">
                                            <div className="d-flex align-items-center">
                                                <input className="form-check-input m-0" type="checkbox" value="Paid" id="payment-paid" onChange={this.handlePaymentChange} />
                                                <label className="form-check-label ms-1 mb-1 Paid" htmlFor="payment-paid">Paid</label>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <input className="form-check-input m-0" type="checkbox" value="Un-Paid" id="payment-un-paid" onChange={this.handlePaymentChange} />
                                                <label className="form-check-label ms-1 Un-Paid" htmlFor="payment-un-paid">Un-Paid</label>
                                            </div>
                                        </div>
                                    </div>
                                </th>
                                <th>Date</th>
                                <th className="text-center">View Order</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => {
                                let d = new Date(order.datetime);
                                let date_options = { day: 'numeric', year: 'numeric', month: 'short' };
                                let time_options = { hour: '2-digit', minute: '2-digit', hour12: true };
                                return (
                                    <tr key={order.id}>
                                        <td><a href="#">{order.id}</a></td>
                                        <td>{order.table_no}</td>
                                        <td>{order.customer_name}</td>
                                        <td className={order.order_type}>{order.order_type}</td>
                                        <td><span className={order.order_status}>{order.order_status}</span></td>
                                        <td><span className={order.payment}>{order.payment}</span></td>
                                        <td>{d.toLocaleString('en-IN', date_options)}<br />{d.toLocaleString('en-IN', time_options).toUpperCase()}</td>
                                        <td className="text-center"><a href="#">V</a></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}