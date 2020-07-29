import React from 'react'
import PropTypes from 'prop-types'
import Fellow from '../../components/Fellow'

const FellowsPagePreview = ({ entry, getAsset, widgetFor }) => (
  <Fellow
    name={entry.getIn(['data', 'name'])}
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    descriptionMore={widgetFor('body')}
    imgURL={getAsset(entry.getIn(['data', 'imgURL']))}
    facebook_url={entry.getIn(['data', 'facebook_url'])}
    twitter_url={entry.getIn(['data', 'twitter_url'])}
    instagram_url={entry.getIn(['data', 'instagram_url'])}
    youtube_url={entry.getIn(['data', 'youtube_url'])}
    google_url={entry.getIn(['data', 'google_url'])}
    linkedin_url={entry.getIn(['data', 'linkedin_url'])}

  />
)

FellowsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default FellowsPagePreview
