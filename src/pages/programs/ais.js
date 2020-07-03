import React from 'react';
import {ais} from '../../data/ais';
import Layout from '../../components/layout';

const AIS = ({d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18}) => (
        <>
        <Layout>
            <div class="page-header header-filter header-small" data-parallax="true"
                    style={{backgroundImage: `url('./myAssets/img/AIS banner.jpg')` }}>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 ml-auto mr-auto text-center">
                                <div class="brand">
                                    <h1 class="title"> Advanced Islamic Studies (AIS) </h1>
                                    <h4> {d1} </h4>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="main main-raised">
                <div class="section">
                    <div class="projects-4" id="projects-4">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8 ml-auto mr-auto text-center">
                                    <h2 class="title"> Introducing the AIS Program </h2>
                                    <h5 class="description"> {d2} </h5>
                                    <div class="section-space"></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-5 ml-auto">
                                    {/* <!-- <div class="card card-background"
                                        style="background-image:url('./myAssets/img/ais flyer.jpg')">
                                        <div class="card-body">
                                        </div>
                                    </div> --> */}
                                    <img src="./myAssets/img/ais flyer.jpg" alt="flyer" style={{width: '100%'}} />
                                </div>
                                <div class="col-md-5 mr-auto">
                                    <div class="info info-horizontal">
                                        <div class="icon icon-danger">
                                            <i class="material-icons">add_alert</i>
                                        </div>
                                        <div class="description">
                                            <h4 class="info-title">Intensive</h4>
                                            <p class="description"> {d3} </p>
                                        </div>
                                    </div>
                                    <div class="info info-horizontal">
                                        <div class="icon icon-info">
                                            <i class="material-icons"> chrome_reader_mode </i>
                                        </div>
                                        <div class="description">
                                            <h4 class="info-title"> Comprehensive </h4>
                                            <p class="description"> {d4} </p>
                                        </div>
                                    </div>
                                    <div class="info info-horizontal">
                                        <div class="icon icon-primary">
                                            <i class="material-icons"> event_available </i>
                                        </div>
                                        <div class="description">
                                            <h4 class="info-title"> Accessible </h4>
                                            <p class="description"> {d5} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="section-space"></div>
                            <div class="row">
                                <div class="col-md-8 ml-auto mr-auto ">
                                    <h2 class="title text-center"> The Objectives of the AIS Program </h2>
                                    <h5 class="description text-center"> {d6} </h5>
                                    <br />
                                    <ol>
                                        <li> {d7} </li>
                                        <li> {d8} </li>
                                        <li> {d9} </li>
                                        <li> {d10} </li>
                                        <li> {d11} </li>
                                        <li> {d12} </li>
                                        <li> {d13} </li>
                                        <li> {d14} </li>
                                        <li> {d15} </li>
                                        <li> {d16} </li>
                                        <li> {d17} </li>
                                        <li> {d18} </li>
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