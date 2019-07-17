import React, { Component } from 'react';
import { Table} from 'antd';
import { connect } from "react-redux";


const mapStateToProps = state => ({
  choosed_doctor: state.choosed_record_doctor,
  list_certifiaction: state.listCertifications,

});

const columns = [
    { title: 'Номер сертификата', dataIndex: 'n_sert', key: 'n_sert' },
    { title: 'Регистрационный номер', dataIndex: 'reg_num', key: 'reg_num'},  
    { title: 'Код специальности', dataIndex: 'prvs', key: 'prvs' },
    { title: 'Название специалости', dataIndex: 'prvs_s', key: 'prvs_s'},
    { title: 'Код доктора', dataIndex: 'iddokt', key: 'iddokt'},
    { title: 'Дата добавления', dataIndex: 'date_add', key: 'date_add'},
    { title: 'Дата начала', dataIndex: 'date_begin', key: 'date_begin'},
    { title: 'Дата окончания', dataIndex: 'date_end', key: 'date_end'},
    
  ];
  
  const data = [
    {
      key: 1,
      n_sert: '',
      reg_num:'',
      prvs: '',
      prvs_s: '',
      iddokt: '',
      date_add:"",
      date_begin:"",
      date_end:"",
      
    }
  ];


 class CertificationTable extends Component {
  render() {
    let dt= data;
    const iddokt= this.props.choosed_doctor.iddokt;
    if (this.props.list_certifiaction.length>0) {
      dt= this.props.choosed_doctor!=null ? 
      this.props.list_certifiaction.filter(x=> x.iddokt==iddokt):this.props.list_certifiaction;
    }

    return (
      <div >
        <Table
          columns={columns}
          size="small"
          pagination={{ pageSize: 5 }}
          dataSource={dt}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(CertificationTable);
