import React from 'react';
import Events from '../components/Events';
import Layout from '../components/layout';

import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

// import { events } from '../../data/events';
const events = [ { } ] 
// const pastevents = [ { } ]

class EventsPage extends React.Component {
  render() {
    
    const { data } = this.props
    const { edges } = data.allMarkdownRemark 

    const events = edges.map(edge => {
      return edge.node.frontmatter
    })  

    console.log("DATA: ")
    console.log(data)
    console.log("EVENTS: ") 
    console.log(events)

    

    var currentevents=[ { } ];
    var pastevents=[ { } ];
    edges.map((edge) => { 
      console.log("IS Current Event:")
      console.log(edge.node.frontmatter.isCurrentEvent)
      if (edge.node.frontmatter.isCurrentEvent) {       
        currentevents.concat(edge.node.frontmatter) 
        console.log("Current Event:")
        console.log(currentevents)
      } else {
        pastevents.concat(edge.node.frontmatter)
        console.log("Past Event:")
        console.log(pastevents)
      }
    })

    return(
      <>
      <Layout>
                <div className="page-header header-filter header-small" data-parallax="true"
                    style={{ backgroundImage: `url('/myAssets/img/events/AndalusiOstaRasoul.jpg')` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 ml-auto mr-auto text-center">
                                <h1 className="title">i3 Events</h1>
                                <h4>See what events are happening soon and come join us!</h4>
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
                                        <h2 className="title">Upcoming Events</h2>
                                        <h5 className="description">
                                            Stay connected with us. Here are our upcoming events:
                                        </h5>
                                        <div className="section-space"></div>
                                    </div>
                                </div>
                                {/* CurrentEvents begin here */}
                                <Events events={events} />
                                <hr />
                                <div className="section-space"></div>
                                    <div className="row">
                                        <div className="col-md-8 ml-auto mr-auto text-center">
                                            <h2 className="title">Past Events</h2>
                                            <h5 className="description">
                                            Stay connected with us. Here are some of our past events:
                                            </h5>
                                        <div className="section-space"></div>
                                    </div>
                                </div>
                                {/* PastEvents begin here */}
                                <Events events = {events} />
                            </div>
                        </div>
                    </div>
                </div>
                
            </Layout>
            </> 
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
                  slug
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
