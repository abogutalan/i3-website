import React from 'react'
import Locations from '../../components/Locations';
import Layout from '../../components/layout';
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

class YDLocationsPage extends React.Component {

  render() {

    const { data } = this.props
    const { edges } = data.allMarkdownRemark

    // getting frontmatters of every edges
    const locations = edges.map(edge => {
      return edge.node.frontmatter
    })

    return (
      <>
        <Layout>
          <div className="team-5 section-image" style={{ backgroundImage: `url('/myAssets/img/TorontoBG.jpg')` }}>
            <div className="container">
              <div className="row">
                <div className="col-md-8 ml-auto mr-auto text-center">
                  <h2 className="title">YD Locations</h2>
                  <h5 className="description">
                    Sign up and attend a className in any one of our offered locations around the GTA, and beyond!
                    </h5>
                </div>
              </div>

              <div className="row">
                {/* Profiles begin here */}
                <Locations locations={locations} />
              </div>

            </div>
          </div>
        </Layout>
      </>

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
