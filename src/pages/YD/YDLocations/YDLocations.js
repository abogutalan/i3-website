import React from 'react'
import Locations from '../../../components/Locations';
import Layout from '../../../components/layout';

//import { locations } from '../../../data/locations';
const locations = [ { } ]   // instead of importing data/locations

function YDLocatons() {
  return (
    <>
    <Layout>
    <div className="team-5 section-image" style={{ backgroundImage: `url('/myAssets/img/TorontoBG.jpg')`}}>
        <div className="container">
            <div className="row">
                <div className="col-md-8 ml-auto mr-auto text-center">
                    <h2 className="title">YD Locations</h2>
                    <h5 className="description">
                        Sign up and attend a className in any one of our offered locations around the GTA, and beyond!
                    </h5>
                </div>
            </div>
            {/* Profiles begin here */}
            <Locations locations={locations}/>
        </div>
    </div>
    </Layout>
    </>

  )
}
  export default YDLocatons