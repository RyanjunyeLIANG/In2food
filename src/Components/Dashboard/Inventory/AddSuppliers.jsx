import React from 'react';
import { addSuppliers } from '../../Api/InventoryService';

export default class AddSuppliers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        supplierName: '',
        supplierEmail: '',
        supplierFirstName: '',
        supplierLastName: '',
        supplierPhone: '',
        supplierStreet: '',
        supplierSuburb: '',
        supplierState: '',
        supplierPostcode: '',

        isProcessing: false
    }

    this.toggleAddSupplierMode = this.toggleAddSupplierMode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  toggleAddSupplierMode() {
    this.props.toggleAddSupplierMode()
  }

  onChange(event) {
    this.setState( 
        { [event.target.name]: event.target.value }
    ); 
  }

  handleSubmit(e) {
    e.preventDefault();
    const newSupplier = {
        supplierName: this.state.supplierName,
        email: this.state.supplierEmail,
        firstName: this.state.supplierFirstName,
        lastName: this.state.supplierLastName,
        phone: this.state.supplierPhone,
        street: this.state.supplierStreet,
        suburb: this.state.supplierSuburb,
        state: this.state.supplierState,
        postcode: this.state.supplierPostcode
    }
    // console.log(orders)
    this.setState({ isProcessing: true });
    addSuppliers(newSupplier)
    .then(res => {
        this.setState({ isProcessing: false });
        alert('Add supplier successful');
        this.toggleAddSupplierMode();
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
          <input type="button" onClick= {this.toggleAddSupplierMode} value="close"></input>
        </React.Fragment>

        if(this.state.isProcessing) {
          buttonGroup = <button type="submit" disabled>Processing...</button>
        }

    return(
      <div className="filter">
        <h2>Add Supplier</h2>
        <form onSubmit={ this.handleSubmit }>
          <table>
              <tbody>
                  <tr>
                      <td>Supplier Name:</td>
                      <td><input type="text" id="supplierName" name="supplierName" onChange={ this.onChange } required></input></td>
                  </tr>
                  <tr>
                      <td>Supplier Email:</td>
                      <td><input type="email" id="supplierEmail" name="supplierEmail" onChange={ this.onChange } required></input></td>
                  </tr>
                  <tr>
                      <td>First Name:</td>
                      <td><input type="text" id="supplierFirstName" name="supplierFirstName" onChange={ this.onChange } required></input></td>
                  </tr>
                  <tr>
                      <td>Last Name:</td>
                      <td><input type="text" id="supplierLastName" name="supplierLastName" onChange={ this.onChange } required></input></td>
                  </tr>
                  <tr>
                      <td>Phone:</td>
                      <td><input type="number" id="supplierPhone" name="supplierPhone" onChange={ this.onChange } required></input></td>
                  </tr>
                  <tr>
                      <td>Street:</td>
                      <td><input type="text" id="supplierStreet" name="supplierStreet" onChange={ this.onChange } required></input></td>
                  </tr>
                  <tr>
                      <td>Suburb:</td>
                      <td><input type="text" id="supplierSuburb" name="supplierSuburb" onChange={ this.onChange } required></input></td>
                  </tr>
                  <tr>
                      <td>State:</td>
                      <td><input type="text" id="supplierState" name="supplierState" onChange={ this.onChange } required></input></td>
                  </tr>
                  <tr>
                      <td>Postcode:</td>
                      <td><input type="number" id="supplierPostcode" name="supplierPostcode" onChange={ this.onChange } required></input></td>
                  </tr>
              </tbody>
          </table>
          { buttonGroup }
        </form>
      </div>
    );
  }
}