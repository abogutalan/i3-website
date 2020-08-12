// 38 - 85 of events.html

import React from 'react';

const SingleLocation = ({ instructor, name, timing, featuredimage }) => {
    
    return (
        <>
            <div className="main main-raised">
                <div className="container">
                    <div className="projects-4" id="projects-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 ml-auto mr-auto text-center">
                                    <h2 className="title">YD Locations</h2>
                                    <h5 className="description">
                                        Sign up and attend a className in any one of our offered locations around the GTA, and beyond!
              </h5>
                                    <div className="section-space" />
                                </div>
                            </div>
                            {/* Location begin here */}
                            <div className="row">
                                <div className="col-md-5 ml-auto">
                                    <br />
                                    <img src={featuredimage} alt="Raised" className="img-raised rounded img-fluid" />
                                </div>
                                <div className="col-md-5 mr-auto">
                                    <div className="info info-horizontal">
                                        <div className="description">
                                            <h4 className="info-title">{name}</h4>
                                            <h6 className="card-category text-muted">INSTRUCTOR: {instructor}</h6>
                                            <p className="card-description">TIMING: {timing}</p>
                                        </div>
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
export default SingleLocation
