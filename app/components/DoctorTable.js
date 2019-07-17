import React, { Component } from 'react';
import { connect } from "react-redux";

import { Table,Input } from 'antd';

import { chooseRecordDoctor } from "../redux/actions/index";
const { Search } = Input;



const mapStateToProps = state => ({
  listDoctors: state.listDoctors,    
});

function mapDispatchToProps(dispatch) {
  return {
    chooseRecordDoctor: data => dispatch(chooseRecordDoctor(data)),  
  }
}

const columns = [
    { title: 'Код врача', dataIndex: 'iddokt', key: 'iddokt' },
    { title: 'Код ЛПУ', dataIndex: 'lpukod', key: 'lpukod' },
    { title: 'Подразделение', dataIndex: 'id_podr', key: 'id_podr'},
    { title: 'Отделение', dataIndex: 'id_otd', key: 'id_otd' },
    { title: 'Фамилия', dataIndex: 'fam', key: 'fam'},
    { title: 'Имя', dataIndex: 'im', key: 'im'},
    { title: 'Отчество', dataIndex: 'ot', key: 'ot'},
    { title: 'Средний мед персонал', dataIndex: 'dokt', key: 'dokt'},
    { title: 'Специальность', dataIndex: 'prvs', key: 'actual'},
    { title: 'Дата внесения', dataIndex: 'dave_vn', key: 'dave_vn'},
    { title: 'Дата увольнения', dataIndex: 'date_uv', key: 'date_uv'}
  ];
  
  const data = [
    {
      key: 1,
      iddokt: '',
      lpukod: '',
      id_otd: '',
      fam: 2019,
      im:"",
      ot: "",
      dokt:"",
      prvs:"",
      date_vn:"",
      date_uv:""
    }
  ];


 class DoctorTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      find: "",
      selectedRow: null 
    }
    this.getSelectedRow=this.getSelectedRow.bind(this);
  } 

  getSelectedRow =(selectedRowKeys, selectedRows) => {
    if (selectedRows===undefined) return;
    const sRow= Object.assign({}, selectedRows[0].dataValues);  
    this.setState({ selectedRow: sRow }, () => {
      this.props.chooseRecordDoctor(this.state.selectedRow);
    }); 
  }

  onChange = (e) => {
    this.setState({ find : e.target.value});   
  }

  render() {
    let dt= data; 
    const rowSelection ={
      onChange : this.getSelectedRow,
      type:'radio'
  }

  if (this.props.listDoctors.length>0) {  
     const find=this.state.find;      
      dt = find!="" ? this.props.listDoctors.filter(x => {
        if (String(x.iddokt).includes(find)) return true;
        if (x.fam.includes(find)) return true;
        if (x.im.includes(find)) return true;
        return false;
      }) : this.props.listDoctors;
    }
    return (
      <div >
         <Search  name="find" placeholder="Введите код врача или фамилию для поиска" onChange={value => this.onChange(value)} enterButton />    
        <Table columns={columns} bordered={true}  size="small"  dataSource={dt} rowSelection={rowSelection} pagination={{ pageSize: 5 }} />
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DoctorTable)
// const DoctorTable = connect(null,mapStateToProps)(DoctorTable);
// export default DoctorTable;
