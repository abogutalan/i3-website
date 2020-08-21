import React from 'react'
import Layout from '../components/layout'
// import '../../../../static/myAssets/stylesheets/navbar.css'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import VolunteersPageTemplate from '../components/VolunteersPageTemplate'

class VolunteerPage extends React.Component {
    render() {

        const { data } = this.props
        const { edges } = data.allMarkdownRemark

        // getting frontmatters of every edges
        const volunteers = edges.map(edge => {
            return edge.node.frontmatter
        })
            console.log("volunteers")
            console.log(volunteers)
        return (
            <Layout>
                <VolunteersPageTemplate volunteers={volunteers} />
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