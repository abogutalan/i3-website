import React from 'react'
import Layout from '../../components/layout';

const Gallery = () => (
  <>
    <Layout>
      <div className = "page-header header-filter header-small" data-parallax = "true"
        style = {{ backgroundImage: `url('/myAssets/img/AppreciationDinner.jpg')` }}>
        <div className = "container">
            <div className = "row">
                <div className = "col-md-8 ml-auto mr-auto text-center">
                    <h1 className = "title"> Gallery </h1>
                </div>
            </div>
        </div>
      </div>
      <div className = "main main-raised">
        <div className = "container">
            <div className = "about-description text-center">
                <div className = "row">
                    <div className = "col-md-8 ml-auto mr-auto">
                        <h2 className = "title"> i3 Gallery </h2>
                    </div> 
                </div>
            </div>
            <div className = "about-services features-2">
              <div className = "ml-auto mr-auto text-center">
                <h3 className = "title"> 
                <a target = "_blank" rel="noopener noreferrer" href = "https://www.facebook.com/pg/i3islamicinstitute/photos/?ref=page_internal">
                  Click Here To View Our Photo Gallery </a>
                </h3>
                <h3 className = "title"> 
                  <a target = "_blank" rel="noopener noreferrer" href = "https://www.facebook.com/pg/i3islamicinstitute/videos/?ref=page_internal">
                    Click Here To View Our Video Gallery </a>
                </h3>
              </div>
            </div>
        </div>
      </div>
    </Layout>
  </>
)

export default Gallery