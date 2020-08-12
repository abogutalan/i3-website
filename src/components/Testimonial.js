import React from 'react'

const Testimonial = ({quote, author, position, imgURL}) => (
    <>
        <div className = "col-md-4">
            <div className = "card card-testimonial">
                <div className = "icon">
                    <i className = "material-icons">format_quote</i>
                </div>
                <div className = "card-body ">
                    <h5 className = "card-description"> "{quote}" </h5>
                </div>
                <div className = "card-footer ">
                    <h4 className = "card-title">{author}</h4>
                    <h6 className = "card-category">{position}</h6>
                    <div className = "card-avatar">
                        <img className = "img" src={imgURL} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default Testimonial