import React from 'react'
import PropTypes from 'prop-types'
import Instructor from '../../components/Instructor'

const InstructorsPagePreview = ({ entry, getAsset }) => (
  <Instructor
    name={entry.getIn(['data', 'name'])}
    description={entry.getIn(['data', 'description'])}
    descriptionMore={entry.getIn(['data', 'descriptionMore'])}
    imgURL={getAsset(entry.getAsset(['data', 'imgURL']))}

  />
)

InstructorsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default InstructorsPagePreview
