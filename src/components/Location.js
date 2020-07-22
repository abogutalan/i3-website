import React from 'react';
import '../../static/myAssets/stylesheets/locations.css'


const Location = ({ address, featuredimage, name, timing }) => (
    <>
      <div className="col-md-6">

        <div className="card card-profile card-plain">
          <div className="row">
            <div className="col-md-5">
              <div className="card-header card-header-image">
                <img src={featuredimage} alt={address} className="img location-logo" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h4 className="card-title">{address}</h4>
                <h6 className="card-category text-muted">INSTRUCTOR: {name}</h6>
                <p className="card-description">TIMING: {timing}</p>

              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )

export default Location