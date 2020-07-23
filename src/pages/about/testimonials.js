import React from 'react'
import Layout from '../../components/layout'
import Testimonials from '../../components/Testimonials'
import { testimonials } from '../../data/testimonials'
import SlideTestimonials from '../../components/SlideTestimonials'
import { slidetestimonials } from '../../data/slidetestimonials'

function TestimonialsPage () {
  return (
    <>
      <Layout>
        <div className = "testimonials-1 section-image" style = {{ backgroundImage: `url('/myAssets/img/testimonialsbg.jpg')` }} >
          <div className = "container">
            <div className = "row">
                <div className = "col-md-6 ml-auto mr-auto text-center">
                    <h2 className = "title">Our Students Love Us</h2>
                    <h5 className = "description">
                        Here's what our students have to say about us...
                    </h5>
                </div>
            </div>
            <div className = "row">
              {/* testimonials begin here */}
              <Testimonials testimonials = { testimonials } />
            </div>
          </div>
        </div>
        <div className="testimonials-2 section-dark">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div id="carouselExampleIndicatorss" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner"></div>
                          {/* slidetestimonials begin here */}
                          <SlideTestimonials slidetestimonials = { slidetestimonials } /> 
                        </div>
                    </div>
                </div>
            </div>
        </div> 
      </Layout>
    </>
  )
}

export default TestimonialsPage 