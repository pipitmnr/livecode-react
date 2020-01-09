import React, { Component } from "react";
import ListCategory from "../components/list-category"
class ListCategoryData extends Component{
    render(){
        const {listListCategory, isLoading} = this.props;
        const topHeadlines = listListCategory.filter(item => {
            if(item.content !== null && item.urlToImage !== null){
                return item;
            }
            return false;
        });
        const headlineNews = topHeadlines.map((item, key) => {
            return(
                <ListCategory
                    key = {key}
                    title = {item.title}
                    img = {item.urlToImage}
                    description = {item.description}
                    url = {item.url}
                    published = {item.publishedAt}
                />
            );
        });
        return(
            <div className="row align-items-center">
                {isLoading ? <div style={{ textAlign: "center" }}>Loading...</div> : headlineNews}
            </div>
        );
    }
}
export default ListCategoryData;