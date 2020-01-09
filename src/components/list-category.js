import React, {Component} from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import { Link } from 'react-router-dom';

class ListCategory extends Component{
    render(){
        return (
            <div className="">
                <div className="margin-atas-lagi">
                </div>
                <div className="margin-atas">
                </div>
                <div className= "row align-items-center">
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-10">
                        <div className="row align-items-center">
                            <div className="col-md-3">
                                <div className="home-judul-category">
                                    <h3>
                                        Romance
                                    </h3>
                                </div>
                                <div className="live-home-img">
                                    <img src="https://m.media-amazon.com/images/M/MV5BOWJhMjJjMDItODQxYS00ODIyLWJhYzAtNTliMDhkZjM0YTA1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" alt=""/>
                                </div>
                                <br></br>
                                <br></br>
                                <div className="home-button-see-movies">
                                    <button className="btn btn-primary" onClick={(e) => this.props.doCategory("romance")}>
                                        <Link to={`/romance`}>
                                            see movies
                                        </Link>
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="home-judul-category">
                                    <h3>
                                        Action
                                    </h3>
                                </div>
                                <div className="live-home-img">
                                    <img src="https://m.media-amazon.com/images/M/MV5BZmEzNjhiZWEtNTM5OS00ZmQyLThhYjEtNjY4ZDZhOGFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" alt=""/>
                                </div>
                                <br></br>
                                <br></br>
                                <div className="home-button-see-movies">
                                    <button className="btn btn-primary">
                                        see movies
                                    </button>
                                </div>
                            </div> 
                            <div className="col-md-3">
                                <div className="home-judul-category">
                                    <h3>
                                        Fiction
                                    </h3>
                                </div>
                                <div className="live-home-img">
                                    <img src="https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg" alt=""/>
                                </div>
                                <br></br>
                                <br></br>
                                <div className="home-button-see-movies">
                                    <button className="btn btn-primary">
                                        see movies
                                    </button>
                                </div>
                            </div> 
                            <div className="col-md-3">
                                <div className="home-judul-category">
                                    <h3>
                                        Comedy
                                    </h3>
                                </div>
                                <div className="live-home-img">
                                    <img src="https://m.media-amazon.com/images/M/MV5BNTAyNDM0OGMtMmQ5OS00OGJiLTljMDUtY2Y1OTFlYmM2ZTk2XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg" alt=""/>
                                </div>
                                <br></br>
                                <br></br>
                                <div className="home-button-see-movies">
                                    <button className="btn btn-primary">
                                        see movies
                                    </button>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-md-1">
                        
                    </div>
                </div>
            </div>   
        );
    }
}
export default ListCategory;