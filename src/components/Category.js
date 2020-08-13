import React from 'react'

const Category = ({linkTo, imgURL, category, background}) => (
    <>
        <div className = "col-md-4">
            <div className = "card card-plain card-blog">
                <div className = "card-header card-header-image">
                    <a href={linkTo}>
                        <img className = "img img-raised" src={imgURL} alt="" />
                    </a>
                    <div className = "colored-shadow"
                        style= {{backgroundImage: `url(./assets/img/examples/card-blog4.jpg)`, opacity: 1}}>
                    </div>
                </div>
                <div className = "card-body">
                    <h6 className = "card-category text-info text-center"> {category} </h6>
                </div>
            </div>
        </div>
    </>
)

export default Category