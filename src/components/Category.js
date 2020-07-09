import React from 'react'

const Category = ({linkTo, imgURL, category, background}) => (
    <>
        <div class="col-md-4">
            <div class="card card-plain card-blog">
                <div class="card-header card-header-image">
                    <a href={linkTo}>
                        <img class="img img-raised" src={imgURL} />
                    </a>
                    <div class="colored-shadow"
                        style= {{backgroundImage: `url(./assets/img/examples/card-blog4.jpg)`, opacity: 1}}>
                    </div>
                </div>
                <div class="card-body">
                    <h6 class="card-category text-info text-center"> {category} </h6>
                </div>
            </div>
        </div>
    </>
)

export default Category