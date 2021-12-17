
import React, {Component, Fragment} from 'react';
import "./Login.css";
import logo from '../../Assets/logo.png';
import axios from "axios";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {email:'', password:'', user:[]};

        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

        axios.get('http://localhost:8000/user/all')
            .then(res=> {
                    const user = res.data;
                    console.log(res)
                }
            )
    }

    handleChangeEmail(event)
    {
        this.setState({email: event.target.value})
    }

    handleChangePassword(event)
    {
        this.setState({password: event.target.value})
    }

    handleSubmit(event){
        if(this.state.password !== '' && this.state.email !== '') {
            alert('coucou')
        } else {
            alert('Les champs ne peuvent pas être vides!')
        }
        event.preventDefault();
    }

    render() {
        return(
            <Fragment>
                <div className="Login__container">
                    <img src={logo} alt="logo" className="Login__logo"/>
                    <div className="Login__container__login container col-lg-5 col-md-8">
                        <form onSubmit={this.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" value={this.state.email} onChange={this.handleChangeEmail}/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone
                                    else.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={this.handleChangePassword}/>
                            </div>
                            <input type="submit" value="Submit" className="btn btn-primary"/>
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}