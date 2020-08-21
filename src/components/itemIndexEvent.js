import React from 'react'

const ItemIndexEvent = ({ imgURL, name, isActive }) => {
    console.log("*************** HERE ********")
    console.log(imgURL)
    return (
        <div className={"carousel-item" + (isActive ? "active" : "")}>
            {/* <div className="card card-testimonial card-plain">
                <div className="card-avatar">
                    <img className="img" src={imgURL} alt="Event" />
                </div>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                </div> */}
            {/* <div className="page-header header-filter"> */}{/* </div> */}

            <div className="container">
                <div className="row">
                    <div className="col-md-12 ml-auto mr-auto text-center">
                        {/* <div className="item"> */}
                        {/* <div className="carousel-caption"> */}
                            <h1 className="title"> {name} </h1>
                            <img className="img" src={imgURL} alt="Event" />
                            <br />
                        </div>
                    {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default ItemIndexEvent
