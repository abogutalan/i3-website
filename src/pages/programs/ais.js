import React from 'react';
import Layout from '../../components/layout';

const AIS = () => (
    <>
        <Layout>
            <div className="page-header header-filter header-small" data-parallax="true"
                style={{ backgroundImage: `url('/myAssets/img/AIS banner.jpg')` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 ml-auto mr-auto text-center">
                            <div className="brand">
                                <h1 className="title"> Advanced Islamic Studies (AIS) </h1>
                                <h4> Our super intensive initiative that is designed to change the Islamic landscape in Canada! </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main main-raised">
                <div className="section">
                    <div className="projects-4" id="projects-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 ml-auto mr-auto text-center">
                                    <h2 className="title"> Introducing the AIS Program </h2>
                                    <h5 className="description"> The YD Program has been a great success for the last few years. We have had 13 classes
                                    operating, and we think it is the right time to introduce our community to a new
                                    program....
                                    </h5>
                                    <div className="section-space"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5 ml-auto">
                                    {/* <!-- <div className="card card-background"
                                        style="background-image:url('./myAssets/img/ais flyer.jpg')">
                                        <div className="card-body">
                                        </div>
                                    </div> --> */}
                                    <img src="/myAssets/img/ais flyer.jpg" alt="flyer" style={{ width: '100%' }} />
                                </div>
                                <div className="col-md-5 mr-auto">
                                    <div className="info info-horizontal">
                                        <div className="icon icon-danger">
                                            <i className="material-icons">add_alert</i>
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">Intensive</h4>
                                            <p className="description"> This program is super intensive and very comprehensive and covers a structure of
                                            material similar to that of Islamic universities.
                                            This is for those who want to take their knowledge to the next level and cause
                                            change in their own lives. We are asking all the highly committed students to
                                            sign up.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info info-horizontal">
                                        <div className="icon icon-info">
                                            <i className="material-icons"> chrome_reader_mode </i>
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title"> Comprehensive </h4>
                                            <p className="description"> You can expect to cover a wide range of topics like Tafsir, classical Fiqh
                                            texts,
                                            Comparative Fiqh, Quranic Sciences, Hadith Sciences, Fiqh of Da'wah, Aqeedah,
                                            Tazkiya and Tasawwuf, and much more.
                                             </p>
                                        </div>
                                    </div>
                                    <div className="info info-horizontal">
                                        <div className="icon icon-primary">
                                            <i className="material-icons"> event_available </i>
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title"> Accessible </h4>
                                            <p className="description"> An equivalent program costs over $20,000 CAD. However, we are offering this
                                            program for $100 per term (Excluding a registration fee), for which you will
                                            have
                                            online access to, from the comfort of your own home.
                                             </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-space"></div>
                            <div className="row">
                                <div className="col-md-8 ml-auto mr-auto ">
                                    <h2 className="title text-center"> The Objectives of the AIS Program </h2>
                                    <h5 className="description text-center"> Here is a more detailed list of the objectives and content of this program. </h5>
                                    <br />
                                    <ol>
                                        <li> Finish reading 2 full tafsirs of fhe Quran. </li>
                                        <li> Study a main classical fiqh text and its one of its explanations for all 4 schools
                                        of thoughts.
                                        </li>
                                        <li> Study a comparative fiqh module. </li>
                                        <li> Study at least 2 classical Usul al-Fiqh books and their explanations. </li>
                                        <li> Study in depth the sciences of the Quran and the principles that guide a Muffasir
                                             and the different schools of thought within the exegesis of the Quran. </li>
                                        <li> Study 2 main and comprehensive books on the sciences of Hadtih. </li>
                                        <li> Read fully 2 books of Hadith from front to back with 2 of their respective classical
                                             explanations. </li>
                                        <li> Read the belief systems of all main Islamic schools of thoughts and learn about the
                                             different sects of the past and modern times. </li>
                                        <li> Study 3 classical and contemporary books on Fiqh of Dawah. </li>
                                        <li> Study the first 3 periods of Islamic History: the Prophets and their Nations, the
                                             Seerah of Prophet Muhammad (pbuh) and the history of the Khulafa Rashudoon. </li>
                                        <li> Study a comprehensive book on Tazkiyyah and Tasawwuf from a main classical book. </li>
                                        <li> Study logic from the Arabic early Muslim scholars perspective. </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </>
)

export default AIS