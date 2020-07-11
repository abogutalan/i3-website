import React from 'react'

const Testimonial = ({quote, author, position, imgURL}) => (
    <>
        <div class="col-md-4">
            <div class="card card-testimonial">
                <div class="icon">
                    <i class="material-icons">format_quote</i>
                </div>
                <div class="card-body ">
                    <h5 class="card-description"> "{quote}" </h5>
                </div>
                <div class="card-footer ">
                    <h4 class="card-title">{author}</h4>
                    <h6 class="card-category">{position}</h6>
                    <div class="card-avatar">
                        <img class="img" src={imgURL} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default Testimonial