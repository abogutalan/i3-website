import React from 'react';
import Events from '../../components/Events';
import { events } from '../../data/events';
import Layout from '../../components/layout';

function EventsPage() {
    return (
        <>
            <Layout>
                <div className="page-header header-filter header-small" data-parallax="true"
                    style={{ backgroundImage: `url('/myAssets/img/events/AndalusiOstaRasoul.jpg')` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 ml-auto mr-auto text-center">
                                <h1 className="title">i3 Events</h1>
                                <h4>See what events are happening soon and come join us!</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main main-raised">
                    <div className="container">
                        <div className="projects-4" id="projects-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8 ml-auto mr-auto text-center">
                                        <h2 className="title">Upcoming Events</h2>
                                        <h5 className="description">
                                            Stay connected with us. Here are our upcoming events:
                                    </h5>
                                        <div className="section-space"></div>
                                    </div>
                                </div>
                                {/* CurrentEvents begin here */}
                                <Events events={events} />
                                <hr />
                                <div className="section-space"></div>
                                    <div className="row">
                                        <div className="col-md-8 ml-auto mr-auto text-center">
                                            <h2 className="title">Past Events</h2>
                                            <h5 className="description">
                                            Stay connected with us. Here are some of our past events:
                                            </h5>
                                        <div className="section-space"></div>
                                    </div>
                                </div>
                                {/* PastEvents begin here */}
                                <Events events={events} />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout> 
        </>
    );
}

export default EventsPage;