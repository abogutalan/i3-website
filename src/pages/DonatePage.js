import React from 'react'
import Layout from '../components/layout';

const Donate = ()  => (
    <>
    <Layout>
        <div className = "page-header header-filter header-small" data-parallax = "true"
        style = {{ backgroundImage: `url('/myAssets/img/hiking.jpg')` }} >
            <div class = "container">
                <div className = "row">
                    <div className = "col-md-8 ml-auto mr-auto text-center">
                        <div className = "brand">
                            <h1 className = "title"> Donations </h1>
                            <h4> Make a donation to the i3 Institute. </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className = "main main-raised">
            <div className = "container">
                <div className = "features-3">
                    <div className = "row">
                        <div className = "col-md-6">
                            <br />
                            <br />
                            <iframe title="donationbox" allowpaymentrequest = "" frameborder = "0" height = "900px" name = "donorbox" scrolling = "no"
                                seamless = "seamless" src = "https://donorbox.org/embed/i3institute?default_interval=m"
                                style = {{ maxWidth: '500px', minWidth: '310px', maxHeight:'none!important' }}
                                width = "100% "></iframe>
                        </div>
                        <div className = "col-md-6">
                            <h2 className = "title"> Donate Today! </h2>
                            <iframe title="donationbox" frameborder = "0" height = "93px" name = "donorbox" scrolling = "no" seamless = "seamless"
                                src = "https://donorbox.org/embed/i3institute?donation_meter_color=%2341a2d8&amp;only_donation_meter=true"
                                style = {{ maxWidth:'500px', minWidth:'250px', maxHeight:'none!important', width:"100%" }}>
                            </iframe>
                            <div className = "info info-horizontal">
                                <div className = "icon icon-primary">
                                    <i className = "material-icons"> attach_money </i>
                                </div>
                                <div className = "description">
                                    <h4 className = "info-title"> How Your Donations Will Be Used </h4>
                                    <p>
                                        In order to continue the important work that i3 is doing for the Muslim
                                        community,
                                        the i3 Institute needs funding for operational costs. Our respected shuyookh,
                                        teachers, and
                                        teaching
                                        assistants volunteer their time to this initiative for the sake of Allah (SWT), but
                                        funding
                                        is
                                        required
                                        for resources, including (but not limited to):
                                    </p>
                                    <ul>
                                        <li> Room rentals for classes, conferences, and events. </li>
                                        <li> Teaching materials, including projectors and textbooks. </li>
                                        <li> Food and refreshments for community events and lectures. </li>
                                        <li> Printed Marketing Material. </li>
                                        <li> Digital Media and Website. </li>
                                    </ul>
                                    <p>
                                        Your generous donations will help the i3 Institute succeed in creating the Muslim
                                        leaders of tomorrow, insha'Allah!
                                    </p>
                                    <p>
                                        You can also directly e-transfer an amount to
                                        <strong> funding@i3institute.ca </strong>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
    </>
)

export default Donate