import React from 'react';

export default class ResultTable extends React.Component {
  constructor(props) {
    super(props);

    this.state=  {
      isEdit: false,
      isLoading: false
    }
  }

  trTable = (data, index) => {
    return (
      <React.Fragment key={ index }>
      <tr>
        <td>{ data.id }</td>
        <td>{ data.customer_id }</td>
        <td>{ data.customer.customerName }</td>
        <td>{ data.trackingNumber }</td>
        <td>{ data.type }</td>
        <td>{ data.status }</td>
        <td> { data.orderDate } </td>
        <td>{ data.totalPrice }</td> 
        <td>
          <button className="btn btn-primary" type="button" value={data.id}>Edit</button>
          <button className="btn btn-danger" type="button" value={data.id}>Delete</button>
        </td>
      </tr>
      </React.Fragment>
    );
  }

  listTable = data => {
    return data.map((data, index) => {
      return this.trTable(data, index);
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
              {this.listTable(this.props.data)}
          </tbody>
      </table>
    </div>
    );
  }
 
}
