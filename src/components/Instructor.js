import React from "react";

const Instructor = ({ imgURL, name, description, descriptionMore }) => (
    <>
        <div className="row">
            <div className="col-md-5 ml-auto">
                <br />
                <img src={imgURL} alt={name} className="img-raised rounded img-fluid" />
                <h3 className="info-title text-center">{name}</h3>
            </div>
            <div className="col-md-5 mr-auto">
                <div className="info info-horizontal">
                    <div className="description">
                        <h4 className="info-title"> </h4>
                        <p>{description}</p>
                    </div>
                </div>
                {descriptionMore &&
                    <div className="info info-horizontal">
                        <div className="description">
                            <h4 className="info-title"> </h4>
                            <p>{descriptionMore}</p>
                        </div>
                    </div>}
            </div>
        </div>
        <hr />
    </>

);

export default Instructor;
