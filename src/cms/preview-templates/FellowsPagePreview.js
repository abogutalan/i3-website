import React from 'react'
import PropTypes from 'prop-types'
import FellowsPageTemplate from '../../components/FellowsPageTemplate'


const FellowsPagePreview = ({ entry, getAsset, widgetFor }) => {

<<<<<<< HEAD
  const fellows = [{
    name:entry.getIn(['data', 'name']),
    title:entry.getIn(['data', 'title']),
    description:entry.getIn(['data', 'description']),
    descriptionMore:widgetFor('body'),                 
    imgURL:getAsset(entry.getIn(['data', 'imgURL'])),
    facebook_url:entry.getIn(['data', 'facebook_url']),
    twitter_url:entry.getIn(['data', 'twitter_url']),
    instagram_url:entry.getIn(['data', 'instagram_url']),
    youtube_url:entry.getIn(['data', 'youtube_url']),
    google_url:entry.getIn(['data', 'google_url']),
    linkedin_url:entry.getIn(['data', 'linkedin_url']),

  }]
  
  return(

  <FellowsPageTemplate fellows={fellows} />

)}
=======

  return (
    <FellowsPageTemplate
      name={entry.getIn(['data', 'name'])}
      body={widgetFor('body')}
      imgURL={getAsset(entry.getIn(['data', 'imgURL']))}
    />


  )
}
>>>>>>> c2a3352af71b1774f346ecd3f452d257930596d2

FellowsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default FellowsPagePreview
