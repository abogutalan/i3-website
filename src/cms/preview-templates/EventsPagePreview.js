import React from 'react'
import PropTypes from 'prop-types'
import Event from '../../components/Event'

const EventsPagePreview = ({ entry, getAsset }) => (
  <Event
    name={entry.getIn(['data', 'name'])}
    location={entry.getIn(['data', 'location'])}
    DT={entry.getIn(['data', 'DT'])}
    isCurrentEvent={entry.getIn(['data', 'isCurrentEvent'])}
    imgURL={getAsset(entry.getIn(['data', 'imgURL']))}

  />
)

EventsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default EventsPagePreview
