import React from 'react'
import PropTypes from 'prop-types'
import SingleLocation from '../../components/SingleLocation'

const LocationsPagePreview = ({ entry, getAsset }) => {

  const location = {
    instructor: entry.getIn(['data', 'instructor']),
    name: entry.getIn(['data', 'name']),
    timing: entry.getIn(['data', 'timing']),
    featuredimage: getAsset(entry.getIn(['data', 'featuredimage']))
  }
  
  return(
    
    <SingleLocation {...location} />

  )
}


LocationsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default LocationsPagePreview
