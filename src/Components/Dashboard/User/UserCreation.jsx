import React from 'react';
import { register } from '../../Api/Auth';

//import components
import Banner from '../../UI/Dashboard/Banner';
import FormField from '../../UI/formField';

import '../../../styles/user.css';

export default class UserCreation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            banner: "User Creation",
            
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            firstName: '',
            lastName: '',
            phone: '',
            street: '',
            suburb: '',
            state: '',
            postcode: '',
            privilege: '',

            isLoading: false,
            isSuccess: false,
            error: false
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        this.setState({ isLoading: true });
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            street: this.state.street,
            suburb: this.state.suburb,
            state: this.state.state,
            postcode: this.state.postcode,
            privilege: this.state.privilege
        }
        register(newUser)
        .then(res => {
            if(res) {
                this.setState({ isSuccess: true, isLoading: false });
                setInterval(()=>{this.setState({ isSuccess: false })}, 2000);
            } else {
                this.setState({ error: true, isLoading: false });
                setInterval(() => {this.setState({ error: false })}, 2000);
            }
        })
        .catch(err => {
            console.log(err);
        });
    }

    onChange(event) {
        this.setState( 
            { [event.target.name]: event.target.value }
        );      
    }

    render() {
        if(this.state.isSuccess) {
            return (
                <div className="col-12 padding-fix">
                    <Banner name={this.state.banner} />
                    <div><strong>User { this.state.name } create successful</strong></div>
                </div>
            );
        }

        if(this.state.isLoading) {
            return (
                <div className="col-12 padding-fix">
                    <Banner name={this.state.banner} />
                    <div><strong>Loading...</strong></div>
                </div>
            );
        }

        if(this.state.error) {
            return (
                <div className="col-12 padding-fix">
                    <Banner name={this.state.banner} />
                    <div><strong>Error!</strong></div>
                </div>
            );
        }

        return (
            <div className="col-12 padding-fix">
                <Banner name={this.state.banner} />
                <div className="wrapper">
                    <form onSubmit={ this.onSubmit }>
                        <div className="form-group">
                            <label><strong>Account info: </strong></label>
                            <FormField name= 'name' type='text' onChange={ this.onChange } />
                            <FormField name= 'email' type='text' onChange={ this.onChange } />
                            <FormField name= 'privilege' type='text' onChange={ this.onChange } />
                            <FormField name= 'password' type='password' onChange={ this.onChange } />
                            <FormField name= 'password_confirmation' type='password' onChange={ this.onChange } />
                        </div>
                        <div className="form-group">
                            <label><strong>Contact info: </strong></label>
                            <FormField name= 'firstName' type='text' onChange={ this.onChange } />
                            <FormField name= 'lastName' type='text' onChange={ this.onChange } />
                            <FormField name= 'phone' type='number' onChange={ this.onChange } />
                        </div>
                        <div className="form-group">
                            <label><strong>Address: </strong></label>
                            <FormField name= 'street' type='text' onChange={ this.onChange } />
                            <FormField name= 'suburb' type='text' onChange={ this.onChange } />
                            <FormField name= 'state' type='text' onChange={ this.onChange } />
                            <FormField name= 'postcode' type='text' onChange={ this.onChange } />
                        </div>
                        <div className="submitButton">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}



