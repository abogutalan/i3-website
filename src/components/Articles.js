import React from "react";
import Article from "./Article";

const Articles = ({ articles }) =>
    articles.map((article, idx) => <Article key={idx} {...article} />);

export default Articles