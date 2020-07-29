import React from "react"
import Layout from '../components/layout';

import { graphql } from 'gatsby'

export default function FellowTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark
  console.log(data)
  return (
    <>
    <Layout>
    <div className="about-us sidebar-collapse">        
        <div id="navbarDiv">
        </div>
        
        <div className="page-header header-filter header-small" data-parallax="true" style={{backgroundImage: 'url("/myAssets/img/Research Center/Fellows/FellowsCover.png")'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto text-center">
                <h1 className="title">i3 Research Fellow</h1>
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
                    <h2 className="title">{frontmatter.name}</h2>
                    <img className="img-raised rounded img-fluid fellow-img-lg" src={frontmatter.imgURL} alt="osta" />
                    <h5 className="description">{frontmatter.body}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        </div>
          </Layout>
          </>
  )
}



export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        name
        title
        body
        imgURL
      }
    }
  }
`