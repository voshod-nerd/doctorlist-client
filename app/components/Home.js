// @flow
import React, { Component } from 'react';
import DoctorTable from './DoctorTable';
import CertificationTable from './CertificationTable';
import High from './High';




export default class Home extends Component {


  render() {
    return (
      <div >
         <High/>
         <DoctorTable />
         <CertificationTable />
      
      </div>
    );
  }
}
