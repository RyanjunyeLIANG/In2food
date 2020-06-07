import React from 'react';
import { getOrders, getCustomerList } from '../../Api/PackingSlipsService';

import AddOrders from './AddOrders';
import EditOrders from './EditOrders';
import AddCustomers from './AddCustomers';

//import components
import Banner from '../../UI/Dashboard/Banner';
import ResultTable from './ResultTable';

import '../../../styles/packingslips.css';

export default class PackingSlips extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Packing Slips",
            data: [],
            customerList: [],
            orderTypeList: ['Regular', 'Express', 'Return'],
            orderStatusList: ['Pending', 'Ongoing', 'Delivered'],

            //search data
            searchOrderId: '',
            searchCustomerName: '',
            searchTrackingNumber: '',

            //edit data from child
            editDataFromChild: '',
            
            isLoading: false,
            isAddOrder: false,
            isEditOrder: false,
            isAddCustomer: false,
            isProcessing: false,
            searchResults: [],
        }

        this.toggleAddCustomerMode = this.toggleAddCustomerMode.bind(this);
        this.toggleEditOrderMode = this.toggleEditOrderMode.bind(this);
        this.closeAddOrderMode = this.closeAddOrderMode.bind(this);
        this.addOrderMode = this.addOrderMode.bind(this);
        this.resetData = this.resetData.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        //Output
        // [
        //     {
        //     "id": 1,
        //     "type": "regular",
        //     "status": "Ongoing",
        //     "trackingNumber": "NF149242140",
        //     "totalPrice": 3293,
        //     "customer_id": 1,
        //     "orderDate": "2020-05-19 00:00:00",
        //     "created_at": "2020-05-16T12:15:01.000000Z",
        //     "updated_at": "2020-05-16T12:15:01.000000Z",
        //     "customer": {
        //         "id": 1,
        //         "customerName": "tester",
        //         "created_at": "2020-05-16T12:14:48.000000Z",
        //         "updated_at": "2020-05-16T12:14:48.000000Z"
        //     }
        //     }
        // ]
        this.resetData();
    }

    onChange(event) {
        this.setState( 
            { [event.target.name]: event.target.value }
        ); 
    }

    valueVerification(data) {
        if(data) {
            return data;
        } else {
            return false;
        }
    }

    resetData() {
        this.setState({ isLoading: true });
        getOrders()
        .then(res => {
            this.setState({ data: res.data, isLoading: false, searchOrderId: '', searchCustomerName: '', searchTrackingNumber: '' });
        })
        .catch(err => {
            console.log(err);
        })
        getCustomerList()
        .then(res =>{
            this.setState({ 
                customerList: res.data
            });
        })
        .catch(err => {
            console.log(err);
        })
    }

    addOrderMode() {
        this.setState({ isAddOrder: true });
    }

    toggleEditOrderMode() {
        this.state.isEditOrder ? this.setState({ isEditOrder: false }) : this.setState({ isEditOrder: true })
    }

    toggleAddCustomerMode() {
        this.state.isAddCustomer ? this.setState({ isAddCustomer: false }) : this.setState({ isAddCustomer: true })
    }

    editDataCallBack = (dataFromChild) => {
        this.setState({ editDataFromChild: dataFromChild });
    }

    closeAddOrderMode() {
        this.setState({ isAddOrder: false });
    }

    onSearch(event) {
        event.preventDefault();
        this.setState({ isLoading: true });
        let targetData = this.state.data;
        const hasOrderId = this.valueVerification(this.state.searchOrderId);
        const hasCustomerName = this.valueVerification(this.state.searchCustomerName);
        const hasTrackingNumber = this.valueVerification(this.state.searchTrackingNumber);

        if(hasOrderId !== false) {
            targetData = targetData.filter(d => {
                return d.id.toString() === hasOrderId;
            });
        }
        if(hasCustomerName !== false ) {
            targetData = targetData.filter(d => {
                return d.customer.customerName === hasCustomerName;
            });
            console.log(targetData);
        }
        if(hasTrackingNumber !== false ) {
            targetData = targetData.filter(d => {
                return d.trackingNumber === hasTrackingNumber;
            })
        }
        this.setState({ data: targetData, isLoading: false });
    }

    render() {
        let result = ''

        if(!this.state.isEditOrder && !this.state.isAddOrder && this.state.isLoading) {
            result = 
            //Loading element
            <div><strong>Loading...</strong></div>;
        }

        //searchView
        const searchView = 
        <div className="filter">
        <div>
            <input type="button" onClick={ this.addOrderMode } value="Add new order" />
            <input type="button" onClick={ this.toggleAddCustomerMode } value="Add new customer" />
        </div>
        <h2>Search Order</h2>
        <form onSubmit={ this.onSearch }>
            <table>
                <tbody>
                    <tr>
                        <td>Order Number:</td>
                        <td><input type="text" id="searchOrderId" name="searchOrderId" onChange={ this.onChange }></input></td>
                    </tr>
                    <tr>
                        <td>Customer Name:</td>
                        <td><input type="text" id="searchCustomerName" name="searchCustomerName" onChange={ this.onChange }></input></td>
                    </tr>
                    <tr>
                        <td>Tracking Number:</td>
                        <td><input type="text" id="searchTrackingNumber" name="searchTrackingNumber" onChange={ this.onChange }></input></td>
                    </tr>
                </tbody>
            </table>
            <button type="submit">Submit</button>
            <input type="reset" onClick= { this.resetData }></input>
        </form>
        </div>;

        if(!this.state.isLoading && !this.state.isAddOrder && !this.state.isEditOrder && !this.state.isAddCustomer) {
            result = 
            //Table elements
            <ResultTable 
                data={this.state.data} 
                resetData={this.resetData}
                toggleEditOrderMode={this.toggleEditOrderMode}
                editDataCallBack={this.editDataCallBack}
                customerList={this.state.customerList}
                orderTypeList={this.state.orderTypeList}
                orderStatusList={this.state.orderStatusList}
            />
        }

        let inputField = searchView;
        if(this.state.isAddOrder) {
            inputField = <AddOrders 
                            closeAddOrder={this.closeAddOrderMode}
                            resetData={this.resetData}
                            customerList={this.state.customerList}
                            orderTypeList={this.state.orderTypeList}
                            orderStatusList={this.state.orderStatusList}
                        />;
        }
        if(this.state.isEditOrder) {
            inputField = <EditOrders 
                            toggleEditOrderMode={this.toggleEditOrderMode}
                            data={this.state.editDataFromChild}
                            resetData={this.resetData}
                            customerList={this.state.customerList}
                            orderTypeList={this.state.orderTypeList}
                            orderStatusList={this.state.orderStatusList}
                        />;
        }
        if(this.state.isAddCustomer) {
            inputField = <AddCustomers 
                            toggleAddCustomerMode={this.toggleAddCustomerMode}
                            resetData={this.resetData}
                        />;
        }

        return (
            <div className="col-12 padding-fix">
                <Banner name={this.state.name} />
                <div className="wrapper">
                    { inputField }
                    { result }
                </div>
            </div>
        );
    }
}