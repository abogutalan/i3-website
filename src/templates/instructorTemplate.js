import React from "react"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
      
    <div className="row">
            <div className="col-md-5 ml-auto">
                <br />
                <img src={imgURL} alt={name} className="img-raised rounded img-fluid" />
                <h3 className="info-title text-center">{name}</h3>
            </div>
            <div className="col-md-5 mr-auto">
                <div className="info info-horizontal">
                    <div className="description">
                        <h4 className="info-title"> </h4>
                        <p>{description}</p>
                    </div>
                </div>
                {descriptionMore &&
                    <div className="info info-horizontal">
                        <div className="description">
                            <h4 className="info-title"> </h4>
                            <p>{descriptionMore}</p>
                        </div>
                    </div>}
            </div>
        </div>
        <hr />
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        imgURL
        name
        description
        descriptionMore
      }
    }
  }
`