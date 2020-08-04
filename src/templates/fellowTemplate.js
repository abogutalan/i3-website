import React from "react"
import Layout from '../components/layout';
import { graphql } from 'gatsby'
import FellowsPageTemplate from "../components/FellowsPageTemplate";

export default function FellowTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark
  
  return (
    <Layout>
      <FellowsPageTemplate {...frontmatter} />
    </Layout>
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