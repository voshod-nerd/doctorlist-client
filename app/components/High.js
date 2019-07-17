import React, { Component } from 'react';
import { connect } from "react-redux";
import { Menu, Dropdown, Button, Icon, Modal,DatePicker } from 'antd';
import {createXML} from '../utils/toXML';


const mapStateToProps = state => ({
  list_certifiaction: state.listCertifications,
  list_doctors:state.listDoctors,
});


 class High extends Component {

    constructor(props) {
        super(props);
        this.handleMenuClick=this.handleMenuClick.bind(this);
        this.state = { 
            visible: false, 
            curDate:"", 
        };
        
    }


    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = e => {
        console.log(e);

         createXML(this.props.list_certifiaction,this.props.list_doctors,this.state.curDate);

        this.setState({
          visible: false,
        });

       // console.log(createXML());
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };


     handleMenuClick(e) {
       // message.info('Click on menu item.');
        console.log('click', e);
        switch (e.key) {
        case "3": this.showModal();
        default: {}
        }
      }



      handleDatePickerChange = (date, dateString, id) => {
      
        console.log(dateString);
        this.setState({
            curDate: dateString,
          });     
     }

      render() {

        const menu = (
            <Menu onClick={this.handleMenuClick}>
              <Menu.Item key="1">
                <Icon type="user" />
                 Добавить врача
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="user" />
                Добавить сертификат
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="user" />
                Выгрузить данные в xml
              </Menu.Item>
            </Menu>
          ); 


          const modal=(
            <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>Выгрузить данные на дату</p>
            <DatePicker onChange={(date, dateString) => this.handleDatePickerChange(date, dateString, 1)}   />
          </Modal>
          );

        return ( 
            <div>
            {modal}
             <Dropdown overlay={menu}>
                    <Button>Дейсвия <Icon type="down" /></Button>
            </Dropdown>
            </div>
        );
      }

    
  }

  export default connect(mapStateToProps)(High);
