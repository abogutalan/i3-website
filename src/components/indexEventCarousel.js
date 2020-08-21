import React, { Component } from "react"
import ItemIndexEvent from "./itemIndexEvent"
import { graphql, StaticQuery } from "gatsby"
import PropTypes from 'prop-types'

class IndexEventCarousel extends Component {
    constructor(props) {
        super(props)
        const { data } = this.props
        const { edges } = data.allMarkdownRemark
        console.log(edges)
        // getting frontmatters of every edges
        const carousel = edges.map(edge => {
            return edge.node.frontmatter
        })
        console.log(carousel)
        this.state = {
            activeIndex: 0,
            carousel: carousel
        }
        console.log("carousel::")
        console.log(carousel)
        console.log(this.state)
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
        let index = this.state.activeIndex;
        let finalIdx = this.state.carousel.length - 1;

        if (index === finalIdx) {
            this.setState({ activeIndex: 0 })
        } else {
            ++index;
            this.setState({ activeIndex: index })
        }
    }

    render() {
        return (
            <div className="landing-page sidebar-collapse" >
                <div className="testimonials-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="carouselExampleIndicatorss" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        {this.state.carousel.map((event, idx) => <ItemIndexEvent {...event} isActive={idx === this.state.activeIndex} />)}

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


        )
    }
}

IndexEventCarousel.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
        query eventCarouselQuery {
          allMarkdownRemark(
            filter: { frontmatter: {isCurrentEvent: {eq: true}}}) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                frontmatter {
                  name
                  imgURL                  
                }
              }
            }
          }
        }
      `}
        render={(data, count) => <IndexEventCarousel data={data} count={count} />}
    />
)