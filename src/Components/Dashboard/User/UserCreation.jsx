import React from 'react';

//import components
import Banner from '../../UI/Dashboard/Banner';

export default class UserCreation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "User Creation",
        }
    }

    render() {
        return (
            <div className="col-12 padding-fix">
                <Banner name={this.state.name} />
                <form>
                    <div className="form-group">
                        <label htmlFor="firstname">First name:</label> 
                        <input type="text" id="firstname" name="firstname" required
                        minLength="4" maxLength="8" size="10" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last name:</label> 
                        <input type="text" id="lastname" name="lastname" required
                        minLength="4" maxLength="8" size="10" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="position">Position:</label> 
                        <input type="text" id="position" name="position" required
                        minLength="4" maxLength="8" size="10" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}