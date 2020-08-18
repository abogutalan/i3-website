import React from 'react'

function IndexYDCarousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className=""></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1" className=""></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2" className="active"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="page-header header-filter" style={{ backgroundImage: `url('/myAssets/img/YD1Toronto.jpg')` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 ml-auto mr-auto text-center">
                                    <h1 className="title">Part-Time & Flexible</h1>
                                    <h4>
                                        Our classes are offered in several different locations within the GTA
                                        and surroundings. With 2 hours of weekly classes and recommended readings it
                                        is a program that is flexible enough for any working professional or student to join it.
                                    </h4>
                                    <br />
                                    <div className="buttons">
                                        <a href="./YDLocations.html" className="btn btn-danger btn-lg">
                                            <i className="material-icons">location_on</i> View Locations & Timings
                                            <div className="ripple-container"></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="page-header header-filter" style={{ backgroundImage: `url('/myAssets/img/YD1Sauga.jpg')` }}>
                        <div style={{ wordWrap: 'break-word' }} className="container">
                            <div className="row">
                                <div className="col-md-8 ml-auto mr-auto text-center">
                                    <h1 className="title">Both Basic and In-Depth Islamic Studies</h1>
                                    <h4>
                                        At the YD Program, students will learn several branches/modules of Islamic
                                        Studies from Instructors who have completed the program previously and are
                                        constantly trained to be better leaders.
                                        </h4>
                                    <br />
                                    <h6>Various modules such as:</h6>
                                    <h4> Usul-ul-Fiqh + Ilmun-Hadeeth + Aqeedah + Seerah + Tazkiyya </h4>
                                    <br />
                                    <div className="buttons">
                                        <a href="./YDInstructors.html" className="btn btn-danger btn-lg">
                                            <i className="material-icons">people</i> View Instructors' Profiles
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item ">
                    <div className="page-header header-filter" style={{ backgroundImage: `url('/myAssets/img/YD1Scarborough2.jpg')` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7 ml-auto mr-auto text-center">
                                    <h1 className="title">A Truly Transformative Program</h1>
                                    <h4>
                                        Become a leader! One who is motivational, inspirational, and has sound
                                        knowledge. One who sees challenges and doesn't wait for others to fix them, but takes
                                        initiative themselves. Be the change you want to see!
                                    1</h4>
                                    <br />
                                    <div className="buttons">
                                        <a href="./YDRegister.html" className="btn btn-danger btn-lg">
                                            <i className="material-icons">person_add</i> Register Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <i className="material-icons"> keyboard_arrow_left </i>
                <span className="sr-only"> Previous </span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <i className="material-icons" > keyboard_arrow_right </i>
                <span className="sr-only"> Next </span>
            </a>
        </div>
    )
}

export default IndexYDCarousel