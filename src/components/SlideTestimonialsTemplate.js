import React from 'react';
import SlideTestimonial from './SlideTestimonial';
// import PropTypes from 'prop-types'

const SlideTestimonialsTemplate = ({ slidetestimonials, activeIndex }) => {

    console.log("slidetestimonials")
    console.log(slidetestimonials)

    return (

        <>
            <div className="testimonials-2 section-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="carouselExampleIndicatorss" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    {/* slidetestimonials begin here */}

                                    {slidetestimonials.map((slide, idx) => <SlideTestimonial {...slide} isActive={idx === activeIndex} />)}


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