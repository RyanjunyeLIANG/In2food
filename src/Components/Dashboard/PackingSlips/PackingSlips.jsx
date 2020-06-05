import React from 'react';
import { getOrders } from '../../Api/packingSlipsFunc';

//import components
import Banner from '../../UI/Dashboard/Banner';
import ResultTable from './ResultTable';

export default class PackingSlips extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Packing Slips",
            data: [],

            isLoading: false
        }
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
        this.setState({ isLoading: true });
        getOrders()
        .then(res => {
            this.setState({ data: res.data, isLoading: false });
            //console.log(this.state.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        let result = 
        //Loading element
        <div><strong>Loading...</strong></div>;

        if(!this.state.isLoading) {
            result = 
            //Table elements
            <React.Fragment>
                <div name="filter">
                    <h2>Search Order</h2>
                    <form>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Order Number:</td>
                                    <td><input type="text" id="orderid" name="orderid"></input></td>
                                </tr>
                                <tr>
                                    <td>Customer Name:</td>
                                    <td><input type="text" id="cusotmername" name="customername"></input></td>
                                </tr>
                                <tr>
                                    <td>Tracking Number:</td>
                                    <td><input type="text" id="trackingnumber" name="trackingnumber"></input></td>
                                </tr>
                            </tbody>
                        </table>
                        <input type="submit" value="Search"></input>
                        <input type="reset" value="Reset"></input>
                    </form>
                </div>
                <ResultTable data={this.state.data} />
            </React.Fragment>
        }

        return (
            <div className="col-12 padding-fix">
                <Banner name={this.state.name} />
                { result }
        </div>
        );
    }
}