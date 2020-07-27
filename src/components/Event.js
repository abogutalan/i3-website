import React from 'react';
 
const Event = ({ imgURL, name, location, DT, description, idx }) => {
    let imgClassName, desClassName
    if (idx % 2 === 0) {
        imgClassName = "col-md-8 mr-auto"
        desClassName = "col-md-8 ml-auto"
    } else {
        imgClassName = "col-md-5 ml-auto"
        desClassName = "col-md-5 mr-auto"
    }

    return (
    <>
        <div className="row">
            <div className={imgClassName}>
                <br />
                <img src={imgURL} alt={name} className="img-raised rounded img-fluid" width="55%" />
                <h3 className="info-title text-center"> {name}</h3>
            </div> 
            <div className={desClassName}>
                <div className="info info-horizontal">
                    <div className="description">
                        <h4 className="info-title"> Location </h4>
                        <p> {location} </p>
                    </div>
                </div>
                <div className="info info-horizontal">
                    <div className="description">
                        <h4 className="info-title"> Date & Time </h4>
                        <p> {DT} </p>
                    </div>
                </div>
                <div className="info info-horizontal">
                    <div className="description">
                        <h4 className="info-title"> Details </h4>
                        <p> {description} </p>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        </>
    )
}

export default Event

