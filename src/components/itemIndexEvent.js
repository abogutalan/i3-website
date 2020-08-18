import React from 'react'

const ItemIndexEvent = ({ imgURL, name, isActive }) => (
    <div className={"carousel-item" + (isActive ? "active" : "")}>
        <div className="page-header header-filter" style={{ backgroundImage: imgURL }}>
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

export default ItemIndexEvent
