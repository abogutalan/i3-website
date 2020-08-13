
import React from 'react';

const FellowsPageTemplate = ({  name, body, imgURL }) => {
  
  return (
    <>
      <div className = "about-us sidebar-collapse">
        <div id="navbarDiv">
        </div>

        <div className = "page-header header-filter header-small" data-parallax="true" style={{ backgroundImage: 'url("/myAssets/img/Research Center/Fellows/FellowsCover.png")' }}>
          <div className = "container">
            <div className = "row">
              <div className = "col-md-8 ml-auto mr-auto text-center">
                <h1 className = "title">i3 Research Fellow</h1>
              </div>
            </div>
          </div>
        </div>
        <div className = "main main-raised">
          <div className = "container">
            <div className = "projects-4" id="projects-4">
              <div className = "container">
                <div className = "row">
                  <div className = "col-md-8 ml-auto mr-auto text-center">
                    <h2 className = "title">{name}</h2>
                    <img className = "img-raised rounded img-fluid fellow-img-lg" src={imgURL} alt="osta" />
                    <h5 className = "description">{body}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default FellowsPageTemplate