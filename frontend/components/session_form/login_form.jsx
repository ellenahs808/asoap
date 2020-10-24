
import React from 'react';
import { Link } from 'react-router-dom';
import LeftNavbarContainer from '../navbar/left_navbar_container'
import { closeModal } from '../../actions/modal_actions';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
        this.greetings = this.greetings.bind(this);
        // this.demoTyper = this.demoTyper.bind(this);
    };


    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user)

    };




    handleDemoSubmit(e) {
        e.preventDefault();
        this.props.loginDemo()
        this.props.closeModal()
        // this.demoTyper(e)
    };




    

    // demoTyper(e) {
    //     e.preventDefault();

    //     const demoUser = { email: 'soaplover@demo.com', password: 'hunter12' }

    //     let { email, password } = demoUser;
    //     let interval = 150;
    //     let login = () => {
    //         this.props.login(this.state);
    //         this.props.history.push("/")
    
    //     };
    //     let closeModal = () => {
    //         this.props.closeModal()
    //     }


    //     if (this.state.email !== email) {
    //         let inputEmail = setInterval(() => {
    //             if (this.state.email !== email) {
    //                 let tempEmail = email.slice(0, this.state.email.length + 1);
    //                 this.setState({ email: tempEmail });
    //             } else {
    //                 clearInterval(inputEmail);
    //                 fillPassword();
    //             }
    //         }, interval);
    //     }
    //     let fillPassword = () => {
    //         let inputPassword = setInterval(() => {
    //             if (this.state.password !== password) {
    //                 let tempPassword = password.slice(0, this.state.password.length + 1);
    //                 this.setState({ password: tempPassword });
    //             } else {
    //                 clearInterval(inputPassword);
    //                 login();
    //                 closeModal();
    //             }
    //         }, interval);
    //     };
    // }











    componentWillUnmount() {
        this.props.clearSessionErrors()
    };




    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    };



    greetings() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay;

        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "evening"
        }

        return timeOfDay;
    }





    render() {
        const { formType, errors } = this.props;


        return (
    
            <div className="login-modal-form">
                <p onClick={() => this.props.closeModal()} className="close-btn">x</p>
                <div className="login-header">
                    <h2>Good {this.greetings()}.</h2>
                    <h2>Welcome back to Asõap</h2>
                </div>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <label className="login-email-label">
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email address"
                        />
                    </label>
                    <br /><br />
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
                    <br /><br />
                    <input
                        className="login-btn"
                        type="submit"
                        value={formType}
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