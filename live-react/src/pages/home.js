import React, {Component} from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import Header from '../components/header';
import ListCategory from '../components/list-category';
import MoviesData from './movies-data';
import axios from "axios";
import { withRouter } from "react-router-dom";
// import { withRouter, Redirect } from "react-router-dom";
import { connect } from "unistore/react";
// import { actions } from "../store";
import { actions, store } from "../store";
// import Login from "./login";

const baseUrl = "https://api-todofancy.herokuapp.com/api/movies";
class Home extends Component{
    
    axiosMovies = async() => {
        await axios
            .get(`${baseUrl}`)
            .then(function(response){
                store.setState({listMovie: response.data.status, isLoading: false});
                console.log(response.data, "dataaaaaaaaaaaaaaaa");
            })
            .catch(function(error){
                store.setState({isLoading: false});
            });
    }
    componentDidMount = () => {
        this.axiosMovies();
    };
    render(){
            const category = this.props.match.params.category;
            if (category){
                console.log("category ada", category)
                console.log("liiisssstttttt", this.props.listMovie)
                return (
                    <div>
                        <Header {...this.props} doSearch={event => this.props.handleInputChange(event)} doCategory={e => this.props.categoryNews(e)}
                            placeholder="ketik sesuatu"/>
                        <div className="container">
                            <MoviesData {...this.props} listMovie = {this.props.listMovie} isLoading={this.props.isLoading} doCategory={e => this.props.categoryMovies(e)}/>
                        </div>
                    </div>  
                )
            }
            else{
                console.log("category gaaada", category)
                return (
                    <div>
                        <Header {...this.props} doSearch={event => this.props.handleInputChange(event)} doCategory={e => this.props.categoryNews(e)}
                            placeholder="ketik sesuatu"/>
                        <div className="container">
                            <ListCategory doCategory={e => this.props.categoryMovies(e)}/>
                        </div>
                    </div>   
                );
            }
            
    }
}
export default connect(
    "listMovie, isLoading, is_login",
    actions
  )(withRouter(Home));