import React from 'react';
import SlideTestimonial from './SlideTestimonial';
// import PropTypes from 'prop-types'

const SlideTestimonialsTemplate = ({ slidetestimonials, activeIndex, gotoPrev, gotoNext }) => {

    console.log("slidetestimonials")
    console.log(slidetestimonials)

    return(

    <>
        <div className="testimonials-2 section-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="carouselExampleIndicatorss" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                {/* slidetestimonials begin here */}

                                {slidetestimonials.map((slide, idx) => <SlideTestimonial {...slide} isActive={idx === activeIndex} />)}

                                <a className="carousel-control-prev" role="button" href="/#"
                                    onClick={gotoPrev} >
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only"> Previous </span>
                                </a>

                                <a className="carousel-control-next" role="button" href="/#"
                                    onClick={gotoNext} >
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

)
}


export default SlideTestimonialsTemplate