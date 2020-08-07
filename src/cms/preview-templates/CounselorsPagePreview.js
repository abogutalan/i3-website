import React from 'react'
import PropTypes from 'prop-types'
import CounselorsPageTemplate from '../../components/CounselorsPageTemplate'

const CounselorsPagePreview = ({ entry, getAsset }) => {

  const counselors = [{
    name: entry.getIn(['data', 'name']),
    title: entry.getIn(['data', 'title']),
    imgURL: getAsset(entry.getIn(['data', 'imgURL'])),
    education: entry.getIn(['data', 'education']),
    otherInterests: entry.getIn(['data', 'otherInterests']),
    link: entry.getIn(['data', 'link']),
    linkDisplay: entry.getIn(['data', 'linkDisplay']),
    instructions: entry.getIn(['data', 'instructions']),
    booklink: entry.getIn(['data', 'booklink']),
    gender: entry.getIn(['data', 'gender']),
  }]
  return (
    <CounselorsPageTemplate counselors={counselors} />
  )
}

CounselorsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default CounselorsPagePreview
