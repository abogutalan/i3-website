import React, { Component } from 'react'
import Layout from '../../components/layout'
import Testimonials from '../../components/Testimonials'
import { testimonials } from '../../data/testimonials'
// import SlideTestimonials from '../../components/SlideTestimonials'
import { slidetestimonials } from '../../data/slidetestimonials'
import SlideTestimonial from '../../components/SlideTestimonial'

class TestimonialsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0
        }
        console.log(this.state)
    }

    gotoSlide(index) {
        this.setState({ activeIndex: index })
    }

    gotoPrev = () => {
        let index = this.state.activeIndex
        let finalIdx = slidetestimonials.length - 1

        if (index === 0) {
            this.setState({ activeIndex: finalIdx })
        } else {
            --index;
            this.setState({ activeIndex: index })
        }
    }

    gotoNext = () => {
        let index = this.state.activeIndex
        let finalIdx = slidetestimonials.length - 1

        if (index === finalIdx) {
            this.setState({ activeIndex: 0 })
        } else {
            ++index;
            this.setState({ activeIndex: index })
        }
    }

    render() {
        return (
            <>
                <Layout>
                    <div className="landing-page sidebar-collapse" >
                        <div className="testimonials-1 section-image" style={{ backgroundImage: `url('/myAssets/img/testimonialsbg.jpg')` }} >
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 ml-auto mr-auto text-center">
                                        <h2 className="title">Our Students Love Us</h2>
                                        <h5 className="description">
                                            Here's what our students have to say about us...
                                        </h5>
                                    </div>
                                </div>
                                <div className="row">
                                    {/* testimonials begin here */}
                                    <Testimonials testimonials={testimonials} />
                                </div>
                            </div>
                        </div>
                        <div className="testimonials-2 section-dark">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div id="carouselExampleIndicatorss" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner">
                                                {/* slidetestimonials begin here */}

                                                {slidetestimonials.map((slide, idx) => <SlideTestimonial {...slide} isActive={idx === this.state.activeIndex}
                                                />)}

                                                <a className="carousel-control-prev" role="button"
                                                    onClick={this.gotoPrev} >
                                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span className="sr-only"> Previous </span>
                                                </a>

                                                <a className="carousel-control-next" role="button"
                                                    onClick={this.gotoNext} >
                                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </>
        )
    }
}

export default TestimonialsPage 