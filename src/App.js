import React from 'react';
import { Component } from 'react';
import './App.css';
import { filterOrderStatus, filterOrderType, filterPayment } from './app/actions';
import { connect } from 'react-redux';
import Table from './components/table';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render (){
    return (
      <div className="App">
        <div>
          <div>
            <Table filters={this.props.filters} orders={this.props.orders}
              filterOrderStatus={this.props.filterOrderStatus} filterOrderType={this.props.filterOrderType}
              filterPayment={this.props.filterPayment} />
          </div>
        </div>
      </div>
    );
  }
}

const matchStateToProps = (state) => {
  return {
    filters: state.filters,
    orders: state.orders,
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    filterOrderStatus: (status) => dispatch(filterOrderStatus(status)),
    filterOrderType: (type) => dispatch(filterOrderType(type)),
    filterPayment: (payment) => dispatch(filterPayment(payment)),
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(App);
