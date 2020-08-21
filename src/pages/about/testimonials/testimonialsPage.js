import React, { Component } from 'react'
import Layout from '../../../components/layout'
import Testimonials from '../../../components/Testimonials'
import { testimonials } from '../../../data/testimonials'
import SlideTestimonial from '../../../components/SlideTestimonial'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

class TestimonialsPage extends Component {
    constructor(props) {
        super(props)
        const { data } = this.props
        const { edges } = data.allMarkdownRemark
        console.log('edges')
        console.log(edges)
        // getting frontmatters of every edges
        const carousel = edges.map(edge => {
            return edge.node.frontmatter
        })
        console.log('carousel000')
        console.log(carousel)
        this.state = {
            activeIndex: 0,
            carousel: carousel
        }

    }

    gotoPrev = () => {
        let index = this.state.activeIndex
        let finalIdx = this.state.carousel.length - 1

        if (index === 0) {
            this.setState({ activeIndex: finalIdx })
        } else {
            --index;
            this.setState({ activeIndex: index })
        }
    }

    gotoNext = () => {
        let index = this.state.activeIndex
        let finalIdx = this.state.carousel.length - 1

        if (index === finalIdx) {
            this.setState({ activeIndex: 0 })
        } else {
            ++index;
            this.setState({ activeIndex: index })
        }
    }

    render() {


        return (
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

                                            {this.state.carousel.map((slide, idx) => <SlideTestimonial {...slide} isActive={idx === this.state.activeIndex} />)}

                                            <a className="carousel-control-prev" role="button" href="#carouselExampleIndicators"
                                                onClick={this.gotoPrev} >
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="sr-only"> Previous </span>
                                            </a>

                                            <a className="carousel-control-next" role="button" href="#carouselExampleIndicators"
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

        )
    }
}

TestimonialsPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
        query CarouselQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "carouselTemplate" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                frontmatter {
                  slug
                  templateKey
                  imgSlider
                  quote
                  author
                  position                  
                }
              }
            }
          }
        }
      `}
        render={(data, count) => <TestimonialsPage data={data} count={count} />}
    />
)
