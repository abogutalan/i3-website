import React from 'react';
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../../components/layout';
import FellowsPageTemplate from '../../components/FellowsPageTemplate';

class FellowPage extends React.Component {

  render() {

    const { data } = this.props
    const { edges } = data.allMarkdownRemark

    // getting frontmatters of every edges
    const fellows = edges.map(edge => {
      return edge.node.frontmatter
    })

    return (
      <Layout>

        <FellowsPageTemplate fellows={fellows} />

      </Layout>
    );
  }
}

FellowPage.propTypes = {
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
    render={(data, count) => <FellowPage data={data} count={count} />}
  />
)