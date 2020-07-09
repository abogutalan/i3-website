import React from 'react'
import Categories from '../../components/Categories';
import Articles from '../../components/Articles';
import { articles } from '../../data/articles';
import { categories } from '../../data/categories';
import Layout from '../../components/layout';


const ArticlesPage = () => (
  <Layout>
    <div className="page-header header-filter header-small" data-parallax="true"
      style={{backgroundImage: `url(/myAssets/img/Research Center/Fellows/FellowsCover.png)`}}>
      <div className="container">
        <div className="row">
            <div className="col-md-8 ml-auto mr-auto text-center">
                <h1 className="title">Research Articles</h1>
                <h4>Deep-dive into the articles by our esteemed Research Fellows.</h4>
            </div>
        </div>
      </div>
    </div>
    <div className="main main-raised">
      <div className="container">
          <div className="projects-4" id="projects-4">
              <div className="container">
                  <div className="row">
                      <div className="col-md-10 ml-auto mr-auto">
                          <h2 className="title">Latest Articles</h2>
                          {/* LATEST ARTICLES DATA BEGINS HERE */}
                          <Articles articles={articles} />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-10 ml-auto mr-auto">
                          <div className="section-space"> </div>
                          <h2 className="title text-center">Article Categories</h2>
                          <div className="row"></div>
                          {/* ARTICLE CATEGORIES BEGIN HERE */}
                          <Categories categories={categories} />
                      </div>
                  </div>
              </div>
          </div>
      </div>            
    </div>
  </Layout>
  )

  export default ArticlesPage