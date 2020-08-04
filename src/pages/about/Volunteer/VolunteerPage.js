import React from 'react'
import Layout from './../../../components/layout'
import '../../../../static/myAssets/stylesheets/navbar.css'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Volunteers from './../../../components/Volunteers'

class VolunteerPage extends React.Component {
    render() {

        const { data } = this.props
        const { edges } = data.allMarkdownRemark

        // getting frontmatters of every edges
        const volunteers = edges.map(edge => {
            return edge.node.frontmatter
        })

        return (
            <Layout>
                <>
                    <div className = "page-header header-filter header-small" data-parallax = "true"
                        style = {{ backgroundImage: `url('/myAssets/img/events/AndalusiOstaRasoul.jpg')` }}>
                        <div className = "container">
                            <div className = "row">
                                <div className = "col-md-8 ml-auto mr-auto text-center">
                                    <h1 className = "title"> Volunteer With i3 </h1>
                                    <h4> Get involved with i3 </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* // <!--Main Page starts here--> */}
                    <div className = "main main-raised">
                        <div className = "container">
                            <div className = "section section-text">
                                <div className = "container">
                                    {/* Volunteer page secondary title here */}
                                    <div className = "row">
                                        <div className = "col-md-8 ml-auto mr-auto text-center">
                                            <h2 className = "title"> Open Positions </h2>
                                            <img src="/myAssets/img/volunteer-poster.jpg" style = {{ width: '50%' }} alt = "" />
                                        </div>
                                    </div>
                                    {/* Volunteer positions begin here */}
                                    <Volunteers volunteers = {volunteers} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </Layout>
        )
    }
}

VolunteerPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query = {graphql`
      query VolunteerQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "volunteerTemplate" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
          
              frontmatter {
                slug
                templateKey
                jobTitle
                jobTeam
                description
                duties
                qualifications
                
              }
            }
          }
        }
      }
     `}
        render = {(data, count) => <VolunteerPage data = {data} count = {count} />}
    />
)