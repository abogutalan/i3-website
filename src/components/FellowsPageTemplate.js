
import React from 'react';
import Fellows from './Fellows';

const FellowsPageTemplate = ({ fellows }) => (
    <>

        <div className="about-us sidebar-collapse">
            <div id="navbarDiv">
            </div>
            <div className="page-header header-filter header-small" data-parallax="true" style={{ backgroundImage: 'url("/myAssets/img/FellowsCover.png")' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 ml-auto mr-auto text-center">
                            <h1 className="title">i3 Research Fellows</h1>
                            <h4>Our Team Of Research Fellows</h4>
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
                                    <h2 className="title">i3 Research Center - Fellows</h2>
                                    <h5 className="description">
                                        At the i3 Research Center, our team of research fellows will be contributing articles on various topics. Click on their picture to find out more about them.
        </h5>
                                    <div className="section-space" />
                                </div>
                            </div>

                            <div className="row">
                                {/* Profiles begin here */}
                                <Fellows fellows={fellows} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default FellowsPageTemplate