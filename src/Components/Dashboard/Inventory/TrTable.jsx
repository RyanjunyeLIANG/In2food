import React from 'react';

import { deleteItems } from '../../Api/InventoryService';

import '../../../styles/trtable.css';

export default class TrTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      
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
    this.setState({ isProcessing: true })
    let id = this.state.data.id
    deleteItems(id)
    .then(res => {
      this.setState({ isProcessing: false })
      alert('delete item ' + id + ' successful.')
      this.props.resetData()
    })
  }

  toggleEditMode() {
    this.props.editDataCallBack(this.state.data)
    this.props.toggleEditItemMode()
  }

  render() {
    let data = this.state.data;
    let unitPrice = '$' + data.unitPrice

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
        <td>{ data.itemName }</td>
        <td>{ data.category }</td>
        <td>{ data.description }</td>
        <td>{ data.supplier_id }</td>
        <td>{ data.supplier.supplierName }</td>
        <td>{ unitPrice }</td> 
        { buttonGroup }
      </tr>

    return (
      <React.Fragment>
        { view }
      </React.Fragment>
    );
  }
}