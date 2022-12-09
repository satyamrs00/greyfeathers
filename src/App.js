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
      <div className="App container-fluid">
        <div className='row g-4'>
          <div className='col-2 d-flex flex-column justify-content-evenly align-items-stretch' id='sidebar'>
            <div className='red'>
              Orders <span className='float-end'>&gt;</span>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className='col-10 p-3'>
            <div id="topbar" className='d-flex justify-content-end'>
              <input className='me-auto px-3 py-2' type="text" />
              <button className='mx-3 px-3'>N</button>
              <button className='mx-3 px-3'>&nbsp;&nbsp;</button>
            </div>
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
