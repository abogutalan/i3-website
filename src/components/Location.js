import React from 'react';


const Location = ({ name, featuredimage, instructor, timing }) => (
    <>
      <div className = "col-md-6">

<<<<<<< HEAD
        <div className = "card card-profile card-plain">
          <div className = "row">
            <div className = "col-md-5">
              <div className = "card-header card-header-image">
                <img src={featuredimage} alt={address} className = "img location-logo" />
              </div>
            </div>
            <div className = "col-md-7">
              <div className = "card-body">
                <h4 className = "card-title">{address}</h4>
                <h6 className = "card-category text-muted">INSTRUCTOR: {name}</h6>
                <p className = "card-description">TIMING: {timing}</p>
=======
        <div className="card card-profile card-plain">
          <div className="row">
            <div className="col-md-5">
              <div className="card-header card-header-image">
                <img src={featuredimage} alt={name} className="img location-logo" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <h6 className="card-category text-muted">INSTRUCTOR: {instructor}</h6>
                <p className="card-description">TIMING: {timing}</p>
>>>>>>> 804bc4de5f435d07c03bc10e534752b33b3b42b7

              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )

export default Location