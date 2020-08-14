import React from 'react'
import PropTypes from 'prop-types'
import VolunteersPageTemplate from '../../components/VolunteersPageTemplate'

const VolunteersPagePreview = ({ entry, widgetFor }) => {

  const volunteers= [{
    jobTitle: entry.getIn(['data', 'jobTitle']),
    jobTeam: entry.getIn(['data', 'jobTeam']),
    description: entry.getIn(['data', 'description']),
    duties: widgetFor('duties'),
    qualifications: widgetFor('qualifications'),
  }]

  console.log("VolunteersPagePreview")
  console.log(volunteers)
  return(

    <VolunteersPageTemplate volunteers={volunteers} />
    
  )
}


VolunteersPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func
}

export default VolunteersPagePreview
