import React from 'react';
import Instructors from '../components/Instructors';
import Layout from '../components/layout';
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

//import { instructors } from '../../../data/instructors';
//const instructors = [ { } ]   // instead of importing data/instructors

// InstructorsPage

class YDInstructorsPage extends React.Component {
  render() {
    
    const { data } = this.props
    const { edges } = data.allMarkdownRemark 

    const instructors = edges.map(edge => {
      return edge.node.frontmatter
    })  

    console.log("DATA: ")
    console.log(data)
    console.log("INSTRUCTORS: ")
    console.log(instructors)
    return(
     
      <Layout>
         
    <>
      <div className="page-header header-filter header-small" data-parallax="true"
        style={{ backgroundImage: `url('/myAssets/img/instructors/i3bg2.jpg')` }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto text-center">
              <h1 className="title">i3 Instructors</h1>
              <h4>Get to know our Instructors!</h4>
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
                  <h2 className="title">Instructor Profiles</h2>
                  <h5 className="description">
                    We asked each of our instructors to tell us about themselves.
                  </h5>
                  <div className="section-space"></div>
                </div>
              </div>
              {/* Profiles begin here */}
              {/* {posts &&
               posts.map(({ node: {frontmatter} }) => ( */}

                  <Instructors instructors={instructors}/>
                {/* ))}  */}

              </div>
          </div>
        </div>
      </div>
      </>
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
                
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <YDInstructorsPage data={data} count={count} />}
  />
)
