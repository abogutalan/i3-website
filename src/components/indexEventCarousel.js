// import React, { Component } from "react"
// import { graphql, StaticQuery } from "gatsby"


// class IndexEventCarousel extends Component {
//     constructor(props) {
//         super(props)
//         const { data } = this.props
//         const { edges } = data.allMarkdownRemark
       
//     }

//     render() {
//         const eventCarousel = edges.map((edge, idx) => {
//             <div className={"carousel-item " + (idx === 0 ? "active" : "")}>
//                 <div className="page-header header-filter" style={{ backgroundImage: edge.node.frontmatter.name }}>
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-md-6 ml-auto mr-auto text-center">
//                                 <h1 className="title"> {edge.node.frontmatter.name} </h1>
//                                 <br />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         })
//         const slides = edges.map((idx) =>
//             (idx === 0 ? <li data-target="#carouselExampleIndicators" data-slide-to={idx} className="active"></li> :
//                 <li data-target="#carouselExampleIndicators" data-slide-to={idx} className=""></li>)

//         )
//         return (
//             <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
//                 <ol className="carousel-indicators">
//                     {/* {
//                     count = 0;
//                     if (length.data > 1) {
//                         while (count != length.data) {
//                             number();
//                             count++;
//                         }
//                     } 
//                     */}

//                     {slides}

//                 </ol>
//                 <div className="carousel-inner">
//                     {/* make a loop to keep creating all the items from current events until count===length.data */}

//                     {eventCarousel}
//                 </div>

//                 <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//                     <i className="material-icons"> keyboard_arrow_left </i>
//                     <span className="sr-only"> Previous </span>
//                 </a>
//                 <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//                     <i className="material-icons"> keyboard_arrow_right </i>
//                     <span className="sr-only"> Next </span>
//                 </a>
//             </div >
//         )
//     }
// }

// export default IndexEventCarousel = () => (
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
