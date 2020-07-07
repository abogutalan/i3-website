import React from "react";
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

class Instructor extends React.Component {
    render() {
      const { data } = this.props
      const { edges: posts } = data.allMarkdownRemark
      return(
        <div className="row">
            {posts &&
          posts.map(({ node: post }) => (
              <div>
            <div className="col-md-5 ml-auto">
                <br />
                <img src={post.frontmatter.imgURL} alt={post.frontmatter.name} className="img-raised rounded img-fluid" />
                <h3 className="info-title text-center">{post.frontmatter.name}</h3>
            </div>
            <div className="col-md-5 mr-auto">
                <div className="info info-horizontal">
                    <div className="description">
                        <h4 className="info-title"> </h4>
                        <p>{post.frontmatter.description}</p>
                    </div>
                </div>
                {post.frontmatter.descriptionMore &&
                    <div className="info info-horizontal">
                        <div className="description">
                            <h4 className="info-title"> </h4>
                            <p>{post.frontmatter.descriptionMore}</p>
                        </div>
                    </div>}
            </div>
            </div>
             ))}
        </div>
       
      )
    }
}


Instructor.propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  }

  export default () => (
    <StaticQuery
      query={graphql`
        query InstructorQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "instructorTemplate" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                
                frontmatter {
                slug
                  templateKey
                  name
                  imgURL
                  description
                  descriptionMore
                  
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <Instructor data={data} count={count} />}
    />
  )


