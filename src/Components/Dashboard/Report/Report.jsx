import React from 'react';

import { getOrders, getItems, getSupplierList, getCustomerList } from '../../Api/ReportService';
//import components
import Banner from '../../UI/Dashboard/Banner';

//import sytles
import '../../../styles/Reports.css'

export default class Report extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Reports",
            orderList: [],
            itemList: [],
            supplierList: [],
            customerList: [],

            countOrders: null,
            orderPending: null,
            orderOnging: null,
            orderDelivered: null,

            countItems: null,

            countSuppliers: null,
            countCustomers: null,

            isLoading: false
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        this.setState({ isLoading: true });
        getOrders()
        .then(res => {
            let pending = res.data.filter(d =>  d.status === 'Pending').length
            let ongoing = res.data.filter(d => d.status === 'Ongoing').length
            let delivered = res.data.filter(d => d.status === 'Delivered').length
    
            this.setState({
                orderList: res.data,
                countOrders: res.data.length,
                orderPending: pending,
                orderOnging: ongoing,
                orderDelivered: delivered
            })
        })
        .catch(err => {
            console.log(err);
        })
        getItems()
        .then(res => {
            this.setState({ itemList: res.data, countItems: res.data.length })
        })
        .catch(err => {
            console.log(err);
        })
        getCustomerList()
        .then(res =>{
            this.setState({ 
                customerList: res.data,
                countCustomers: res.data.length
            });
        })
        getSupplierList()
        .then(res =>{
            this.setState({ 
                supplierList: res.data,
                countSuppliers: res.data.length,
                isLoading: false
            });
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        let result = ''

        if(this.state.isLoading) {
            result = 
            //Loading element
            <div><strong>Loading...</strong></div>;
        } else {
            result =
                <div id="report">
                    <div>
                        <h2>Order Summary</h2>
                        <table id="order-summary">
                            <tbody>
                                <tr>
                                    <td>Total Order #:</td>
                                    <td>{this.state.countOrders}</td>
                                </tr>
                                <tr>
                                    <td>Order in Pending #:</td>
                                    <td>{this.state.orderPending}</td>
                                </tr>
                                <tr>
                                    <td>Order in Ongoing #:</td>
                                    <td>{this.state.orderOnging}</td>
                                </tr>
                                <tr>
                                    <td>Order Delivered #:</td>
                                    <td>{this.state.orderDelivered}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h2>Item Summary</h2>
                        <table id="item-summary">
                            <tbody>
                                <tr>
                                    <td>Total Items #:</td>
                                    <td>{this.state.countItems}</td>
                                </tr>
                            </tbody>
                        </table> 
                    </div>
                    <div >
                        <h2>Misc Summary</h2>
                        <table id="misc-summary">
                            <tbody>
                                <tr>
                                    <td>Supplier #:</td>
                                    <td>{this.state.countSuppliers}</td>
                                </tr>
                                <tr>
                                    <td>Customer #:</td>
                                    <td>{this.state.countCustomers}</td>
                                </tr>
                            </tbody>
                        </table> 
                    </div>
                    {/* <button>Download Report</button> */}
                    {/* <button onClick="doChecks()">Print</button> //click button to show report result           */}
                </div>
        }

        return (
            <div className="">
                <Banner name={this.state.name} />
                { result }
            </div>
        );
    }
}