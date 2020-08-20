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
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    };


    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    };




    handleDemoSubmit(e) {
        e.preventDefault();
        this.props.loginDemo()
            .then(() => this.props.history.push('/'))
   
    };





    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value  })
        }
    };





    render() {
        const { formType, errors, clearSessionErrors } = this.props; 

        return (
            <div className="login-modal-form">
                <Link to="/" className="close-btn" onClick={() => dispatch(clearSessionErrors())}>x</Link>
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
                        <ul className="session-errors-li">
                            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                        </ul>
                    <br/><br/>
                    <input 
                        className="login-btn" 
                        type="submit" 
                        value={formType} 
                        onClick={() => dispatch(clearSessionErrors())}
                        />
                    <button 
                        className='demo-login-btn' 
                        onClick={this.handleDemoSubmit}>Demo Login</button>
                </form>
            </div>
            


        )
    }



};


export default LoginForm;