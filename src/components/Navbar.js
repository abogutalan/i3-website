<<<<<<< HEAD
import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
    return (
        <nav className="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg " color-on-scroll="100"
        id="sectionsNav">
            <div className="container">
                <div className="navbar-translate">
                    <Link className="navbar-brand" to="./index.html">
                        <div className="logo-image" styles="width: 60px; height: 60px">
                        </div>

                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="dropdown nav-item">
                            <Link to="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                                <i className="material-icons">apps</i> About Us
                            </Link>
                            <div className="dropdown-menu dropdown-with-icons">
                                <Link to="/about/history" className="dropdown-item">
                                    <i className="material-icons">layers</i> Objective
                                </Link>
                                <Link to="/about/gallery" className="dropdown-item">
                                    <i className="material-icons">content_paste</i> Gallery
                                </Link>
                                <Link to="/about/testimonials" className="dropdown-item">
                                    <i className="material-icons">chat</i> Testimonials
                                </Link>
                                <Link to="/about/volunteer" className="dropdown-item">
                                    <i className="material-icons">pan_tool</i> Volunteer
                                </Link>
                            </div>
                        </li>
                        <li className="dropdown nav-item">
                            <Link to="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                                <i className="material-icons">apps</i> Programs
                            </Link>
                            <div className="dropdown-menu dropdown-with-icons">
                                <Link to="/programs/events" className="dropdown-item">
                                    <i className="material-icons">line_style</i> Events
                                </Link>
                                <Link to="/programs/khateebdev" className="dropdown-item">
                                    <i className="material-icons">build</i> Khateeb Development
                                </Link>
                                <Link to="/programs/outreach" className="dropdown-item">
                                    <i className="material-icons">people</i> Outreach
                                </Link>
                                <Link to="/programs/ais" className="dropdown-item">
                                    <i className="material-icons">chrome_reader_mode</i> Advanced Islamic Studies (AIS)
                                </Link>
                                <Link to="/programs/FCC" className="dropdown-item">
                                    <i className="material-icons">people</i> Faith Crisis Care
                                </Link>
                            </div>
                        </li>
                        <li className="dropdown nav-item">
                            <Link to="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                                <i className="material-icons">apps</i> Young Da'ee
                            </Link>
                            <div className="dropdown-menu dropdown-with-icons">
                                <Link to="/YD/YDLocations" className="dropdown-item">
                                    <i className="material-icons">location_on</i> Locations
                                </Link>
                                <Link to="/YD/YDInstructors" className="dropdown-item">
                                    <i className="material-icons">people</i> Instructors
                                </Link>
                                <Link to="/YD/register" className="dropdown-item">
                                    <i className="material-icons">person_add</i> Registration
                                </Link>
                                <Link to="/YD/global" className="dropdown-item">
                                    <i className="material-icons">public</i> i3 Global
                                </Link>
                            </div>
                        </li>
                        <li className="dropdown nav-item">
                            <Link to="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                                <i className="material-icons">apps</i> Research Center
                            </Link>
                            <div className="dropdown-menu dropdown-with-icons">
                                <Link to="/research/fellows" className="dropdown-item">
                                    <i className="material-icons">people</i> Fellows
                                </Link>
                                <Link to="/research/articles" className="dropdown-item">
                                    <i className="material-icons">chrome_reader_mode</i> Articles
                                </Link>
                            </div>
                        </li>
                        {/* <!-- <li class="button-container nav-item iframe-extern">
                            <a href="./conference.html">
                                <button class="btn btn-danger btn-round ">
                                    <i class="material-icons">people</i> i3 Conference
                                </button>
                            </a>
                        </li> --> */}
                        <li className="button-container nav-item iframe-extern">
                            <Link to="/donate">
                                <button className="btn btn-warning btn-round ">
                                    <i className="material-icons">attach_money</i> Donate
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar 
=======
import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg " color-on-scroll="100"
        id="sectionsNav">
            <div className="container">
                <div className="navbar-translate">
                    <Link className="navbar-brand" to="./index.html">
                        <div className="logo-image" styles="width: 60px; height: 60px">
                            <img src="./myAssets/img/logonav.png" class="img-fluid" />
                        </div>

                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="dropdown nav-item">
                            <Link to="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                                <i className="material-icons">apps</i> About Us
                            </Link>
                            <div className="dropdown-menu dropdown-with-icons">
                                <Link to="/history" className="dropdown-item">
                                    <i className="material-icons">layers</i> Objective
                                </Link>
                                <Link to="/gallery" className="dropdown-item">
                                    <i className="material-icons">content_paste</i> Gallery
                                </Link>
                                <Link to="/testimonials" className="dropdown-item">
                                    <i className="material-icons">chat</i> Testimonials
                                </Link>
                                <Link to="/volunteer" className="dropdown-item">
                                    <i className="material-icons">pan_tool</i> Volunteer
                                </Link>
                            </div>
                        </li>
                        <li className="dropdown nav-item">
                            <Link to="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                                <i className="material-icons">apps</i> Programs
                            </Link>
                            <div className="dropdown-menu dropdown-with-icons">
                                <Link to="/events" className="dropdown-item">
                                    <i className="material-icons">line_style</i> Events
                                </Link>
                                <Link to="/khateebdev" className="dropdown-item">
                                    <i className="material-icons">build</i> Khateeb Development
                                </Link>
                                <Link to="/outreach" className="dropdown-item">
                                    <i className="material-icons">people</i> Outreach
                                </Link>
                                <Link to="/ais" className="dropdown-item">
                                    <i className="material-icons">chrome_reader_mode</i> Advanced Islamic Studies (AIS)
                                </Link>
                                <Link to="/FCC" className="dropdown-item">
                                    <i className="material-icons">people</i> Faith Crisis Care
                                </Link>
                            </div>
                        </li>
                        <li className="dropdown nav-item">
                            <Link to="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                                <i className="material-icons">apps</i> Young Da'ee
                            </Link>
                            <div className="dropdown-menu dropdown-with-icons">
                                <Link to="/YDLocations" className="dropdown-item">
                                    <i className="material-icons">location_on</i> Locations
                                </Link>
                                <Link to="/YDInstructors" className="dropdown-item">
                                    <i className="material-icons">people</i> Instructors
                                </Link>
                                <Link to="/register" className="dropdown-item">
                                    <i className="material-icons">person_add</i> Registration
                                </Link>
                                <Link to="/global" className="dropdown-item">
                                    <i className="material-icons">public</i> i3 Global
                                </Link>
                            </div>
                        </li>
                        <li className="dropdown nav-item">
                            <Link to="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                                <i className="material-icons">apps</i> Research Center
                            </Link>
                            <div className="dropdown-menu dropdown-with-icons">
                                <Link to="/fellows" className="dropdown-item">
                                    <i className="material-icons">people</i> Fellows
                                </Link>
                                <Link to="/articles" className="dropdown-item">
                                    <i className="material-icons">chrome_reader_mode</i> Articles
                                </Link>
                            </div>
                        </li>
                        {/* <!-- <li class="button-container nav-item iframe-extern">
                            <a href="./conference.html">
                                <button class="btn btn-danger btn-round ">
                                    <i class="material-icons">people</i> i3 Conference
                                </button>
                            </a>
                        </li> --> */}
                        <li className="button-container nav-item iframe-extern">
                            <Link to="/donate">
                                <button className="btn btn-warning btn-round ">
                                    <i className="material-icons">attach_money</i> Donate
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
>>>>>>> dbb9461098a9371f89f2b83db3a2bb06fd2e6fb3
