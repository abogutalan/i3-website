import React from "react";
import { graphql } from "gatsby"

import Img from "gatsby-image"

 const Instructor = ({ data }) => {
  console.log('data++++++')
  console.log(data)
   return(

  <>
    <div className="row">
      <div className="col-md-5 ml-auto">
        <br />
        <Img fixed={data.file.childImageSharp.fixed} />
        <h3 className="info-title text-center">name</h3>
      </div>
      <div className="col-md-5 mr-auto">
        <div className="info info-horizontal">
          <div className="description">
            <h4 className="info-title"> </h4>
            <p>description</p>
          </div>
        </div>
        {
          <div className="info info-horizontal">
            <div className="description">
              <h4 className="info-title"> </h4>
              <p>descriptionMore</p>
            </div>
          </div>}
      </div>
    </div>
    <hr />

  </>

)
        }

export default Instructor

export const query = graphql`
  query {
    file(relativePath: { eq: "static/myAssets/img/ShRasoulMain2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`