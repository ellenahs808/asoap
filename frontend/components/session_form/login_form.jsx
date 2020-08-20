import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    };


    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value  })
        }
    };





    render() {
        return (
            <div className="login-modal-form">
                
                <h1 className="login-header">Welcome back to Asõap</h1>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <label className="login-email-label">
                        <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email address"
                            />
                    </label>
                    <br/><br/>
                    <label className="login-password-label">
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                    </label>
                    <br/><br/>
                    <input className="login-button" type="submit" value={this.props.formType} />
                </form>
            </div>
            


        )
    }



};


export default LoginForm;