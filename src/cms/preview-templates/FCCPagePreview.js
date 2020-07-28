import React from 'react'
import PropTypes from 'prop-types'
import Counselor from '../../components/Counselor'

const FCCPagePreview = ({ entry, getAsset }) => (
  <Counselor
    name = {entry.getIn(['data', 'name'])}
    title = {entry.getIn(['data', 'title'])}
    imgURL = {getAsset(entry.getIn(['data', 'imgURL']))}
    education = {entry.getIn(['data', 'education'])}
    otherInterests = {entry.getIn(['data', 'otherInterests'])}
    instructions = {entry.getIn(['data', 'instructions'])}
    link = {entry.getIn(['data', 'linK'])}
    booklink = {entry.getIn(['data', 'booklink'])}
    gender = {entry.getIn(['data', 'gender'])}

  />
)

FCCPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default FCCPagePreview
