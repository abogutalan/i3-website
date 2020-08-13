import React from 'react'

const Article = ({imgURL, category, title, description, author, date}) => (
    <>
        <br />
        <div className = "card card-plain card-blog">
            <div className = "row">
                <div className = "col-md-4">
                    <div className = "card-header card-header-image article-thumbnail-container">
                        <img className = "img img-raised article-thumbnail-img" src={imgURL} alt="" />
                        <div className = "colored-shadow"
                            style={{backgroundImage: `url(./assets/img/office2.jpg)`, opacity: 1}}>
                        </div>
                    </div>
                </div>
                <div className = "col-md-8">
                    <h6 className = "card-category text-success"> {category} </h6>
                    <h3 className = "card-title">
                        <a href="./articles/quranShouldNot.html"> {title} </a>
                    </h3>
                    <p className = "card-description"> {description}
                        <a href="./articles/quranShouldNot.html"> Read More </a>
                    </p>
                    <p className = "author"> by
                        <a href="./fellows/ijazahmed.html"> <b> {author} </b> </a>, {date}
                    </p>
                </div>
            </div>
        </div>
    </>
)


export default Article