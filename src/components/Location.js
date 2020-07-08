import React from 'react';
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

class Location extends React.Component {
    render() {
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark
        return (
            <div className="row">
                {posts &&
                    posts.map(({ node: post }) => (
                        <>
                            <div className="card card-profile card-plain">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="card-header card-header-image">
                                            <img src={post.frontmatter.featuredimage} alt={post.frontmatter.address} className="img location-logo" />
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="card-body">
                                            <h4 className="card-title">{post.frontmatter.address}</h4>
                                            <h6 className="card-category text-muted">{post.frontmatter.instructorname}</h6>
                                            <p className="card-description">{post.frontmatter.timing}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
            </div>
        )
    }
}
Location.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
      query={graphql`
        query LocationQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "locationTemplate" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                
                frontmatter {
                slug
                  templateKey
                  address
                  featuredimage
                  instructorname
                  timing
                  
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <Location data={data} count={count} />}
    />
  )
