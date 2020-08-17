import React from 'react'
import PropTypes from 'prop-types'
// import SlideTestimonial from '../../components/SlideTestimonial'
// import SlideTestimonialsTemplate from '../../components/SlideTestimonialsTemplate'

const SlideTestimonialsPreview = ({ entry, getAsset }) => {

  const slidetestimonials = [{
    author: entry.getIn(['data', 'author']),
    imgSlider: getAsset(entry.getIn(['data', 'imgSlider'])).path,
    position: entry.getIn(['data', 'position']),
    quote: entry.getIn(['data', 'quote']),
  }]
  console.log('slidetestimonials in Preview')
  console.log(slidetestimonials)
  return (
    // <SlideTestimonialsTemplate slidetestimonials={slidetestimonials}  />
    // <SlideTestimonial
    //   author={entry.getIn(['data', 'author'])}
    //   imgSlider={getAsset(entry.getIn(['data', 'imgSlider'])).path}
    //   position={entry.getIn(['data', 'position'])}
    //   quote={entry.getIn(['data', 'quote'])}
    // />
    <></>
  )
}


SlideTestimonialsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default SlideTestimonialsPreview
