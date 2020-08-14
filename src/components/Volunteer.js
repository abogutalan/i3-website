import React from 'react'

const Volunteer = ({ jobTitle, jobTeam, description, duties, qualifications }) => {
    console.log(duties)
    console.log(qualifications)
    return (
        <div className = "row">
            <div className = "col-md-8 ml-auto mr-auto">
                    <h3 className = "title text-left"> { jobTitle } ({ jobTeam }) </h3>
                    <div className = "description text-left">
                        <p className = "description text-left"> { description } </p>
                    </div>
                    <div className = "description">
                        <h4 className = "title text-left"> Duties and Responsibilities </h4>
                        <p className = "description text-left"> 
                            { duties }
                        </p>                       
                    </div>
                    <div className = "description">
                        <h4 className = "title text-left"> Qualifications </h4>
                        <p className = "description text-left">
                            { qualifications }
                        </p>
                    </div>
                    <hr />
            </div>
        </div>
    )
}

export default Volunteer
