import { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap';
import './table.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSliders, faArrowUpRightFromSquare, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";


export default class Table extends Component {
    constructor(props) {
        super(props);
        this.handleOrderStatusChange = this.handleOrderStatusChange.bind(this);
        this.handleOrderTypeChange = this.handleOrderTypeChange.bind(this);
        this.handlePaymentChange = this.handlePaymentChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSearchChange = (event) => {
        this.props.filterSearch(event.target.value);
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
    handleDateChange = (event) => {
        this.props.filterDate(event.target.value);
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
        orders = orders.filter((order) => {
            if (this.props.filters.date.length > 0) {
                const date = new Date(order.datetime);
                const datestr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
                const filter = new Date();
                switch (this.props.filters.date) {
                    case 'Today':
                        break;
                    case 'Yesterday':
                        filter.setDate(filter.getDate() - 1);
                        break;
                    case 'All Time':
                        return true;
                    default:
                        return true;
                }
                return datestr === `${filter.getFullYear()}-${filter.getMonth() + 1}-${filter.getDate()}`;
            }
            return true;
        })
        orders = orders.filter((order) => {
            if (this.props.filters.search.length > 0) {
                return order.id.toLowerCase().includes(this.props.filters.search.toLowerCase()) 
                || order.customer_name.toLowerCase().includes(this.props.filters.search.toLowerCase());
            }
            return true;
        })
        return (
            <div id="tablediv" className="my-3 p-3">
                <h4 className="fw-bold">Order Details</h4>
                <div id="tabletop" className="d-flex justify-content-evenly my-3">
                    <button className="flex-shrink-1 pe-0" id="mg"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    <input type="text" className="me-auto" placeholder="Search" onChange={this.handleSearchChange} />
                    <div className="dropdown mx-3 ms-5">
                        <button className=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" id="filters-toggle">
                            <FontAwesomeIcon icon={faSliders} />
                            &nbsp;&nbsp;Filters
                        </button>
                        <div className="dropdown-menu p-3">
                            <div>
                                <div>Order Status</div>
                                <div>
                                    <input className="form-check-input" type="checkbox" value="New Order" id="main-new-order" onChange={this.handleOrderStatusChange} checked={this.props.filters.order_status.includes("New Order")} />
                                    <label className="form-check-label ps-1" htmlFor="main-new-order">New Order</label>
                                </div>
                                <div>
                                    <input className="form-check-input" type="checkbox" value="Order Updated" id="main-order-updated" onChange={this.handleOrderStatusChange} checked={this.props.filters.order_status.includes("Order Updated")} />
                                    <label className="form-check-label ps-1" htmlFor="main-order-updated">Order Updated</label>
                                </div>
                            </div>
                            <div>
                                <div>Payment</div>
                                <div>
                                    <input className="form-check-input" type="checkbox" value="Paid" id="main-paid" onChange={this.handlePaymentChange} checked={this.props.filters.payment.includes('Paid')} />
                                    <label className="form-check-label ms-1" htmlFor="main-paid">Paid</label>
                                </div>
                                <div>
                                    <input className="form-check-input" type="checkbox" value="Un-Paid" id="main-un-paid" onChange={this.handlePaymentChange} checked={this.props.filters.payment.includes('Un-Paid')} />
                                    <label className="form-check-label ms-1" htmlFor="main-un-paid">Un-Paid</label>
                                </div>
                            </div>
                            <div>
                                <div>Order Type</div>
                                <div>
                                    <input className="form-check-input" type="checkbox" value="Dine In" id="main-dine-in" onChange={this.handleOrderTypeChange} checked={this.props.filters.order_type.includes('Dine In')} />
                                    <label className="form-check-label ms-1" htmlFor="main-dine-in">Dine In</label>
                                </div>
                                <div>
                                    <input className="form-check-input" type="checkbox" value="Take Away" id="main-take-away" onChange={this.handleOrderTypeChange} checked={this.props.filters.order_type.includes('Take Away')} />
                                    <label className="form-check-label ms-1" htmlFor="main-take-away">Take Away</label>
                                </div>
                                <div>
                                    <input className="form-check-input" type="checkbox" value="Delivery" id="main-delivery" onChange={this.handleOrderTypeChange} checked={this.props.filters.order_type.includes('Delivery')} />
                                    <label className="form-check-label ms-1" htmlFor="main-delivery">Delivery</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown mx-3 flex-grow-1">
                        <button className="dropdown-toggle w-100 text-start d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false" id="filter-date">
                            <FontAwesomeIcon icon={faCalendarDays} />
                            &nbsp;&nbsp;{this.props.filters.date}
                            <FontAwesomeIcon className="ms-auto" icon={faChevronDown}/>
                        </button>
                        <div className="dropdown-menu p-3">
                            <div>
                                <button className="dropdown-item" value='Today' onClick={this.handleDateChange}>Today</button>
                                <button className="dropdown-item" value='Yesterday' onClick={this.handleDateChange}>Yesterday</button>
                                <button className="dropdown-item" value='All Time' onClick={this.handleDateChange}>All Time</button>
                            </div>
                        </div>
                    </div>
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
                                                <input className="form-check-input" type="checkbox" value="Dine In" id="order-type-dine-in" onChange={this.handleOrderTypeChange} checked={this.props.filters.order_type.includes('Dine In')} />
                                                <label className="form-check-label ms-1 Dine In" htmlFor="order-type-dine-in">Dine In</label>
                                            </div>
                                            <div>
                                                <input className="form-check-input" type="checkbox" value="Take Away" id="order-type-take-away" onChange={this.handleOrderTypeChange} checked={this.props.filters.order_type.includes('Take Away')} />
                                                <label className="form-check-label ms-1 Take Away" htmlFor="order-type-take-away">Take Away</label>
                                            </div>
                                            <div>
                                                <input className="form-check-input" type="checkbox" value="Delivery" id="order-type-delivery" onChange={this.handleOrderTypeChange} checked={this.props.filters.order_type.includes('Delivery')} />
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
                                                <input className="form-check-input m-0" type="checkbox" value="New Order" id="order-status-new-order" onChange={this.handleOrderStatusChange} checked={this.props.filters.order_status.includes("New Order")} />
                                                <label className="form-check-label ms-1 mb-1 New Order" htmlFor="order-status-new-order">New Order</label>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <input className="form-check-input m-0" type="checkbox" value="Order Updated" id="order-status-order-updated" onChange={this.handleOrderStatusChange} checked={this.props.filters.order_status.includes("Order Updated")} />
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
                                                <input className="form-check-input m-0" type="checkbox" value="Paid" id="payment-paid" onChange={this.handlePaymentChange} checked={this.props.filters.payment.includes('Paid')} />
                                                <label className="form-check-label ms-1 mb-1 Paid" htmlFor="payment-paid">Paid</label>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <input className="form-check-input m-0" type="checkbox" value="Un-Paid" id="payment-un-paid" onChange={this.handlePaymentChange} checked={this.props.filters.payment.includes('Un-Paid')} />
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
                                        <td className="text-center"><a href="#"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></td>
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