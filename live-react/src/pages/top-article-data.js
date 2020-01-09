import React, { Component } from "react";
import TopArticle from "../components/top-article"
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import { Link } from 'react-router-dom';

class TopArticleData extends Component{
    render(){
        const {listTopArticle, isLoading} = this.props;
        const topHeadlines = listTopArticle.filter(item => {
            if(item.content !== null && item.urlToImage !== null){
                return item;
            }
            return false;
        });
        let indeks = 0;
        const headlineNews = topHeadlines.map((item, key) => {
            indeks = indeks+1;
            if (indeks <=5 ){
                return(
                    <TopArticle
                        key = {key}
                        title = {item.title}
                        url = {item.url}
                        indeks = {indeks}
                    />
                );
            }
            return null;
        });
        return(
            <div className="headlineNews">
                <div className="top-article">
                    <div className="top-article-header">
                        <div href="academy" className="top-article-header-left">
                            <Link to="/news">
                                BERITA TERKINI
                            </Link>
                        </div>
                        <div href="academy" className="top-article-header-right">
                            <Link to="/news">
                                lihat semua
                            </Link>
                        </div>
                    </div>
                    {isLoading ? <div style={{ textAlign: "center" }}>Loading...</div> : headlineNews}
                </div>
            </div>
        );
    }
}
export default TopArticleData;