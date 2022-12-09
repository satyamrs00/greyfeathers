import { Component } from "react";
import { Dropdown } from "react-bootstrap";

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
            <div>
                <h2>Order Details</h2>
                <div>
                    <input type="text" />
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            Filters
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <div>
                                <div>Order Status</div>
                                <input type="checkbox" value="New Order" onChange={this.handleOrderStatusChange} />
                                <label>New Order</label>
                                <input type="checkbox" value="Order Updated" onChange={this.handleOrderStatusChange} />
                                <label>Order Updated</label>
                            </div>
                            <div>
                                <div>Payment</div>
                                <input type="checkbox" value="Paid" onChange={this.handlePaymentChange} />
                                <label>Paid</label>
                                <input type="checkbox" value="Un-Paid" onChange={this.handlePaymentChange} />
                                <label>Unpaid</label>
                            </div>
                            <div>
                                <div>Order Type</div>
                                <input type="checkbox" value="Dine In" onChange={this.handleOrderTypeChange} />
                                <label>Dine In</label>
                                <input type="checkbox" value="Take Away" onChange={this.handleOrderTypeChange} />
                                <label>Take Away</label>
                                <input type="checkbox" value="Delivery" onChange={this.handleOrderTypeChange} />
                                <label>Delivery</label>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="dropdown">
                        <button className="dropdown-toggle" data-bs-toggle="filters">Filters</button>
                        <div className="dropdown-menu">
                            <div>
                                <span>Order Type</span>
                            </div>
                        </div>
                    </div>
                    
                    <button>Today</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Table no</th>
                            <th>Customer Name</th>
                            <th>Order Type</th>
                            <th>Order Status</th>
                            <th>Payment</th>
                            <th>Date</th>
                            <th>View Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => {
                            return (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.table_no}</td>
                                    <td>{order.customer_name}</td>
                                    <td>{order.order_type}</td>
                                    <td>{order.order_status}</td>
                                    <td>{order.payment}</td>
                                    <td>{order.date}</td>
                                    <td><button>View</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}