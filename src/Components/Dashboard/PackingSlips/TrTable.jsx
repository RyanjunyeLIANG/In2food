import React from 'react';

import { deleteOrders } from '../../Api/PackingSlipsService';

import '../../../styles/trtable.css';

export default class TrTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,

      
      isProcessing: false,
    }
    
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data)
    this.setState({data: this.props.data})
  }

  handleDelete() {
    let id = this.state.data.id
    if(window.confirm("delete order " + id + "?")){
      this.setState({ isProcessing: true })

      deleteOrders(id)
      .then(res => {
        this.setState({ isProcessing: false })
        this.props.resetData()
      })
   }
  }

  toggleEditMode() {
    this.props.editDataCallBack(this.state.data)
    this.props.toggleEditOrderMode()
  }

  render() {
    let data = this.state.data;
    let orderDate = data.orderDate.split(' ')[0]
    let totalPrice = '$' + data.totalPrice

    //init buttonGroup
    let buttonGroup = 
    <td>
      <button className="btn btn-primary" onClick={this.toggleEditMode }>Edit</button>
      <button className="btn btn-danger" onClick={ this.handleDelete }>Delete</button>
    </td>

    if (this.state.isEditMode) {
      buttonGroup = 
      <td>
        <button className="btn btn-primary" onClick={ this.handleEdit }>Submit</button>
        <button className="btn btn-secondary" onClick={ this.toggleEditMode }>Close</button>
      </td>    
    }

    if (this.state.isProcessing) {
      buttonGroup = 
      <td>
        <button className="btn" disabled>Processing...</button>
      </td>
    }

    //init EditModeView
    let view =
      <tr>
        <td>{ data.id }</td>
        <td>{ data.customer_id }</td>
        <td>{ data.customer.customerName }</td>
        <td>{ data.trackingNumber }</td>
        <td>{ data.type }</td>
        <td>{ data.status }</td>
        <td> { orderDate } </td>
        <td>{ totalPrice }</td> 
        { buttonGroup }
      </tr>

    return (
      <React.Fragment>
        { view }
      </React.Fragment>
    );
  }
}