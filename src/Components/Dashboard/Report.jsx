import React from 'react';

export default class Report extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="col-8 padding-fix" id="dashboardBody">
                <div name="banner">
                    <h1>Report</h1>
                </div>
                <div name="filter">
                    <h2>Filter Orders By:</h2>
                    <table>
                        <tr>
                            <th>Category:</th>
                            <td>
                                <select id="" name="">
                                    <option value="none">Chicken</option>
                                    <option value="none">Beef</option>
                                    <option value="none">Snake</option>
                                    <option value="none">Noodle</option>
                                </select>
                            </td>
                          
                        </tr>
                      

                    </table>
                </div>
                <button type="button" className="btn btn-primary">Print</button>
            </div>
        );
        //<button onClick="doChecks()">Print</button> //click button to show report result





            
    }


  
}
