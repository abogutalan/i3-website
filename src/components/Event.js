import React from 'react';
 
const Event = ({ imgURL, name, location, DT, description}) => (
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
                        <h4 className="info-title"> Location </h4>
                        <p> {location} </p>
                    </div>
                </div>
                <div className="info info-horizontal">
                    <div className="description">
                        <h4 className="info-title"> Date & Time </h4>
                        <p> {DT} </p>
                    </div>
                </div>
                <div className="info info-horizontal">
                    <div className="description">
                        <h4 className="info-title"> Details </h4>
                        <p> {description} </p>
                    </div>
                </div>
            </div>
        </div>
        <hr />
    </>
);

export default Event;