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
                    <h2>Filter Orders By:</h2>
                    <table>
                        <tbody>
                            <tr>
                                <th>Delivery Date:</th>
                                <td>
                                    <select id="" name="">
                                        <option value="none">2/2/2020</option>
                                    </select>
                                </td>
                                <th>Customer Name:</th>
                                <td>
                                    <select id="" name="">
                                        <option value="none">Bob</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>Customer ID:</th>
                                <td>
                                    <select id="" name="">
                                        <option value="none">123456</option>
                                    </select>
                                </td>
                                <th>Invoice Number:</th>
                                <td>
                                    <select id="" name="">
                                        <option value="none">123456</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>               
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