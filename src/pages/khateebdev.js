import React from 'react'
import Layout from '../components/layout'

const Khateebdev = () => (
  <>
  <Layout>
    <div className = "page-header header-filter header-small" data-parallax = "true"
        style = {{ backgroundImage: `url('/myAssets/img/OstaAndRasoul2.jpg')` }}>
        <div className = "container">
            <div className = "row">
                <div className = "col-md-8 ml-auto mr-auto text-center">
                    <div className = "brand">
                        <h1 className = "title"> Khateeb Development </h1>
                        <h4> i3's Khateeb Training Program </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className = "main main-raised">
        <div className = "section">
            <div className = "features-4" style = {{ paddingTop: 0 }} >
                <div className = "row">
                    <div className = "col-md-8 ml-auto mr-auto text-center">
                        <h2 className = "title"> Become a trained Khateeb </h2>
                        <h5 className = "description">
                            Do you have a background in Islamic studies and would like to upgrade your skills and
                            knowledge to become a local khateeb?
                        </h5>
                    </div>
                </div>
                <div className = "row">
                    <div className = "col-lg-3 col-md-12 ml-auto">
                        <div className = "info info-horizontal">
                            <div className = "icon icon-danger">
                                <i className = "material-icons"> info_outline </i>
                            </div>
                            <div className = "description">
                                <h4 className = "info-title"> An Important Need </h4>
                                <p>
                                    It is very important for khateebs in our communities (MSAs, local Masaajid, etc.)
                                    to be students of knowledge, that also practice the knowledge they possess, and are
                                    well-trained in advance.
                                </p>
                            </div>
                        </div>
                        <div className = "info info-horizontal">
                            <div className = "icon icon-info">
                                <i className = "material-icons"> chat </i>
                            </div>
                            <div className = "description">
                                <h4 className = "info-title"> Thorough Training </h4>
                                <p>
                                    The khateeb training program will enhance your Islamic knowledge,
                                    along with providing you with training on public speaking and tajweed skills.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className = "col-lg-4 col-md-12">
                        <br />
                        <br />
                        <div className = "phone-container">
                            <img src="/myAssets/img/ShRasouli3dinner.jpg" alt=""/>
                        </div>
                    </div>
                    <div className = "col-lg-3 col-md-12 mr-auto">
                        <div className = "info info-horizontal">
                            <div className = "icon icon-primary">
                                <i className = "material-icons"> skip_previous </i>
                            </div>
                            <div className = "description">
                                <h4 className = "info-title"> One Prerequisite </h4>
                                <p>
                                    Our khateeb training program is available for those with at least 1 year background
                                    in Shariah studies.
                                    This may be acquired through our intensive part time program, Young Da’ee.
                                </p>
                            </div>
                        </div>
                        <div className = "info info-horizontal">
                            <div className = "icon icon-success">
                                <i className = "material-icons"> check_circle </i>
                            </div>
                            <div className = "description">
                                <h4 className = "info-title"> Practically Applied </h4>
                                <p>
                                    The program will be able to place you in masjids, musalahs, and schools that require
                                    a khateeb.
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


  export default Khateebdev