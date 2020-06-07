import React from 'react';
import { editItems } from '../../Api/InventoryService';

export default class EditItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      supplierList: this.props.supplierList,
      itemCategoryList: this.props.itemCategoryList,

      category: this.props.data.category,
      itemName: this.props.data.itemName,
      description: this.props.data.description,
      unitPrice: this.props.data.unitPrice,
      supplierId: this.props.data.supplier.id,

      isProcessing: false
    }

    this.closeEditItemMode = this.closeEditItemMode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  closeEditItemMode() {
    this.props.toggleEditItemMode()
  }

  onChange(event) {
    this.setState( 
        { [event.target.name]: event.target.value }
    ); 
  }

  handleSubmit(e) {
    e.preventDefault();
    const items = {
      itemName: this.state.itemName,
      category: this.state.category,
      description: this.state.description,
      unitPrice: this.state.unitPrice,
      supplier_id: this.state.supplierId
    }
    // console.log(items)
    this.setState({ isProcessing: true });
    editItems(this.props.data.id, items)
    .then(res => {
        this.setState({ isProcessing: false });
        alert('Edit item successful');
        this.props.toggleEditItemMode();
        this.props.resetData();
    })
    .catch(err => {
        console.log(err);
    })
  }

  render() {
    // Edit item view
    let supplierList =
    <select name="supplierId" id="supplierId" value={this.state.supplierId} onChange={ this.onChange }>
      { this.state.supplierList.map((data, index) => <option key={index} value={data.id}>{data.supplierName}</option>) }
    </select>

    let itemCategory =
    <select name="category" id="category" value={this.state.category} onChange={ this.onChange }>
      { this.state.itemCategoryList.map((data, index) => <option key={index} value={data}>{data}</option>) }
    </select>
    
    // set Button Group
    let buttonGroup =
    <React.Fragment>
      <button type="submit">Submit</button>
      <input type="button" onClick= {this.closeEditItemMode} value="close"></input>
    </React.Fragment>

    if(this.state.isProcessing) {
      buttonGroup = <button type="submit" disabled>Processing...</button>
    }

    return (
      <div className="filter">
        <h2>Edit Item</h2>
        <form onSubmit={ this.handleSubmit }>
          <table>
            <tbody>
                <tr>
                  <td>Item Name:</td>
                  <td><input type="text" id="itemName" name="itemName" value={this.state.itemName} onChange={ this.onChange } required></input></td>
                </tr>
                <tr>
                    <td>Category:</td>
                    <td>
                        { itemCategory }
                    </td>
                </tr>
                <tr>
                    <td>Description:</td>
                    <td><input type="text" id="description" name="description" value={this.state.description} onChange={ this.onChange } required></input></td>
                </tr>
                <tr>
                    <td>Unit Price:</td>
                    <td><input type="number" id="unitPrice" name="unitPrice" value={this.state.unitPrice} onChange={ this.onChange } required></input></td>
                </tr>
                <tr>
                    <td>Supplier ID: </td>
                    <td>{ supplierList }</td>
                </tr>
            </tbody>
          </table>
          { buttonGroup }
        </form>
      </div>
    );
  }
}