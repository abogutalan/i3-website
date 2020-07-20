import React from 'react';
import Fellows from '../../../components/Fellows';
import Layout from '../../../components/layout';

import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

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
        <>

          <div className="about-us sidebar-collapse">
            <div id="navbarDiv">
            </div>
            <div className="page-header header-filter header-small" data-parallax="true" style={{ backgroundImage: 'url("/myAssets/img/FellowsCover.png")' }}>
              <div className="container">
                <div className="row">
                  <div className="col-md-8 ml-auto mr-auto text-center">
                    <h1 className="title">i3 Research Fellows</h1>
                    <h4>Our Team Of Research Fellows</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="main main-raised">
              <div className="container">
                <div className="projects-4" id="projects-4">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8 ml-auto mr-auto text-center">
                        <h2 className="title">i3 Research Center - Fellows</h2>
                        <h5 className="description">
                          At the i3 Research Center, our team of research fellows will be contributing articles on various topics. Click on their picture to find out more about them.
                  </h5>
                        <div className="section-space" />
                      </div>
                    </div>
                    
                    <div className="row">
                      {/* Profiles begin here */}
                      <Fellows fellows={fellows} />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </>

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