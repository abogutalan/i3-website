import React from 'react'
import ArticlesCategories from '../../components/Articles';
import Articles from '../../components/Articles';
import { articles } from '../../data/articles';
import { articlesCategories } from '../../data/articles';
import Layout from '../../components/layout';


const ArticlesPage = () => (
  <Layout>
    <div class="page-header header-filter header-small" data-parallax="true"
      style="background-image: url('./myAssets/img/Research Center/Fellows/FellowsCover.png');">
      <div class="container">
        <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
                <h1 class="title">Research Articles</h1>
                <h4>Deep-dive into the articles by our esteemed Research Fellows.</h4>
            </div>
        </div>
      </div>
    </div>
    <div class="main main-raised">
      <div class="container">
          <div class="projects-4" id="projects-4">
              <div class="container">
                  <div class="row">
                      <div class="col-md-10 ml-auto mr-auto">
                          <h2 class="title">Latest Articles</h2>
                          {/* LATEST ARTICLES DATA BEGINS HERE */}
                          <Articles articles={articles} />
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-10 ml-auto mr-auto">
                          <div class="section-space"> </div>
                          <h2 class="title text-center">Article Categories</h2>
                          <div class="row"></div>
                          {/* ARTICLE CATEGORIES BEGIN HERE */}
                          <Articles articlesCategories={articlesCategories} />
                      </div>
                  </div>
              </div>
          </div>
      </div>            
    </div>
  </Layout>
  )

  export default ArticlesPage