import React from 'react';
import Layout from '../components/layout'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import CounselorsPageTemplate from '../components/CounselorsPageTemplate';

class FCCPage extends React.Component {
  render() {

    const { data } = this.props
    const { edges } = data.allMarkdownRemark

    // getting frontmatters of every edges
    const counselors = edges.map(edge => {
      return edge.node.frontmatter
    })

    return (
      <Layout>
        <CounselorsPageTemplate counselors = { counselors } />
      </Layout>
    )
  }
}

FCCPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query = {graphql`
    query CounselorQuery {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "counselorTemplate"}}}, 
      sort: {fields: frontmatter___rank, order: ASC}) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            frontmatter {
              slug
              templateKey
              name
              title
              imgURL
              education
              otherInterests
              instructions
              link
              linkDisplay
              booklink
              gender
              rank
            }
          }
        }
      }
    }
    
     `}
    render={(data, count) => <FCCPage data={data} count={count} />}
  />
)