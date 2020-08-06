import React from 'react'
import PropTypes from 'prop-types'
import Volunteer from '../../components/Volunteer'

const VolunteersPagePreview = ({ entry, widgetFor }) => (
  <Volunteer
    jobTitle = {entry.getIn(['data', 'jobTitle'])}
    jobTeam = {entry.getIn(['data', 'jobTeam'])}
    description = {entry.getIn(['data', 'description'])}
    duties = {widgetFor('duties')}
    qualifications = {widgetFor('qualifications')}
  />
)

VolunteersPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func
}

export default VolunteersPagePreview
