// @flow
import React, { Component } from 'react';
import { Provider,connect } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';


import store from '../redux/index';

import HomePage from './HomePage';


import { getAllDoctorsFromDB,getAllCertification } from "../redux/actions/index";
import {gellAllDoctor,gellAllCertifications} from '../db/dbfunction';

const electron = require('electron');

function mapDispatchToProps(dispatch) {
  return {
    getAllDoctorsFromDB: data => dispatch(getAllDoctorsFromDB(data)),
    getAllCertification: data =>dispatch(getAllCertification(data)),  
  };
}


 class RootElement extends Component {


  componentDidMount =() => {
    gellAllDoctor().then(
      response => this.props.getAllDoctorsFromDB(response),
      error => console.log(error)
    ).catch( exception => console.log(exception));
   
    gellAllCertifications().then(
      response => this.props.getAllCertification(response),
      error => console.log(error)
    ).catch( exception => console.log(exception));


  }
 

  render() {
    return (
      <Provider electron={electron} store={store} >
      <Router>
        <HomePage/>
        </Router>
      </Provider>
    );
  }
}

const Root  = connect(null, mapDispatchToProps)(RootElement);
export default Root;
