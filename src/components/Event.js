import React from 'react';

const Event = ({ imgURL, name, location, DT, description, idx }) => {
    let imgClassName, desClassName, markupToReturn
    if (idx % 2 === 0) {
        imgClassName = "col-md-5 mr-auto"
        desClassName = "col-md-5 ml-auto"
        markupToReturn = (
            <>
                <div className = "row">
                    <div className = {imgClassName}>
                        <br />
                        <img src={imgURL} alt={name} className = "img-raised rounded img-fluid" width="100%" />
                        <h3 className = "info-title text-center"> {name}</h3>
                    </div>
                    <div className = {desClassName}>
                        <div className = "info info-horizontal">
                            <div className = "description">
                                <h4 className = "info-title"> Location </h4>
                                <p> {location} </p>
                            </div>
                        </div>
                        <div className = "info info-horizontal">
                            <div className = "description">
                                <h4 className = "info-title"> Date & Time </h4>
                                <p> {DT} </p>
                            </div>
                        </div>
                        <div className = "info info-horizontal">
                            <div className = "description">
                                <h4 className = "info-title"> Details </h4>
                                <p> {description} </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </>
        )
    } else {
        imgClassName = "col-md-5 ml-auto"
        desClassName = "col-md-5 mr-auto"
        markupToReturn = (
            <>
                <div className = "row">
                    <div className = {desClassName}>
                        <div className = "info info-horizontal">
                            <div className = "description">
                                <h4 className = "info-title"> Location </h4>
                                <p> {location} </p>
                            </div>
                        </div>
                        <div className = "info info-horizontal">
                            <div className = "description">
                                <h4 className = "info-title"> Date & Time </h4>
                                <p> {DT} </p>
                            </div>
                        </div>
                        <div className = "info info-horizontal">
                            <div className = "description">
                                <h4 className = "info-title"> Details </h4>
                                <p> {description} </p>
                            </div>
                        </div>
                    </div>
                    <div className = {imgClassName}>
                        <br />
                        <img src={imgURL} alt={name} className = "img-raised rounded img-fluid" width="100%" />
                        <h3 className = "info-title text-center"> {name}</h3>
                    </div>
                </div>
                <hr />
            </>
        )
    }

    return (
        <div>
            {markupToReturn}
        </div>
    )
}

export default Event

