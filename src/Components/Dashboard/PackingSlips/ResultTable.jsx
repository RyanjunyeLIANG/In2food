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

    this.toggleEditOrderMode = this.props.toggleEditOrderMode.bind(this);
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
                toggleEditOrderMode={this.toggleEditOrderMode}
                editDataCallBack={this.callBackFromChild}
                customerList={this.props.customerList}
                orderTypeList={this.props.orderTypeList}
                orderStatusList={this.props.orderStatusList}
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
                  <th>Order ID</th>
                  <th>Customer ID</th>
                  <th>Customer Name</th>
                  <th>Tracking Number</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Actions</th>
              </tr>
              {this.listTable(this.state.data)}
          </tbody>
      </table>
    </div>
    );
  }
 
}
