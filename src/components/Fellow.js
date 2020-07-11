import React from "react";

import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

class Fellow extends React.Component {
    render() {
      const { data } = this.props
      const { edges: posts } = data.allMarkdownRemark
      return(
        <div className="row">
          {posts &&
          posts.map(({ node: post }) => (
              <>
        <div className="col-md-6">
          <div className="card card-profile card-plain">
            <div className="row">
              <div className="col-md-5">
                <div className="card-header card-header-image">
                  <a id='link' href={post.frontmatter.slug + post.frontmatter.name}>
                    <img className="img" alt="alt value" src={post.frontmatter.imgURL} />
                  </a>
                  <div className="colored-shadow" style={{backgroundImage: 'url("/assets/img/faces/card-profile1-square.jpg")', opacity: 1}}>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h4 className="card-title">{post.frontmatter.name}</h4>
                  <h6 className="card-category text-muted">{post.frontmatter.title}</h6>
                  <p className="card-description">{post.frontmatter.description}</p>
                </div>
                <div className="card-footer">
                { post.frontmatter.facebook_url ? <a href={post.frontmatter.facebook_url} 
                  className="btn btn-just-icon btn-link btn-facebook"><i className="fa fa-facebook-square" /> 
                  </a> : null}

                  { post.frontmatter.twitter_url ? <a href={post.frontmatter.twitter_url} 
                  className="btn btn-just-icon btn-link btn-twitter"><i className="fa fa-twitter" /> 
                  </a> : null}
                  { post.frontmatter.linkedin_url ? <a href={post.frontmatter.linkedin_url} 
                  className="btn btn-just-icon btn-link btn-linkedin"><i className="fa fa-linkedin" /> 
                  </a> : null}
                </div>
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
Fellow.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default () => (
  <StaticQuery
    query={graphql`
      query FellowQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "fellowTemplate" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              
              frontmatter {
              slug
                templateKey
                name
                title
                description
                imgURL
                facebook_url
                twitter_url
                instagram_url
                youtube_url
                google_url
                linkedin_url
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Fellow data={data} count={count} />}
  />
)