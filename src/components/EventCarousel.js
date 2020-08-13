// import React, { Component } from "react"
// import { graphql, StaticQuery } from "gatsby"


// class EventCarousel extends Component {
//     constructor(props) {
//         const { data } = this.props
//         const { edges } = data.allMarkdownRemark
//         const indexEventCarousel = edges.map(edge => {
//             return edge.node.frontmatter
//         })
//     }

//     // const number = (
//     //     <li data-target="#carouselExampleIndicators" data-slide-to="0" className=""></li>
//     // )

//     render() {
//         return (
//             <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
//                 <ol className="carousel-indicators">
//                     <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//                     {/* 
//                 count = 0;
//                 if (length.indexEventCarousel > 1) {
//                     while (count != length.indexEventCarousel) {
//                         number();
//                         count++;
//                     }
//                 }
              
//                 indexEventCarousel.map((slide, idx) => number())
//                 */}
//                 </ol>
//                 <div className="carousel-inner">
//                     {/* make a loop to keep creating all the items from current events until count===length.indexEventCarousel */}
//                     <div className="carousel-item active">
//                         <div className="page-header header-filter" /* style={{ backgroundImage: { allMarkdownRemark.edges.node.frontmatter.imgURL } }} */>
//                             <div className="container">
//                                 <div className="row">
//                                     <div className="col-md-6 ml-auto mr-auto text-center">
//                                         <h1 className="title"> {allMarkdownRemark.edges.node.frontmatter.name} </h1>
//                                         <br />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//                     <i className="material-icons" keyboard_arrow_left> </i>
//                     <span className="sr-only" Previous> </span>
//                 </a>
//                 <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//                     <i className="material-icons" keyboard_arrow_right> </i>
//                     <span className="sr-only" Next> </span>
//                 </a>
//             </div >
//         )
//     }
// }

// export default EventCarousel = () => (
//     <StaticQuery
//         query={graphql`
//         query eventCarouselQuery {
//             allMarkdownRemark(filter: {frontmatter: {isCurrentEvent: {eq: true}}}) {
//             edges {
//                 node {
//                 frontmatter {
//                     name
//                     imgURL
//                 }
//                 }
//             }
//             }
//         }
//         `}
//     />
// )
