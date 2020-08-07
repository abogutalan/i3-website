import React from 'react';
import Layout from '../../components/layout';

import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import EventsPageTemplate from '../../components/EventsPageTemplate';

class EventsPage extends React.Component {
  render() {

    const { data } = this.props
    const { edges } = data.allMarkdownRemark

    // seperating current events and past events
    let currentevents = [];
    let pastevents = [];
    edges.forEach((edge) => {
      if (edge.node.frontmatter.isCurrentEvent) {
        currentevents.push(edge.node.frontmatter)
      } else {
        pastevents.push(edge.node.frontmatter)
      }

    })

    return (
      <Layout>
        <EventsPageTemplate
          currentevents={currentevents}
          pastevents={pastevents}
        />
      </Layout>
    );
  }
}

EventsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query EventQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "eventTemplate" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                
                frontmatter {
                  templateKey
                  imgURL
                  name
                  location
                  DT
                  description   
                  isCurrentEvent               
                }
              }
            }
          }
        }
      `}
    render={(data, count) => <EventsPage data={data} count={count} />}
  />
)
