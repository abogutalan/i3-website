import React from "react";
import Article from "./Article";
import ArticleCategory from "./Article";

const Articles = ({ articles }) =>
    events.map((article, idx) => <Article key={idx} {...article} />);

const ArticlesCategories = ({ articlesCategories }) =>
    events.map((articleCategory, idx) => <ArticleCategory key={idx} {...articleCategory} />);

export default Articles && ArticlesCategories;