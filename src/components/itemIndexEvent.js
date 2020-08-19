import React from 'react'

const ItemIndexEvent = ({ imgURL, name, isActive }) => {
    console.log("*************** HERE ********")
    console.log(imgURL)
    return (
        <div className={"carousel-item" + (isActive ? "active" : "")}>
            <div className="page-header header-filter" style = {{ backgroundImage: `url('/myAssets/img/OstaAndRasoul2.jpg')` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ml-auto mr-auto text-center">
                            <h1 className="title"> {name} </h1>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemIndexEvent
