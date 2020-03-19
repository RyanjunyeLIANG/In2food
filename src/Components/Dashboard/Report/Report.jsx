import React from 'react';

//import components
import Banner from '../../UI/Dashboard/Banner';

export default class Report extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Reports",
        }
    }

    render() {
        return (
            <div className="col-12 padding-fix">
                <Banner name={this.state.name} />
                <div name="filter">
                    <h2>Filter Orders By:</h2>
                    <p>
                        <span>Category:</span>
                        <span>
                            <select id="" name="">
                                <option value="none">Chicken</option>
                                <option value="none">Beef</option>
                                <option value="none">Snake</option>
                                <option value="none">Noodle</option>
                            </select>
                        </span>
                    </p>
                </div>
                <div>
                    <button type="button" className="btn btn-primary">Print</button>
                </div>
            </div>
        );
        //<button onClick="doChecks()">Print</button> //click button to show report result





            
    }


  
}
