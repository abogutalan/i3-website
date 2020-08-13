import React from 'react'
import PropTypes from 'prop-types'
// import SlideTestimonial from '../../components/SlideTestimonial'
// import SlideTestimonialsTemplate from '../../components/SlideTestimonialsTemplate'

const SlideTestimonialsPreview = ({ entry, getAsset }) => {

  // const slidetestimonials = [{
  //   author: entry.getIn(['data', 'author']),
  //   position: entry.getIn(['data', 'position']),
  //   quote: entry.getIn(['data', 'quote']),
  //   imgURL: getAsset(entry.getIn(['data', 'imgURL'])),
  // }]
  
  return(
    <></>
    // <SlideTestimonialsTemplate slidetestimonials={slidetestimonials}  />
  )
}


SlideTestimonialsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default SlideTestimonialsPreview
