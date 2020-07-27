import React from 'react'
import PropTypes from 'prop-types'
import Location from '../../components/Location'

const LocationsPagePreview = ({ entry, getAsset }) => {
  // const location = {
  //   name:entry.getIn(['data', 'name']),
  //   address: entry.getIn(['data', 'address']),
  //   timing:entry.getIn(['data', 'timing']),
  //   featuredimage: getAsset(entry.getIn(['data', 'featuredimage']))
  // }
  
  return(
    <Location
      name={entry.getIn(['data', 'name'])}
      address={entry.getIn(['data', 'address'])}
      timing={entry.getIn(['data', 'timing'])}
      featuredimage={getAsset(entry.getIn(['data', 'featuredimage']))}
  
    />

  )
}


LocationsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default LocationsPagePreview
