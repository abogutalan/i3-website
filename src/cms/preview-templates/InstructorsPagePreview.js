import React from 'react'
import PropTypes from 'prop-types'
import InstructorsPageTemplate from '../../components/InstructorsPageTemplate'
// import "../../../static/assets/css/material-kit.css?v=2.1.1"


const InstructorsPagePreview = ({ entry, getAsset }) => {
  const instructors = [{
    name: entry.getIn(['data', 'name']),
    description: entry.getIn(['data', 'description']),
    descriptionMore: entry.getIn(['data', 'descriptionMore']),
    imgURL: getAsset(entry.getIn(['data', 'imgURL'])),
  }]
  return (
    <InstructorsPageTemplate
      instructors={instructors}

    />

  )
}


InstructorsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default InstructorsPagePreview
