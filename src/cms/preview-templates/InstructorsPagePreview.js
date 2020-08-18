import React from 'react'
import PropTypes from 'prop-types'
import InstructorsPageTemplate from '../../components/InstructorsPageTemplate'


const InstructorsPagePreview = ({ entry, getAsset }) => {
  
  const instructors = [{
    name: entry.getIn(['data', 'name']),
    description: entry.getIn(['data', 'description']),
    descriptionMore: entry.getIn(['data', 'descriptionMore']),
    imgURL: getAsset(entry.getIn(['data', 'imgURL'])),
    rank:entry.getIn(['data', 'rank'])
  }]
  console.log('instructors')
  console.log(instructors)
  return (

    <InstructorsPageTemplate instructors={instructors} />
  )
}


InstructorsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default InstructorsPagePreview
