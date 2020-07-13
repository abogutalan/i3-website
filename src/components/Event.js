import React from 'react';

import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
 
class Event extends React.Component {
    render() {
        const {data} = this.props
        const { edges:posts} = data.allMarkdownRemark 
        return (
        <div className="row">
            {posts && posts.map (({node:post}) => (
            <>
            <div className="col-md-5 ml-auto">
                <br />
                <img src={post.frontmatter.imgURL} alt={post.frontmatter.name} className="img-raised rounded img-fluid" />
                <h3 className="info-title text-center">{post.frontmatter.name}</h3>
            </div>
            <div className="col-md-5 mr-auto">
                <div className="info info-horizontal">
                    <div className="description">
                        <h4 className="info-title"> Location </h4>
                        <p> {post.frontmatter.location} </p>
                    </div>
                </div>
                <div className="info info-horizontal">
                    <div className="description">
                        <h4 className="info-title"> Date & Time </h4>
                        <p> {post.frontmatter.DT} </p>
                    </div>
                </div>
                <div className="info info-horizontal">
                    <div className="description">
                        <h4 className="info-title"> Details </h4>
                        <p> {post.frontmatter.description} </p>
                    </div>
                </div>
            </div>
            </>
            ))}
        </div>
        )
    }    
}

Event.propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  }

  export default () => (
    <StaticQuery
      query={graphql`
        query EventQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "eventTemplate" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                
                frontmatter {
                  slug
                  templateKey
                  imgURL
                  name
                  location
                  DT
                  description                  
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <Event data={data} count={count} />}
    />
  )


