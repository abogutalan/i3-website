import React from 'react';
import Instructors from './Instructors';

 const InstructorsPageTemplate = ({instructors}) => (
    
      <>
    
        <div className="page-header header-filter header-small" data-parallax="true"
          style={{ backgroundImage: `url('/myAssets/img/i3bg2.jpg')` }}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto text-center">
                <h1 className="title">i3 Instructors</h1>
                <h4>Get to know our Instructors!</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="main main-raised">
          <div className="container">
            <div className="projects-4" id="projects-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 ml-auto mr-auto text-center">
                    <h2 className="title">Instructor Profiles</h2>
                    <h5 className="description">
                      We asked each of our instructors to tell us about themselves.
                      </h5>
                    <div className="section-space"></div>
                  </div>
                </div>
    
                <Instructors instructors={instructors} />
    
              </div>
            </div>
          </div>
        </div>
      </>
    
    ) 

    export default InstructorsPageTemplate