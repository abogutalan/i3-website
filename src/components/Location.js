import React from 'react';

const Location = ({ imgURL, address, instructor_name, timing }) => (
    <>
    <div className="row">
        <div className="card card-profile card-plain">
            <div className="row">
                <div className="col-md-5">
                    <div className="card-header card-header-image">
                        <img src={imgURL} alt={address} className="img location-logo" />                        
                    </div>                    
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h4 className="card-title">{address}</h4>
                        <h6 className="card-category text-muted">{instructor_name}</h6>
                        <p className="card-description">{timing}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
)

export default Location