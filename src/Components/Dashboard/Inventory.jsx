import React from 'react';

export default class Inventory extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="col-8 padding-fix" id="dashboardBody">
                <div name="banner">
                    <h1>Inventory </h1>
                </div>
                <div name="filter">
                    <h2>Filter By:</h2>
                    <table>
                        <tr>
                            <th>Type:</th>
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

                    </table>        
                    
                </div>
                <div name="result">
                <h2>Results</h2>
                <table>
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
                </table>
            </div>
        </div>
        );
    }
}