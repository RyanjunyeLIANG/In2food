import React from 'react';
import { addItems } from '../../Api/InventoryService';

export default class AddItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        supplierList: this.props.supplierList,
        itemCategoryList: this.props.itemCategoryList,

        category: this.props.itemCategoryList[0],
        itemName: '',
        description: '',
        unitPrice: '',
        supplierId: this.props.supplierList[0].id,

        isProcessing: false
    }

    this.toggleAddItemMode = this.toggleAddItemMode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  toggleAddItemMode() {
    this.props.toggleAddItemMode()
  }

  onChange(event) {
    this.setState( 
        { [event.target.name]: event.target.value }
    ); 
  }

  handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      itemName: this.state.itemName,
      category: this.state.category,
      description: this.state.description,
      unitPrice: this.state.unitPrice,
      supplier_id: this.state.supplierId
    }
    // console.log(items)
    this.setState({ isProcessing: true });
    addItems(newItem)
    .then(res => {
        this.setState({ isProcessing: false });
        alert('Add item successful');
        this.props.toggleAddItemMode();
        this.props.resetData();
    })
    .catch(err => {
        console.log(err);
    })
  }

  render() {
        // add item view
        let supplierList =
        <select name="supplierId" id="supplierId" onChange= { this.onChange }>
          { this.state.supplierList.map((data, index) => <option key={index} value={data.id}>{data.supplierName}</option>) }
        </select>

        let itemCategory =
        <select name="type" id="itemType" onChange= { this.onChange }>
          { this.state.itemCategoryList.map((data, index) => <option key={index} value={data}>{data}</option>) }
        </select>
        
        // set Button Group
        let buttonGroup =
        <React.Fragment>
          <button type="submit">Submit</button>
          <input type="button" onClick= {this.toggleAddItemMode} value="close"></input>
        </React.Fragment>

        if(this.state.isProcessing) {
          buttonGroup = <button type="submit" disabled>Processing...</button>
        }

    return(
      <div className="filter">
        <h2>Add Item</h2>
        <form onSubmit={ this.handleSubmit }>
          <table>
              <tbody>
                  <tr>
                    <td>Item Name:</td>
                    <td><input type="text" id="itemName" name="itemName" onChange={ this.onChange } required></input></td>
                  </tr>
                  <tr>
                      <td>Category:</td>
                      <td>
                          { itemCategory }
                      </td>
                  </tr>
                  <tr>
                      <td>Description:</td>
                      <td><input type="text" id="description" name="description" onChange={ this.onChange } required></input></td>
                  </tr>
                  <tr>
                      <td>Unit Price:</td>
                      <td><input type="number" id="unitPrice" name="unitPrice" onChange={ this.onChange } required></input></td>
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