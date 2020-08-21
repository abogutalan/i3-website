import React from 'react'
import Layout from '../components/layout'

const Sponsor = ()  => (
    <>
    <Layout>
        <div className = "page-header header-filter header-small" data-parallax = "true"
        style = {{ backgroundImage: `url('/myAssets/img/hiking.jpg')` }} >
            <div class = "container">
                <div className = "row">
                    <div className = "col-md-8 ml-auto mr-auto text-center">
                        <div className = "brand">
                            <h1 className = "title"> Business Sponsorship </h1>
                            <h4> Become a sponsor for the i3 Institute! </h4>
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
                            <iframe allowpaymentrequest = "" frameborder = "0" height = "900px" name = "donorbox" scrolling = "no"
                                seamless = "seamless" title="donorbox" src= "https://donorbox.org/embed/business-sponsorship-1"
                                style = {{maxWidth: '500px', minWidth: '250px', maxHeight:'none!important', width: '100%' }}>
                            </iframe>
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
                                        At the i3 institute, we are dedicated to transforming our Muslim youth into principled,
                                        confident, and aware Muslim leaders. In addition to leadership building,
                                        we aim to create a Center to hold events including but not limited to:
                                    </p>
                                    <ul>
                                        <li> Conferences </li>
                                        <li> Islamic Classes </li>
                                        <li> Workshops </li>
                                        <li> Prayers </li>
                                        <li> Youth activities/Social space </li>
                                    </ul>
                                    <p>
                                        In order to reach our goals, we need your support. By investing in the future of the Ummah,
                                        your sponsorship will allow your business to benefit from our marketing reach to over 3,500 people
                                        through our Facebook page, Instagram, and email list.  Furthermore,
                                        your sponsorship will also grant exposure at our large annual conferences taking place
                                        at well known community centres and masajid.
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

export default Sponsor