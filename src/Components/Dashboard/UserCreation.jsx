import React from 'react';

export default class UserCreation extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="col-8 padding-fix" id="dashboardBody">
                <div name="banner">
                    <h1>User Creation</h1>
                </div>
                <div name="form">   
                <label for="firstname">First name:</label> 
                <input type="text" id="firstname" name="firstname" required
                minlength="4" maxlength="8" size="10"></input>

                <label for="lastname">Last name:</label> 
                <input type="text" id="lastname" name="lastname" required
                minlength="4" maxlength="8" size="10"></input>
                  
                <label for="position">Position:</label> 
                <input type="text" id="position" name="position" required
                minlength="4" maxlength="8" size="10"></input>
                </div>
        </div>
        );
    }
}