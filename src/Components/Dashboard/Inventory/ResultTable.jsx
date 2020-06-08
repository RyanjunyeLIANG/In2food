import React from 'react';

import TrTable from './TrTable';

export default class ResultTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      isEdit: false,
      isLoading: false,
    }

    this.toggleEditItemMode = this.props.toggleEditItemMode.bind(this);
    this.resetData = this.props.resetData.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data)
    this.setState({data: this.props.data})
  }

  callBackFromChild = (childData) => {
    this.props.editDataCallBack(childData);
  }

  listTable = data => {
    return data.map((data, index) => {
      return <TrTable 
                data={data}
                key={index}
                resetData={this.resetData}
                toggleEditItemMode={this.toggleEditItemMode}
                editDataCallBack={this.callBackFromChild}
                supplierList={this.state.supplierList}
                itemCategoryList={this.state.itemCategoryList}
              />
    });
  }

  render() {
    return (
      <div name="result" className="Results">
      <h2>Results</h2>
      <table>
          <tbody>
              <tr>
                  <th>Item ID</th>
                  <th>Item Name</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Supplier ID</th>
                  <th>Supplier Name</th>
                  <th>Unit Price</th>
                  <th>Actions</th>
              </tr>
              {this.listTable(this.state.data)}
          </tbody>
      </table>
    </div>
    );
  }
 
}
