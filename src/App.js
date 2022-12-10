import React from 'react';
import { Component } from 'react';
import './App.css';
import { filterOrderStatus, filterOrderType, filterPayment, filterDate, filterSearch } from './app/actions';
import { connect } from 'react-redux';
import Table from './components/table';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

class App extends Component {
  render (){
    return (
      <div className="App container-fluid">
        <div className='row g-4'>
          <div className='col-2 d-flex flex-column justify-content-evenly align-items-stretch' id='sidebar'>
            <div className='red'>
              Orders <span className='float-end'><FontAwesomeIcon icon={faChevronRight} /></span>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className='col-10 p-3'>
            <div id="topbar" className='d-flex justify-content-end'>
              <button className='ps-3 pe-0 flex-shrink-1'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
              <input className='me-auto px-3 py-2' type="text" placeholder='Search' />
              <button className='mx-3 px-3'><FontAwesomeIcon icon={faBell}/></button>
              <button className='mx-3 px-3'>&nbsp;&nbsp;</button>
            </div>
            <Table filters={this.props.filters} orders={this.props.orders}
              filterOrderStatus={this.props.filterOrderStatus} filterOrderType={this.props.filterOrderType}
              filterPayment={this.props.filterPayment} filterDate={this.props.filterDate} 
              filterSearch={this.props.filterSearch} />
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
    filterDate: (date) => dispatch(filterDate(date)),
    filterSearch: (search) => dispatch(filterSearch(search)),
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(App);
