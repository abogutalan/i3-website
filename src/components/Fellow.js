import React from "react";

const Fellow = ({ name, title, description, URL }) => (
    <>
        <div className="row">
        <div className="col-md-6">
          <div className="card card-profile card-plain">
            <div className="row">
              <div className="col-md-5">
                <div className="card-header card-header-image">
                  <a href="./fellows/osta.html">
                    <img className="img" alt="alt value" src="../../public/myAssets/img/ShOstaMain2.jpg" />
                  </a>
                  <div className="colored-shadow" style={{backgroundImage: 'url("../../public/assets/img/faces/card-profile1-square.jpg")', opacity: 1}}>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h4 className="card-title">{name}</h4>
                  <h6 className="card-category text-muted">{title}</h6>
                  <p className="card-description">{description}</p>
                </div>
                <div className="card-footer">
                  <a href={URL} className="btn btn-just-icon btn-link btn-facebook"><i className="fa fa-facebook-square" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

);

export default Fellow;