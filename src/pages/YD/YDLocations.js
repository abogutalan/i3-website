import React from 'react'
import Layout from '../../components/layout';
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import LocationsPageTemplate from '../../components/LocationsPageTemplate';

class YDLocationsPage extends React.Component {

  render() {

    const { data } = this.props
    const { edges } = data.allMarkdownRemark

    // getting frontmatters of every edges
    const locations = edges.map(edge => {
      return edge.node.frontmatter
    })

    return (
      <Layout>
        <LocationsPageTemplate locations={locations} />
      </Layout>

    );
  }

}
YDLocationsPage.propTypes = {
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
                    name
                    timing
                    
                  }
                }
              }
            }
          }
        `}
    render={(data, count) => <YDLocationsPage data={data} count={count} />}
  />
)
