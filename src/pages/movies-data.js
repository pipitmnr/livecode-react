import React, {Component} from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import Movies from "../components/movies"
// import { Link } from 'react-router-dom';

class MoviesData extends Component{
    render(){
        const category = this.props.match.params.category;
        const {listMovies, isLoading} = this.props;
        const moviesHeadlines = listMovies.filter(item => {
            if(item.Category === category){
                return item;
            }
            return false;
        });
        const headlineMovies = moviesHeadlines.map((item, key) => {
            return(
                <Movies
                    key = {key}
                    title = {item.Title}
                    img = {item.Poster}
                    sinopsis = {item.Synopsis}
                    category = {item.Category}
                    year = {item.Year}
                />
            );
        });
        return(
            <div className="headlineMovies">
                {isLoading ? <div style={{ textAlign: "center" }}>Loading...</div> : headlineMovies}
            </div>
        );
    }
}
export default MoviesData;