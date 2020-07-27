import React from 'react'
import PropTypes from 'prop-types'
import Counselor from '../../components/Counselor'

const CounselorsPagePreview = ({ entry, getAsset }) => (
  <Counselor
    name={entry.getIn(['data', 'name'])}
    title={entry.getIn(['data', 'title'])}
    imgURL={getAsset(entry.getIn(['data', 'imgURL']))}
    education={entry.getIn(['data', 'education'])}
    otherInterests={entry.getIn(['data', 'otherInterests'])}
    link={entry.getIn(['data', 'link'])}    
  />
)

CounselorsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default CounselorsPagePreview
