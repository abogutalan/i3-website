// import React from 'react';
// import Layout from '../../../components/layout'
// import '../../../static/myAssets/stylesheets/navbar.css'
// import PropTypes from 'prop-types'
// import { graphql, StaticQuery } from 'gatsby'

// class FCCPage extends React.Component {
//   render() {

//     const { data } = this.props
//     const { edges } = data.allMarkdownRemark

//     // getting frontmatters of every edges
//     const counsellors = edges.map(edge => {
//       return edge.node.frontmatter
//     })

//     return (
//       <>
//         <Layout>
//           <div className="about-us sidebar-collapse">
//             <div id="navbarDiv">
//             </div>
//             <div className="page-header header-filter header-small" data-parallax="true" style={{ backgroundImage: 'url("/myAssets/img/FaithCrisis/FCCBackground.jpg")' }}>
//               <div className="container">
//                 <div className="row">
//                   <div className="col-md-8 ml-auto mr-auto text-center">
//                     <h1 className="title">Faith Crisis Care</h1>
//                     <h5>We can help!</h5>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/*Main Page starts here*/}
//             <div className="main main-raised">
//               <div className="container">
//                 <div className="projects-4" id="projects-4">
//                   <div className="container">
//                     <div className="row">
//                       <div className="col-md-8 ml-auto mr-auto text-center">
//                         <h2 className="title">i3 Faith Crisis Care Team</h2>
//                         <div className="section-space" />
//                       </div>
//                     </div>
//                     {/*Faith Crisis Poster and description*/}
//                     <div className="row">
//                       <br />
//                       <div className="col-md-4 ml-auto">
//                         <img src="/myAssets/img/FaithCrisis/FCCPoster.jpeg" alt="Faith Crisis Poster" className="img-raised rounded img-fluid" />
//                       </div>
//                       <div className="col-md-6 ml-auto mr-auto">
//                         <h7 className="description">We are living in an age of information but also disinformation. There are many ways whereby one can start struggling with their faith or have difficulties explaining seemingly irrational or contradictory ideas. Are you someone who is facing lack of confidence in Islam? Doubting your Islamic identity? Not sure how to address some concerns and ideas being raised by friends, colleagues and others around you? We would love to chat with you!
//                     </h7>
//                         <br /><br />
//                         <h7 className="description">Faith Crisis Care Team at i3 Institute is dedicated to having one-on-one open minded and non-judgemental interactions via audio/video call as well as email correspondence or instant chat.
//                       <br /><br />
//                           <h7 className="description">We will work with you to first make sure you have a clear understanding of Islam and are able to distinguish culture of muslim communities from Islam. We will discuss and help you see how Islam is logical and rational and what evidence we have to prove that it is from The Creator, Lord of The Heavens and The Earth. We can also share with you some habits and means which you can use to build and strengthen your faith.
//                       </h7>
//                         </h7></div>
//                     </div>
//                     <div className="col-md-10 ml-auto mr-auto text-center">
//                       <br /><br />
//                       <p className="c5">
//                         <span className="c7">You can see our team members below and use their booking page to book a call with them.
//                     </span><wbr />
//                         <i> If you would rather communicate via email or chat, please send us an email at </i>
//                         <i>
//                           <a className="c1" href="mailto:fcc@i3institute.ca">fcc@i3institute.ca</a>
//                         </i>
//                         <i>and we will arrange an instant chat or communicate via email.</i>
//                       </p>
//                     </div>
//                     <hr />
//                     {/*Booking*/}
//                     <div className="col-md-12 mr-auto mr-auto text-center">
//                       <h3 className="title">Book a call with one of our Counsellors!</h3>
//                       <div className="section-space" />
//                     </div>
//                     {/*Coach Zubair*/}
//                     <div className="row">
//                       <div className="col-md-10 ml-auto mr-auto">
//                         <div className="card card-profile card-plain">
//                           <div className="row">
//                             <div className="col-md-5">
//                               <div className="card-header card-header-image">
//                                 <img className="img" src="/myAssets/img/CoachZubair.jpg" alt="" />
//                                 <div className="colored-shadow" style={{ backgroundImage: 'url("/assets/img/faces/card-profile1-square.jpg")', opacity: 1 }}>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="col-md-7 ml-auto">
//                               <div className="card-body">
//                                 <h4 className="card-title">Zubair A <a className="c1" href="https://www.youtube.com/c/CoachZubair">(@CoachZubair - coachzubair.com)</a> </h4>
//                                 <h6 className="card-category text-muted">Senior Counsellor and Manager - i3 Faith Crisis Care
//                             </h6>
//                                 <p className="card-description">
//                                   <span>BSc Computer Science, Cyber Security Researcher at Microsoft</span>
//                                   <br />
//                                   <span>Other Interests: Quran, Personal Development, Leadership and Coaching, Inviting to Islam and New Muslim Development.</span>
//                                 </p>
//                                 <h6 className="card-category text-muted">To Book a Call with Zubair visit
//                               <a className="c1" href="https://calendly.com/chatwithzubair"> his booking page</a>
//                                 </h6>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="section-space" />
//                     {/*Adnan Khan*/}
//                     <div className="section-space" />
//                     <div className="row">
//                       <div className="col-md-10 ml-auto mr-auto">
//                         <div className="card card-profile card-plain">
//                           <div className="row">
//                             <div className="col-md-5">
//                               <div className="card-header card-header-image">
//                                 <img className="img" src="/myAssets/img/adnan2.jpg" alt="" />
//                                 <div className="colored-shadow" style={{ backgroundImage: 'url("/assets/img/faces/card-profile1-square.jpg")', opacity: 1 }}>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="col-md-7 ml-auto">
//                               <div className="card-body">
//                                 <h4 className="card-title">Adnan Khan (
//                               <a className="c1" href="mailto:adnan@i3institute.ca">adnan@i3institute.ca</a> )</h4>
//                                 <h6 className="card-category text-muted">I3 Instructor &amp; Counsellor - i3 Faith Crisis Care
//                             </h6>
//                                 <p className="card-description">
//                                   <span>BSc Honors Mechatronics Engineering, Senior Process Planner</span>
//                                   <br />
//                                   <span>Other Interests: Dawah, Islam, Western Philosophy, Usul-ul-Fiqh, History &amp; Politics.</span>
//                                 </p>
//                                 <h6 className="card-category text-muted">To Book a Call with Adnan visit
//                               <a className="c1" href="https://calendly.com/adnan-ak"> his booking page</a>
//                                 </h6>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Layout>
//       </>
//     )
//   }
// }

// FCCPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
// }

// export default () => (
//   <StaticQuery
//     query={graphql`
//       query CounselorQuery {
//         allMarkdownRemark(
//           filter: { frontmatter: { templateKey: { eq: "instructorTemplate" } } }
//         ) {
//           edges {
//             node {
//               excerpt(pruneLength: 400)
//               id
              
//               frontmatter {
//                 slug
//                 templateKey
//                 name
//                 imgURL
//                 description
//                 descriptionMore
                
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={(data, count) => <FCCPage data={data} count={count} />}
//   />
// )