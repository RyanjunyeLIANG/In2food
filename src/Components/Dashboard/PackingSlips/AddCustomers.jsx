import React from 'react';
import { addCustomers } from '../../Api/PackingSlipsService';

export default class AddCustomers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        customerName: '',
        customerEmail: '',
        customerFirstName: '',
        customerLastName: '',
        customerPhone: '',
        customerStreet: '',
        customerSuburb: '',
        customerState: '',
        customerPostcode: '',

        isProcessing: false
    }

    this.toggleAddCustomerMode = this.toggleAddCustomerMode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  toggleAddCustomerMode() {
    this.props.toggleAddCustomerMode()
  }

  onChange(event) {
    this.setState( 
        { [event.target.name]: event.target.value }
    ); 
  }

  handleSubmit(e) {
    e.preventDefault();
    const newCustomer = {
        customerName: this.state.customerName,
        email: this.state.customerEmail,
        firstName: this.state.customerFirstName,
        lastName: this.state.customerLastName,
        phone: this.state.customerPhone,
        street: this.state.customerStreet,
        suburb: this.state.customerSuburb,
        state: this.state.customerState,
        postcode: this.state.customerPostcode
    }
    // console.log(orders)
    this.setState({ isProcessing: true });
    addCustomers(newCustomer)
    .then(res => {
        this.setState({ isProcessing: false });
        alert('Add customer successful');
        this.toggleAddCustomerMode();
        this.props.resetData();
    })
    .catch(err => {
        console.log(err);
    })
  }

  render() {
        // set Button Group
        let buttonGroup =
        <React.Fragment>
          <button type="submit">Submit</button>
          <input type="button" onClick= {this.toggleAddCustomerMode} value="close"></input>
        </React.Fragment>

        if(this.state.isProcessing) {
          buttonGroup = <button type="submit" disabled>Processing...</button>
        }

    return(
      <div className="filter">
        <h2>Add Customer</h2>
        <form onSubmit={ this.handleSubmit }>
          <table>
              <tbody>
                  <tr>
                      <td>Customer Name:</td>
                      <td><input type="text" id="customerName" name="customerName" onChange={ this.onChange } required></input></td>
                  </tr>
                  <tr>
                      <td>Customer Email:</td>
                      <td><input type="email" id="customerEmail" name="customerEmail" onChange={ this.onChange } required></input></td>
                  </tr>
                  <tr>
                      <td>First Name:</td>
                      <td><input type="text" id="customerFirstName" name="customerFirstName" onChange={ this.onChange } required></input></td>
                  </tr>
                  <tr>
                      <td>Last Name:</td>
                      <td><input type="text" id="customerLastName" name="customerLastName" onChange={ this.onChange } required></input></td>
                  </tr>
                  <tr>
                      <td>Phone:</td>
                      <td><input type="number" id="customerPhone" name="customerPhone" onChange={ this.onChange } required></input></td>
                  </tr>
                  <tr>
                      <td>Street:</td>
                      <td><input type="text" id="customerStreet" name="customerStreet" onChange={ this.onChange } required></input></td>
                  </tr>
                  <tr>
                      <td>Suburb:</td>
                      <td><input type="text" id="customerSuburb" name="customerSuburb" onChange={ this.onChange } required></input></td>
                  </tr>
                  <tr>
                      <td>State:</td>
                      <td><input type="text" id="customerState" name="customerState" onChange={ this.onChange } required></input></td>
                  </tr>
                  <tr>
                      <td>Postcode:</td>
                      <td><input type="number" id="customerPostcode" name="customerPostcode" onChange={ this.onChange } required></input></td>
                  </tr>
              </tbody>
          </table>
          { buttonGroup }
        </form>
      </div>
    );
  }
}