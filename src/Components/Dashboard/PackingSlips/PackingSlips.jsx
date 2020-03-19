import React from 'react';

//import components
import Banner from '../../UI/Dashboard/Banner';

export default class PackingSlips extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Packing Slips",
        }
    }

    render() {
        return (
            <div className="col-12 padding-fix">
                <Banner name={this.state.name} />
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
                <div name="result">
                <h2>Results</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Customer ID</th>
                            <th>Customer Name</th>
                            <th>Inovice Number</th>
                            <th>Delivery Date</th>
                        </tr>
                        <tr>
                            <td>123456</td>
                            <td>Bob</td>
                            <td>123456</td>
                            <td>2/2/2020</td>
                        </tr>
                        <tr>
                            <td>223456</td>
                            <td>Alex</td>
                            <td>111111</td>
                            <td>2/3/2020</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}