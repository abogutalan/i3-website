import React from 'react';
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/layout';
import InstructorsPageTemplate from '../components/InstructorsPageTemplate';

class YDInstructorsPage extends React.Component {
  render() {

    const { data } = this.props
    const { edges } = data.allMarkdownRemark

    // getting frontmatters of every edges
    const instructors = edges.map(edge => {
      return edge.node.frontmatter
    })
    
    return (
      <Layout>
        <InstructorsPageTemplate instructors={instructors} />
      </Layout>
    );
  }

}


YDInstructorsPage.propTypes = {
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
                rank
                
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <YDInstructorsPage data={data} count={count} />}
  />
)
