import React, {Component} from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
// import Header from '../components/header';
import axios from "axios";
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

class Login extends Component{
    // state = { namaPengguna: "", kataKunci: "" };

    changeInput = e => {
        console.warn("cek event target", e.target.value);
        store.setState({ [e.target.name]: e.target.value });
    };

    postLogin = () => {
        const { username, password } = this.props;
        const data = {
            username: username,
            password: password
        };
        store.setState({username: data.username});
        store.setState({password: data.password});
        const self = this;
        axios
        .post("https://alta-challenge4.free.beeceptor.com/login", data)
        .then(function (response) {
            if (response.data.api_key!=="") {
                // localStorage.setItem("api_key", response.data.api_key);
                // localStorage.setItem("is_login", true);
                // localStorage.setItem("full_name", response.data.full_name);
                // localStorage.setItem("email", response.data.email);

                store.setState({is_login: true});
                store.setState({api_key: response.data.api_key});
                store.setState({full_name: response.data.full_name});
                store.setState({email: response.data.email});
            }
            self.props.history.push("/profile");
        })
        .catch(function (error) {
            console.log(error);
        });
    };
    render(){
        console.warn(this.props)
        return (
            <div>
                <div className="container">
                    <div className="margin-atas">
                        <div className="row">
                            <div className="col-md-4">
                            </div>
                            <div className="col-md-4">
                                <form className="login-form" action="" onSubmit={e => e.preventDefault()}>
                                    <h2 className="text-center">Log in</h2>
                                    <div className="form-group">
                                        <label for="uname"><b>Username</b></label>
                                            <input className="form-control" type="text" placeholder="Enter Username" name="uname" onChange={e => this.changeInput(e)} required/>
                                    </div>
                                    <div className="form-group">
                                        <label for="psw"><b>Password</b></label>
                                            <input className="form-control" type="password" placeholder="Enter Password" name="psw" onChange={e => this.changeInput(e)} required/>
                                    </div>
                                    <div className="button-login">
                                        <button className="btn btn-primary btn-block" type="submit" onClick={() => this.postLogin()}><Link to="/profile">Login</Link></button>  
                                    </div>
                                </form> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        );
    }
}
// export default Login;
export default connect(
    "username, password, isLoading, api_key, is_login, full_name, email",
    actions
)(withRouter(Login));