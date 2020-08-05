import React from 'react'
import PropTypes from 'prop-types'
import FellowsPageTemplate from '../../components/FellowsPageTemplate'


const FellowsPagePreview = ({ entry, getAsset, widgetFor }) => {


  return (
    <FellowsPageTemplate
      name={entry.getIn(['data', 'name'])}
      body={widgetFor('body')}
      imgURL={getAsset(entry.getIn(['data', 'imgURL']))}
    />


  )
}

FellowsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default FellowsPagePreview
