
import React from 'react';
import Locations from './Locations';

const LocationsPageTemplate = ({ locations }) => (

  <div className="landing-page sidebar-collapse">
    <div className="team-5 section-image" style={{ backgroundImage: `url('/myAssets/img/TorontoBG.jpg')` }}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 ml-auto mr-auto text-center">
            <h2 className="title">YD Locations</h2>
            <h5 className="description">
              Sign up and attend a className in any one of our offered locations around the GTA, and beyond!
                    </h5>
          </div>
        </div>

        <div className="row">
          {/* Profiles begin here */}
          <Locations locations={locations} />
        </div>

      </div>
    </div>
  </div>
)

export default LocationsPageTemplate
