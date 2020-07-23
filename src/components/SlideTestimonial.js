import React from 'react'

const SlideTestimonial = ({imgURL, quote, author, position}) => (
    <>
    <div className="carousel-item">
        <div className="card card-testimonial card-plain">
            <div className="card-avatar">
                <img className="img" src={imgURL} alt="" />
            </div>
            <div className="card-body">
                <h5 className="card-description">
                    "{quote}"
                </h5>
                <h4 className="card-title">{author}</h4>
                <h6 className="card-category text-muted">{position}</h6>
                    <div className="footer">
                        <i className="material-icons text-warning">star</i>
                        <i className="material-icons text-warning">star</i>
                        <i className="material-icons text-warning">star</i>
                        <i className="material-icons text-warning">star</i>
                        <i className="material-icons text-warning">star</i>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default SlideTestimonial