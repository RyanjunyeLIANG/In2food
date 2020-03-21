import React from 'react';

//import components
import Banner from '../../UI/Dashboard/Banner';

export default class Inventory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Inventory",
        }
    }

    render() {
        return (
            <div className="col-12 padding-fix">
                <Banner name={this.state.name} />
                <div name="filter">
                    <h2>Filter By:</h2>
                    <table>
                        <tbody>
                            <tr>
                                <th>Type:</th>
                                <td>
                                    <select id="" name="">
                                        <option value="none">Fruit</option>
                                        <option value="none">Vegetable</option>
                                        <option value="none">Spices</option>
                                    </select>
                                </td>

                                <th>Item Name:</th>
                                <td>
                                    <select id="" name="">
                                        <option value="none">Apple</option>
                                        <option value="none">Asparagus</option>
                                        <option value="none">Avocado</option>
                                        <option value="none">Apricot</option>
                                        <option value="none">Banana</option>
                                        <option value="none">Beetroot</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>

                                <th>Item ID:</th>
                                <td>
                                    <select id="" name="">
                                        <option value="none">INV23456</option>
                                        <option value="none">INF03866</option>
                                        <option value="none">INV25786</option>
                                        <option value="none">INF13656</option>
                                    </select>
                                </td>

                                <th>Shipping Invoice Assignment:</th>
                                <td>
                                    <select id="" name="">
                                        <option value="none">CM23456</option>
                                        <option value="none">JM123456</option>
                                        <option value="none">YQ123456</option>
                                    </select>
                                </td>

                                <th>In Stock:</th>
                                <td>
                                    <select id="" name="">
                                        <option value="none">"YES"</option>
                                        <option value="none">"NO"</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>        
                    
                </div>
                <div name="result">
                <h2>Results:</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Type</th>
                            <th>Item ID</th>
                            <th>Item Name</th>
                            <th>Shipping Inovice Assignment</th>
                            <th>In Stock</th>
                            
                        </tr>
                        <tr>
                            <td>Fruit</td>
                            <td>INV23456</td>
                            <td>Apple</td>
                            <td>JMV23456</td>
                            <td>"YES"</td>
                        </tr>
                        <tr>
                            <td>Vegetable</td>
                            <td>INV23456</td>
                            <td>Asparagus</td>
                            <td>QF03866</td>
                            <td>"NO"</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}