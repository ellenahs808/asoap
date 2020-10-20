import React from 'react';




class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirm_password: '',
            first_name: '',
            last_name: '',
            // errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    };


    handleSubmit(e) {
        e.preventDefault();
        const { password, confirm_password } = this.state;
        if (password !== confirm_password) {
            alert("Passwords do not match");
        } else {
            const user = Object.assign({}, this.state);
            this.props.signup(user);
            // this.props.closeModal();
        };
    }





    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }



    componentWillUnmount() {
        this.props.clearSessionErrors()
    };




    render() {
        const { formType, errors } = this.props;

        return (
            <div className="signup-modal-form">
                <p onClick={() => this.props.closeModal()} className="close-btn">x</p>
                <div className="signup-header">
                    <h2>It seems you are new to us. </h2>
                    <h2>Welcome to Asõap</h2>
                </div>
                    <p className="signup-par">To create an account, please enter your details below</p>
                    
                    <form onSubmit={this.handleSubmit}>
                        <ul className="signup-form">
                            <label className="signup-email-label">
                                <input
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    placeholder="Email address"
                                />
                            </label>
                            <br />
                            <label className="signup-password-label">
                                <input
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    placeholder="Password"
                                />
                            </label>
                            <br/>
                            <label className="signup-confirm-password-label">
                                <input
                                    type="password"
                                    value={this.state.confirm_password}
                                    onChange={this.update('confirm_password')}
                                    placeholder="Confirm Password"
                                />
                            </label>
                            <br/>
                            <div className="signup-name-label">
                                <label className="signup-firstname-label">
                                    <input
                                        type="text"
                                        value={this.state.first_name}
                                        onChange={this.update('first_name')}
                                        placeholder="First name"
                                    />
                                </label>
                                <br/>
                                <label className="signup-lastname-label">
                                    <input
                                        type="text"
                                        value={this.state.last_name}
                                        onChange={this.update('last_name')}
                                        placeholder="Last name"
                                    />
                                </label>
                            </div>
                            <div className="session-errors-li">
                                <ul>
                                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                                </ul>
                            </div>
                        </ul>
                        <br/>
                        <input className="signup-btn" type="submit" value={formType} />
                        <br/>
                        <div className="signup-footer" onClick={() => this.props.openModal('login')}>
                            Do you already have an Asõap account?
                        </div>
                    </form>
            </div>


        )
    }
};




export default SignupForm;