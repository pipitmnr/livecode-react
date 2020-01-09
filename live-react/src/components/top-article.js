import React, {Component} from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

class TopArticle extends Component{
    render(){
        return (
            <div className="top-article-list">
                <a href={this.props.url} className="top-article-list-isi">
                    <span>
                        {"_#"}
                        {this.props.indeks}
                        {"_"}
                    </span>
                    <br></br>
                    {this.props.title}
                </a>
            </div>
        );
    }
}
export default TopArticle;