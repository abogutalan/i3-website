
import React from 'react'
import { Link } from 'gatsby'
import '../../static/myAssets/stylesheets/navbar.css'

const Navbar = () => {
    return (
        <nav className = "navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg" color-on-scroll = "100"
            id="sectionsNav">
            <div className = "container">
                <div className = "navbar-translate">
                    <Link className = "navbar-brand" to = "/">
                        <div className = "logo-image" styles = "width: 60px; height: 60px">
                            <img src="/myAssets/img/logonav.png" className = "img-fluid" alt = "i3"></img>
                        </div>
                    </Link>
                    <button className = "navbar-toggler" type = "button" data-toggle = "collapse" aria-expanded="false"
                        aria-label = "Toggle navigation">
                        <span className = "sr-only"> Toggle navigation </span>
                        <span className = "navbar-toggler-icon"></span>
                        <span className = "navbar-toggler-icon"></span>
                        <span className = "navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className = "collapse navbar-collapse">
                    <ul className = "navbar-nav ml-auto">
                        <li className = "dropdown nav-item">
                            <Link to = "#" className = "dropdown-toggle nav-link" data-toggle = "dropdown">
                                <i className = "material-icons"> apps </i> About Us
                            </Link>
                            <div className = "dropdown-menu dropdown-with-icons">
                                <Link to = "/history" className = "dropdown-item">
                                    <i className = "material-icons"> layers </i> Objective
                                </Link>
                                <Link to = "/gallery" className = "dropdown-item">
                                    <i className = "material-icons"> content_paste </i> Gallery
                                </Link>
                                <Link to = "/testimonials" className = "dropdown-item">
                                    <i className = "material-icons"> chat </i> Testimonials
                                </Link>
                                <Link to = "/volunteer" className = "dropdown-item">
                                    <i className = "material-icons"> pan_tool </i> Volunteer
                                </Link>
                            </div>
                        </li>
                        <li className = "dropdown nav-item">
                            <Link to = "#" className = "dropdown-toggle nav-link" data-toggle = "dropdown">
                                <i className = "material-icons"> apps </i> Programs
                            </Link>
                            <div className = "dropdown-menu dropdown-with-icons">
                                <Link to = "/events/" className = "dropdown-item">
                                    <i className = "material-icons"> line_style </i> Events
                                </Link>
                                <Link to = "/khateebdev" className = "dropdown-item">
                                    <i className = "material-icons"> build </i> Khateeb Development
                                </Link>
                                <Link to = "/outreach" className = "dropdown-item">
                                    <i className = "material-icons"> people </i> Outreach
                                </Link>
                                <Link to = "/ais" className = "dropdown-item">
                                    <i className = "material-icons"> chrome_reader_mode </i> Advanced Islamic Studies (AIS)
                                </Link>
                                <Link to = "/fcc" className = "dropdown-item">
                                    <i className = "material-icons"> people </i> Faith Crisis Care
                                </Link>
                            </div>
                        </li>
                        <li className = "dropdown nav-item">
                            <Link to = "#" className = "dropdown-toggle nav-link" data-toggle = "dropdown">
                                <i className = "material-icons"> apps </i> Young Da'ee
                            </Link>
                            <div className = "dropdown-menu dropdown-with-icons">
                                <Link to = "/ydlocations" className = "dropdown-item">
                                    <i className = "material-icons"> location_on </i> Locations
                                </Link>
                                <Link to = "/ydinstructors" className = "dropdown-item">
                                    <i className = "material-icons"> people </i> Instructors
                                </Link>
                                <Link to = "/register" className = "dropdown-item">
                                    <i className = "material-icons"> person_add </i> Registration
                                </Link>
                                <Link to = "/global" className = "dropdown-item">
                                    <i className = "material-icons"> public </i> i3 Global
                                </Link>
                            </div>
                        </li>
                        <li className = "dropdown nav-item">
                            <Link to = "#" className = "dropdown-toggle nav-link" data-toggle = "dropdown">
                                <i className = "material-icons"> apps </i> Research Center
                            </Link>
                            <div className = "dropdown-menu dropdown-with-icons">
                                <Link to = "/fellows" className = "dropdown-item">
                                    <i className = "material-icons"> people </i> Fellows
                                </Link>
                                <Link to = "/articles" className = "dropdown-item">
                                    <i className = "material-icons"> chrome_reader_mode </i> Articles
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
                        <li className = "dropdown nav-item">
                            <Link to = "#" data-toggle = "dropdown" width = "50px">
                                <button className = "btn btn-warning btn-round ">
                                    <i className = "material-icons"> attach_money </i> Donate
                                </button>
                            </Link>
                            <div className = "dropdown-menu dropdown-with-icons">
                                <Link to = "/donate" className = "dropdown-item">
                                        <i className = "material-icons"> money </i> Donate Today!
                                </Link>
                                <Link to = "/sponsor" className = "dropdown-item">
                                    <i className = "material-icons"> business </i> Business Sponsorship
                                </Link>
                            </div>
                            <Link to = "/"></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        

    )
}

export default Navbar


