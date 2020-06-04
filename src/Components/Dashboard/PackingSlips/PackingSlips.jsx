import React from 'react';

//import components
import Banner from '../../UI/Dashboard/Banner';
import '../../../styles/packingslips.css'

export default class PackingSlips extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Packing Slips",
        }
    }

    render() {
        return (
            <div className="col-12 padding-fix Query">
                <Banner name={this.state.name} />
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
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}