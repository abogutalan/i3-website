
import React from 'react'
import { Link } from 'gatsby'
import '../../static/myAssets/stylesheets/navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg" color-on-scroll="100"
        id="sectionsNav">
            <div className="container">
                <div className="navbar-translate">
                    <Link className="navbar-brand" to="/">
                        <div className="logo-image" styles="width: 60px; height: 60px">
                            <img src="/myAssets/img/logonav.png" className="img-fluid" alt="i3"></img>
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
                                <Link to="/programs/Events/eventsPage/" className="dropdown-item">
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
                                <Link to="/YD/YDLocations/locationsPage" className="dropdown-item">
                                    <i className="material-icons">location_on</i> Locations
                                </Link>
                                <Link to="/YD/YDInstructors/instructorsPage" className="dropdown-item">
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
                                <Link to="/research/Fellows/fellowsPage" className="dropdown-item">
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

