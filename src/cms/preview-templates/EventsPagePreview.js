import React from 'react'
import PropTypes from 'prop-types'
import EventsPageTemplate from '../../components/EventsPageTemplate'

const EventsPagePreview = ({ entry, getAsset }) => {

  let currentevents;
  let pastevents;
  const event = {
    name: entry.getIn(['data', 'name']),
    location: entry.getIn(['data', 'location']),
    DT: entry.getIn(['data', 'DT']),
    isCurrentEvent: entry.getIn(['data', 'isCurrentEvent']),
    imgURL: getAsset(entry.getIn(['data', 'imgURL'])),
  }

  if (entry.getIn(['data', 'isCurrentEvent'])) {
    currentevents = [event]
    pastevents = []
  }
  else {
    pastevents = [event]
    currentevents = []
  }
  return (

    <EventsPageTemplate
      currentevents={currentevents}
      pastevents={pastevents} />
  )
}
EventsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default EventsPagePreview
