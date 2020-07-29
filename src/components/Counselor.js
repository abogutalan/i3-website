import React from "react";

const Counselor = ({ imgURL, name, title, education, otherInterests, instructions, link, linkDisplay, booklink, gender }) => (
    <>
        <div className = "row">
            <div className = "col-md-10 ml-auto mr-auto">
                <div className = "card card-profile card-plain">
                    <div className = "row">
                        <div className = "col-md-5">
                            <div className = "card-header card-header-image">
                                <img className = "img" src = {imgURL} alt = {name} />
                                <h3 className = "info-title text-center"> {name} </h3>
                            </div>
                            <div className = "section-space" />
                            <div className = "section-space" />
                            <div className = "section-space" />
                        </div>
                    <div className = "col-md-7 mr-auto">
                        <div className = "card-body">
                            <h4 className = "card-title"> <a className = "c1" href = {`mailto: ${link}`} > ( {linkDisplay} ) </a> </h4>
                            <h6 className = "card-category text-muted"> {title} - i3 Faith Crisis Care </h6>
                            <p> 
                                {education} <br /> Hobbies: {otherInterests} <br /> {instructions} <br /> 
                                <h6 className = "card-category text-muted"> TO BOOK A CALL WITH { name } VISIT 
                                <span> <a className = "c1" href = {booklink} > {gender === 'male' ? "HIS" : "HER"} BOOKING PAGE </a> </span> </h6> 
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default Counselor