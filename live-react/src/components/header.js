import React, {Component} from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import Search from './search';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

class Header extends Component{
    postSignout = () => {
        // localStorage.removeItem("is_login");
        store.setState({is_login: false});
        this.props.history.push("/login");
    };
    render(){
        const is_login = JSON.parse(localStorage.getItem("is_login"));
        if (is_login!==true){
            return (
                <header>
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet"/>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-2 header-kiri">
                                <div className="header-logo">
                                    <Link to="/">
                                        <img src={require('../assets/img/logo192.png')} alt="" onClick={(e) => this.props.doCategory("academy")}/>
                                    </Link>
                                </div>
                                <div href="index.html" className="header-logo-text">
                                    KabarKabar
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="header-navbar">
                                </div>
                            </div>
                            <div className="col-md-3">
                                <form className="form-inline active-cyan-4">
                                    <input className="form-control form-control-sm w-75" type="text" placeholder="Search"
                                        aria-label="Search" onChange={this.props.doSearch}/>
                                        <button type="submit" class="searchButton">
                                            <i class="fa fa-search"></i>
                                        </button>
                                </form>
                            </div>
                            <div className="col-md-2">
                                <div>
                                    <ul className="header-navbar-list list-unstyled">
                                        <li>
                                            <Link to="/login">
                                                Masuk
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            );
        }
        else{
            return (
                <header>
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet"/>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-2 header-kiri">
                                <div className="header-logo">
                                    <Link to="/news">
                                        <img src={require('../assets/img/logo192.png')} onClick={(e) => this.props.doCategory("academy")} alt=""/>
                                    </Link>
                                </div>
                                <div href="index.html" className="header-logo-text">
                                    KabarKabar
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="header-navbar">
                                </div>
                            </div>
                            <div className="col-md-3">
                                <form className="form-inline active-cyan-4">
                                    <input className="form-control form-control-sm w-75" type="text" placeholder="Search"
                                        aria-label="Search" onChange={this.props.doSearch}/>
                                        <button type="submit" class="searchButton">
                                            <i class="fa fa-search"></i>
                                        </button>
                                </form>
                            </div>
                            <div className="col-md-2">
                                <div>
                                    <ul className="header-navbar-list list-unstyled">
                                        <li>
                                            <Link to="/profile" >Profile</Link>
                                        </li>
                                        <li onClick={() => this.postSignout()}>
                                            <Link to="/login" >Keluar</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            );
        }
        
    }
}
Search.propTypes = {
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
};
// export default Header;
export default connect(
    "username, password, isLoading, api_key, is_login, full_name, email",
    actions
)(withRouter(Header));