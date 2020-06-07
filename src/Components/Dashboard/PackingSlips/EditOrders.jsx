import React from 'react';
import { editOrders } from '../../Api/PackingSlipsService';

export default class EditOrders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        customerList: this.props.customerList,
        orderTypeList: this.props.orderTypeList,
        orderStatusList: this.props.orderStatusList,

        type: this.props.data.type,
        status: this.props.data.status,
        trackingNumber: this.props.data.trackingNumber,
        orderDate: this.props.data.orderDate,
        totalPrice: this.props.data.totalPrice,
        customerId: this.props.data.customer.id,

        isProcessing: false
    }

    this.closeEditOrderMode = this.closeEditOrderMode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  closeEditOrderMode() {
    this.props.toggleEditOrderMode()
  }

  onChange(event) {
    this.setState( 
        { [event.target.name]: event.target.value }
    ); 
  }

  handleSubmit(e) {
    e.preventDefault();
    const orders = {
        type: this.state.type,
        status: this.state.status,
        trackingNumber: this.state.trackingNumber,
        orderDate: this.state.orderDate,
        totalPrice: this.state.totalPrice,
        customer_id: this.state.customerId
    }
    // console.log(orders)
    this.setState({ isProcessing: true });
    editOrders(this.props.data.id, orders)
    .then(res => {
        this.setState({ isProcessing: false });
        alert('Edit order successful');
        this.props.toggleEditOrderMode();
        this.props.resetData();
    })
    .catch(err => {
        console.log(err);
    })
  }

  render() {
    //fix Date
    let orderDate = this.state.orderDate.split(' ')[0];

    // add order view
    let customerList =
    <select name="customerId" id="customerId" value={this.state.customerId} onChange={ this.onChange }>
      { this.state.customerList.map((data, index) => <option key={index} value={data.id}>{data.customerName}</option>) }
    </select>

    let orderType =
    <select name="type" id="orderType" value={this.state.type} onChange={ this.onChange }>
      { this.state.orderTypeList.map((data, index) => <option key={index} value={data}>{data}</option>) }
    </select>

    let orderStatus =
    <select name="status" id="orderStatus" value={this.state.status} onChange={ this.onChange }>
      { this.state.orderStatusList.map((data, index) => <option key={index} value={data}>{data}</option>) }
    </select>
    
    // set Button Group
    let buttonGroup =
    <React.Fragment>
      <button type="submit">Submit</button>
      <input type="button" onClick= {this.closeEditOrderMode} value="close"></input>
    </React.Fragment>

    if(this.state.isProcessing) {
      buttonGroup = <button type="submit" disabled>Processing...</button>
    }

    return (
      <div className="filter">
        <h2>Edit Order</h2>
        <form onSubmit={ this.handleSubmit }>
          <table>
              <tbody>
                  <tr>
                      <td>Type:</td>
                      <td>
                          { orderType }
                      </td>
                  </tr>
                  <tr>
                      <td>Status:</td>
                      <td>
                          { orderStatus }
                      </td>
                  </tr>
                  <tr>
                      <td>Tracking Number:</td>
                      <td><input type="text" id="orderTrackingNumber" value={this.state.trackingNumber} name="trackingNumber" onChange={ this.onChange } required></input></td>
                  </tr>
                  <tr>
                      <td>Order Date:</td>
                      <td><input type="date" id="orderDate" name="orderDate" value={orderDate} onChange={ this.onChange } required></input></td>
                  </tr>
                  <tr>
                      <td>Total Price:</td>
                      <td><input type="number" id="totalPrice" name="totalPrice" value={this.state.totalPrice} onChange={ this.onChange } required></input></td>
                  </tr>
                  <tr>
                      <td>Customer ID: </td>
                      <td>{ customerList }</td>
                  </tr>
              </tbody>
          </table>
          { buttonGroup }
        </form>
      </div>
    );
  }
}